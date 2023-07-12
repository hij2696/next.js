import { connectDB } from "@/util/database.js";

export default async function handler(req, res) {
  // const db = (await connectDB).db("forum");
  // let result = await db.collection('post').find().toArray();
  // return res.status(200).json(result);

  let date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const dateStr = year + '-' + month + '-' + day;
  const timeStr = hours + ':' + minutes + ":" + seconds;
  return res.status(200).json(dateStr + " " + timeStr);

  // if (res.method == 'POST') {
  //   return res.status(200).json('POST 완료');
  // }
  // else if (res.method == 'GET') {
  //   return res.status(200).json('GET 완료');
  // }
}