import db from '../models'

export const dashboard = async (req, res) => {
  try {
    // check token
    const response = await db.User.findOne({
      attributes: ['name'],
      where: { phone: req.user.phone },
      raw: true,
    })
    res.send(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: `Failed at auth controller ${error}`,
    })
  }
}
