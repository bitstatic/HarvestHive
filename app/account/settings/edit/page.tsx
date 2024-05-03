"use client"
import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import React from 'react'
import Logo from '@/src/components/Logo'
import { Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const schema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }).min(3, { message: 'Name must be atleast 3 characters long'}).max(30, { message: 'Name must be atmost 30 characters long'}),
  email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invalid Email'}),
  phone: z.string().nonempty({ message: 'Phone is required' }).regex(/^\d{10}$/, { message: 'Invalid Phone Number'}),
  DateOfBirth: z.string().nonempty({ message: 'Date of Birth is required'}), 
})

type FormFields = z.infer<typeof schema>

const page = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async(data: FormFields) => {
    console.log(data);
  }

  return (
    <>
    <AppbarWMenu
      title="Edit Profile"
      primaryOption='home'
    />
    <Box className='flex flex-col mt-8 gap-4 items-center'> 
      <Avatar sx={{ width: 100, height: 100 }}  />
      <Box className='flex flex-col items-center'>
        <Typography variant='h5'>
          User's Name
        </Typography>
        <Typography variant='caption'>
          Farmer
        </Typography>
      </Box>
      <Box className='w-full p-4'>
        <Paper className='p-4 gap-4 cener-col w-full'>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="center-col gap-4 w-full"
          >
            <Box className="w-full">
              <TextField
                {...register('name')}
                label="Name"
                type="text"
                variant="outlined"
                fullWidth
                error={errors.name ? true : false}
                helperText={errors.name ? errors.name.message : ''}
              />
            </Box>
            <Box className="w-full">
              <TextField
                {...register('email')}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Box>
            <Box className="w-full">
              <TextField
                {...register('phone')}
                label="Phone"
                type="text"
                variant="outlined"
                fullWidth
                error={errors.phone ? true : false}
                helperText={errors.phone ? errors.phone.message : ''}
              />
            </Box>
            <Box className="w-full">
              <TextField
                {...register('DateOfBirth')}
                type="date"
                variant="outlined"
                fullWidth
                error={errors.DateOfBirth ? true : false}
                helperText={errors.DateOfBirth ? errors.DateOfBirth.message : ''}
              />
            </Box>
            <Box className="w-full flex gap-4 justify-end">
              <Button
                  variant="outlined"
                  className="w-fit"
                  href="/f/listings"
              >
                  CANCEL
              </Button>
              <Button
                  type="submit"
                  variant="contained"
                  className="w-fit"
              >
                  SUBMIT
              </Button>
            </Box>
        </Box>
        </Paper>
      </Box>

    </Box>
    </>
  )
}

export default page