import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

export const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return

    return await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
} 