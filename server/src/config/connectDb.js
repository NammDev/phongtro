const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:namkhanh@localhost:5432/perntodo') // Example for postgres

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connectDb
