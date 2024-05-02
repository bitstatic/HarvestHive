import axios, { AxiosRequestConfig } from 'axios'
import { cookies } from 'next/headers'
import { deleteSession } from '@/src/util/session/session'
class HttpHelper {
  static cookies = cookies()
  static getBackendApiUrl = () => {
    return (
      process.env.BACKEND_API_URL ||
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      'http://localhost:3000'
    )
  }
  static async get(
    baseUrl: string,
    endPoint: string,
    config?: {
      params?: any
      captcha?: string
      token?: string | null
      userid?: string
      formData?: any
    }
  ): Promise<any> {
    let headers: any = {}
    headers.authorization = `Bearer ${this.cookies.get('session')}`
    if (config?.token) {
      headers.authorization = `Bearer ${config.token}`
    }
    let axiosConfig: AxiosRequestConfig = {
      headers,
      method: 'GET',
    }
    if (config?.params && Object.keys(config.params).length > 0) {
      axiosConfig.params = config.params
    }
    try {
      const response = await axios.get(baseUrl + endPoint, axiosConfig)
      return response.data
    } catch (error: any) {
      this.handleErrors(error)
      return error
    }
  }

  static async post(
    baseUrl: string,
    endPoint: string,
    other?: {
      body?: any
      customToken?: {
        gpId?: string
      }
      token?: string
      formDataBody?: any
    }
  ): Promise<any> {
    let data = other?.formDataBody
      ? other.formDataBody
      : JSON.stringify(other?.body || {})
    try {
      let headers: any = {
        'Content-Type': other?.formDataBody
          ? 'multipart/form-data'
          : 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': `${baseUrl}`,
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      }
      headers.Authorization = `Bearer ${this.cookies.get('session')}`
      const response = await axios({
        url: baseUrl + endPoint,
        headers,
        method: 'POST',
        data: data,
      })
      return response.data
    } catch (error: any) {
      this.handleErrors(error)
      return error
    }
  }

  static handleErrors = (error: any) => {
    if (!error) {
      return
    }
    let message = ''
    if (error.message) {
      message = error.message
    }
    if (error.response) {
      if (
        error?.response?.data?.msg &&
        typeof error.response.data.msg === 'string'
      ) {
        message = error.response.data.msg || error.response.statusText
        if (error.response.data.msg === 'Invalid access token') {
          localStorage.clear()
          deleteSession()
          window.location.href = window.location.origin
        }
      }
      if (
        error.response.data.message ||
        typeof error.response.data.message === 'string'
      ) {
        message = error.response.data.message
      }
      if (error.response.data?.message?.length) {
        message = error.response.data?.message[0]
      }
      if (error.response.status === 401 || error.response.status === 403) {
        message = error.response.data.msg
        if (error.response.data.msg === 'Invalid access token') {
          localStorage.clear()
          deleteSession()
          window.location.href = window.location.origin
        }
      }
    }
    if (!message) {
      return
    }
    let alert: any = {
      type: 'error',
      message: message,
    }
  }
}
