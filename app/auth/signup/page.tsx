'use client'

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import Logo from '@/src/components/Logo'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { clear } from 'console'

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' })
    .max(20, { message: 'Username must be at most 20 characters' }),
  email: z.string().email({ message: 'Enter valid email' }),
  PhoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 characters' })
    .length(10, { message: 'Phone number must be exactly 10 characters' })
    .regex(/^[0-9]*$/, { message: 'Phone number must contain only numbers' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

type FormFields = z.infer<typeof schema>

const signup = () => {
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
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
    } catch (error: any) {
      console.log(error)
    }
  }

  const [value, setValue] = React.useState('Farmer')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  console.log(value)

  const [activeStep, setActiveStep] = React.useState(true)

  return (
    <Box
      maxWidth="sm"
      className="h-screen flex flex-col p-4 pt-12 justify-start mx-auto"
    >
      <Logo />
      {/* todo : add a stepper */}
      <Paper className="p-4 pt-8 center-col gap-6">
        <Typography className="" variant="h5">
          Enter details to Sign Up
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="center-col gap-6 w-full"
        >
          <Box className="w-full flex flex-col items-center gap-4">
            <Box className="w-full">
              <TextField
                {...register('username')}
                label="Name"
                type="username"
                error={errors.username ? true : false}
                variant="outlined"
                fullWidth
              />
              {errors.username && (
                <Typography color="error" variant="caption" className="w-full">
                  {errors.username.message}
                </Typography>
              )}
            </Box>
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
                {...register('PhoneNumber')}
                label="Phone Number"
                type="tel"
                error={errors.PhoneNumber ? true : false}
                variant="outlined"
                fullWidth
              />
              {errors.PhoneNumber && (
                <Typography color="error" variant="caption" className="w-full">
                  {errors.PhoneNumber.message}
                </Typography>
              )}
            </Box>
            <Box className="w-full">
              <TextField
                {...register('password')}
                label="password"
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
            <Box className="w-full">
              <TextField
                {...register('confirmPassword')}
                label="Confirm Password"
                type="password"
                error={errors.confirmPassword ? true : false}
                variant="outlined"
                fullWidth
              />
              {errors.confirmPassword && (
                <Typography color="error" variant="caption" className="w-full">
                  {errors.confirmPassword.message}
                </Typography>
              )}
            </Box>
          </Box>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Farmer"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
              className="gap-6 w-full"
            >
              <FormControlLabel
                value="Farmer"
                control={<Radio />}
                label="Farmer"
              />
              <FormControlLabel
                value="Business Firm"
                control={<Radio />}
                label="Business Firm"
              />
            </RadioGroup>
          </FormControl>

          <Box className="center-col gap-2.5">
            <Button
              type="submit"
              variant="contained"
              className="w-fit"
              endIcon={<ArrowForwardIcon />}
            >
              GET STARTED
            </Button>
            <Link href="#">
              <Typography variant="body2">Forgot Password?</Typography>
            </Link>
          </Box>
        </Box>

        <Link href="/auth/login">
          <Typography variant="body2">Don't have an account? Login</Typography>
        </Link>
      </Paper>
    </Box>
  )
}

export default signup
