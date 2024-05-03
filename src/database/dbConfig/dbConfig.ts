import mongoose from 'mongoose'

export async function connectToDB() {
  try {
    // mongoose.connect(process.env.MONGODB_URI!)
    mongoose.connect(process.env.MONGODB_PROD_URI!)
    const db = mongoose.connection

    db.on('connected', () => {
      console.log('MongoDB connected')
    })

    db.on('error', (error) => {
      console.log(
        'MongoDB connection error, please make sure MongoDB is running.'
      )
      console.log(error)
      process.exit()
    })
  } catch (error) {
    console.log('Something went wrong with the DB connection.')
    console.log(error)
    process.exit(1)
  }
}
