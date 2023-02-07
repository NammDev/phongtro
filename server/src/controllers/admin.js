import db from '../models'

export const dashboard = async (req, res) => {
  try {
    // check token
    // const response = await db.User.findOne({
    //   where: { phone },
    //   raw: true,
    // })
    res.send(req.user)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: `Failed at auth controller ${error}`,
    })
  }
}
