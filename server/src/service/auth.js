import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
import jwtGenerator from '../utils/jwtGenerator'

require('dotenv').config()

export const registereServices = ({ phone, password, name }) =>
  new Promise(async (resolve, reject) => {
    try {
      const [row, created] = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(12)),
          id: v4(),
        },
      })
      const token = created && jwtGenerator(row.id, row.phone)
      resolve({
        err: token ? 0 : 2,
        msg: token ? 'Register is successfuly' : 'Phone number has been already in use!',
        token: token || null,
      })
    } catch (error) {
      reject(error)
    }
  })

export const loginServices = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      })
      const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
      const token = isCorrectPassword && jwtGenerator(response.id, response.phone)
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? 'Login is successfully'
          : response
          ? 'Wrong password'
          : 'Phone number not found!',
        accessToken: token || null,
      })
    } catch (error) {
      reject(error)
    }
  })
