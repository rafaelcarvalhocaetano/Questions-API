export const environment = {
  PORT: process.env.PORT || 3000,
  DATABASE: process.env.MONGODB_URI || 'mongodb://localhost:27017/question',
}