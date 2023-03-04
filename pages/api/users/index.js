import User from '../../../models/user';

export default async function handler(req, res) {
  //ユーザー情報の取得
  const users = await User.findAll();
  res.status(200).json({ users });
};