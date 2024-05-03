"use client"
import AppbarWMenu from '@/src/components/appbars/AppbarWMenu'
import Logo from '@/src/components/Logo'
import { zodResolver } from '@hookform/resolvers/zod'
import { Payment } from '@mui/icons-material'
import { Box, Button, FormControl, InputAdornment, Link, Modal, Paper, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const schema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }).min(3, { message: 'Name must be atleast 3 characters long'}).max(30, { message: 'Name must be atmost 30 characters long'}),
    type: z.string().nonempty({ message: 'Type is required'}).min(3, { message: 'Type must be atleast 3 characters long'}).max(30, { message: 'Type must be atmost 30 characters long'}),
    stock: z.string().nonempty({ message: 'Stock is required'}).regex(/^\d+$/, { message: 'Stock must be a postive number'}).min(1, { message: 'Stock must be atleast 1'}),
    msp: z.string().nonempty({ message: 'MSP is required'}).regex(/^\d+$/, { message: 'MSP must be a postive number'}).min(1, { message: 'MSP must be atleast 1'}),
    askprice: z.string().nonempty({ message: 'Ask Price is required'}).regex(/^\d+$/, { message: 'Ask Price must be a postive number'}).min(1, { message: 'Ask Price must be atleast 1'}),
    location: z.string().nonempty({ message: 'Location is required'}).min(3, { message: 'Location must be atleast 3 characters long'}).max(50, { message: 'Location must be atmost 50 characters long'}),
    pickupOn: z.string().nonempty({ message: 'Pickup Date is required'}),
})

type FormFields = z.infer<typeof schema>

const page = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(schema),
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const onSubmit = async(data: FormFields) => {
        handleOpen();
        console.log(data);
    }

  return (
    <>
    <AppbarWMenu
      title="Add Listing"
      primaryOption='back'
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
                InputProps={{ endAdornment: ( <InputAdornment position="start"> <Payment /> </InputAdornment> ), }}
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
                InputProps={{ endAdornment: ( <InputAdornment position="start"> <LocationOnIcon/> </InputAdornment> ), }}
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
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box className=" center-col gap-4 rounded-lg bg-white w-80 min-h-80" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) ' }}>
                    <DoneAllIcon style={{ color: 'green', fontSize: 170 }} />
                    <Typography variant="body1">Your Order Has Been Placed</Typography>
                    <Button href='#' variant="contained" endIcon={<ArrowForwardIcon/>}>CHECK DETAILS</Button>
                </Box>
            </Modal>
        </Box>
        </Box>
      </Paper>
    </Box>
    </>
  )
}

export default page