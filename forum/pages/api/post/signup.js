import { connectDB } from "@/util/database.js";

export default async function handler(req, res) {
  if (req.method == 'POST') {
    if (req.body.title == '' && req.body.content == '') {
      return res.status(500).json('id, password를 기입해주세요.')
    }
    else if (req.body.title == '') {
      return res.status(500).json('id를 기입해주세요.')
    }
    else if (req.body.content == '') {
      return res.status(500).json('password를 기입해주세요.')
    }
    try {
      const db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(req.body);
      return res.redirect(302, '/list');
    } catch (err) {
      alert('에러가 발생했어요!');
    }
  }
}