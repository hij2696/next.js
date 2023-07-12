export default function SignUp() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/post/signup" method="POST">
        <input name="title" placeholder="id"/>
        <input name="content" placeholder="password"/>
        <button type="submit">가입</button>
      </form>
    </div>
  )
}