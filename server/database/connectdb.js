import mongooes from 'mongoose';

export const connectDB = async (URI) => {
    try {
        await mongooes.connect(URI, {})
        console.log('Database connected successfully')}
    catch (error) {
      console.log('Error connecting to database:', error.message);
    }
    
    }
    