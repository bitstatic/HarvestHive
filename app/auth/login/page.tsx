'use client'

import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Logo from '@/src/components/Logo'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email({ message: 'Enter valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

type FormFields = z.infer<typeof schema>

const login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormFields) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
    } catch (error: any) {
      setError('email', { message: error.message })
      setError('password', { message: error.message })
    }
  }

  return (
    <Box
      maxWidth="sm"
      className="h-screen flex flex-col p-4 pt-12 justify-start mx-auto"
    >
      <Logo />
      <Paper className="p-4 pt-8 center-col gap-6">
        <Typography className="" variant="h5">
          Login to your Account
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="center-col gap-6 w-full"
        >
          <Box className="w-full flex flex-col items-center gap-4">
            <Box className="w-full">
              <TextField
                {...register('email')}
                label="Email"
                type="email"
                error={errors.email ? true : false}
                variant="outlined"
                fullWidth
              />
              {errors.email && (
                <Typography color="error" variant="caption" className="w-full">
                  {errors.email.message}
                </Typography>
              )}
            </Box>
            <Box className="w-full">
              <TextField
                {...register('password')}
                label="Password"
                type="password"
                error={errors.password ? true : false}
                variant="outlined"
                fullWidth
              />
              {errors.password && (
                <Typography color="error" variant="caption" className="w-full">
                  {errors.password.message}
                </Typography>
              )}
            </Box>
          </Box>
          <Box className="center-col gap-2.5">
            <Button type="submit" variant="contained" className="w-fit">
              Login
            </Button>
            <Link href="#">
              <Typography variant="body2">Forgot Password?</Typography>
            </Link>
          </Box>
        </Box>

        <Link href="/auth/signup">
          <Typography variant="body2">
            Don't have an account? Sign up
          </Typography>
        </Link>
      </Paper>
    </Box>
  )
}

export default login
