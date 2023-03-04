import User from '../../../models/user';

export default async function handler(req, res) {
    const { id } = req.query;
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: "not found"});
    }
  };