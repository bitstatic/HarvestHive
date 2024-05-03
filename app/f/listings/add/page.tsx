"use client"
import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import Logo from '@/src/components/Logo'
import { zodResolver } from '@hookform/resolvers/zod'
import { Payment } from '@mui/icons-material'
import { Box, Button, FormControl, InputAdornment, Link, Paper, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const schema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    type: z.string().nonempty({ message: 'Type is required'}),
    stock: z.string().nonempty({ message: 'Stock is required'}).regex(/^\d+$/, { message: 'Stock must be a postive number'}),
    msp: z.string().nonempty({ message: 'MSP is required'}).regex(/^\d+$/, { message: 'MSP must be a postive number'}),
    askprice: z.string().nonempty({ message: 'Ask Price is required'}).regex(/^\d+$/, { message: 'Ask Price must be a postive number'}),
    location: z.string().nonempty({ message: 'Location is required'}),
    pickupOn: z.string().nonempty({ message: 'Pickup Date is required'}),
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
      title="Add Listing"
      startIcon={<ArrowBackIcon />}
    />
    <Box
      maxWidth="sm"
      className="h-screen flex flex-col p-4 pt-12 justify-start mx-auto"
    >
        <Logo />
      <Paper className="p-4 pt-8 center-col gap-6">
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="center-col gap-6 w-full"
        >
          <Box className="w-full flex flex-col items-center gap-4">
              <Box className="w-full">
                <TextField
                  {...register('name')}
                  label="Name"
                  type="text"
                  error={errors.name ? true : false}
                  variant="outlined"
                  fullWidth
                />
                {errors.name && (
                  <Typography color="error" variant="caption" className="w-full">
                    {errors.name.message}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className="w-full">
                <TextField
                {...register('type')}
                label="Type"
                type="text"
                error={errors.type ? true : false}
                variant="outlined"
                fullWidth
                />
                {errors.type && (
                <Typography color="error" variant="caption">
                    {errors.type.message}
                </Typography>
                )}
            </Box>
            <Box className="w-full">
                <TextField
                {...register('stock')}
                label="Stock"
                type= "number"
                error={errors.stock ? true : false}
                variant="outlined"
                fullWidth
                />
                {errors.stock && (
                <Typography color="error" variant="caption">
                    {errors.stock.message}
                </Typography>
                )}
            </Box>
            <Box className="w-full">
                <TextField
                {...register('msp')}
                label="MSP"
                type="number"
                error={errors.msp ? true : false}
                variant="outlined"
                fullWidth
                InputProps={{ endAdornment: ( <InputAdornment position="start"> <Payment /> </InputAdornment> ), }}
                />
                {errors.msp && (
                <Typography color="error" variant="caption">
                    {errors.msp.message}
                </Typography>
                )}
            </Box>
            <Box className="w-full">
                <TextField
                {...register('askprice')}
                label="Ask Price"
                type="number"
                error={errors.askprice ? true : false}
                variant="outlined"
                fullWidth
                />
                {errors.askprice && (
                <Typography color="error" variant="caption">
                    {errors.askprice.message}
                </Typography>
                )}
            </Box>
            <Box className="w-full">
                <TextField
                {...register('location')}
                label="Location"
                type="text"
                error={errors.location ? true : false}
                variant="outlined"
                fullWidth
                />
                {errors.location && (
                <Typography color="error" variant="caption">
                    {errors.location.message}
                </Typography>
                )}
            </Box>
            <Box className="w-full">
                <TextField
                {...register('pickupOn')}
                // label="Pickup On"
                type="date"
                error={errors.pickupOn ? true : false}
                variant="outlined"
                fullWidth
                />
                {errors.pickupOn && (
                <Typography color="error" variant="caption">
                    {errors.pickupOn.message}
                </Typography>
                )}
            </Box>
        <Box className="w-full flex gap-4 justify-end">
            <Button
                variant="outlined"
                className="w-fit"
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
    </>
  )
}

export default page