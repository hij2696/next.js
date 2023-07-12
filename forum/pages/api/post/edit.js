import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == 'POST') {
    let change = {
      title: req.body.title,
      content: req.body.content
    };
    if (req.body.title == '' && req.body.content == '') {
      return res.status(500).json('제목, 내용 써주라')
    }
    else if (req.body.title == '') {
      return res.status(500).json('제목 써주라')
    }
    else if (req.body.content == '') {
      return res.status(500).json('내용 써주라')
    }
    try {
      const db = (await connectDB).db('forum');
      let result = await db.collection('post').updateOne(
        {_id: new ObjectId(req.body._id)},
        {$set: change}
      );
      return res.redirect(302, '/list');
    } catch (err) {
      alert('에러가 발생했어요!');
    }
  }
}