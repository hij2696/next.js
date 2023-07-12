export default function Home() {
  let name = 'hwang'
  let link = 'http://google.com'
  return (
    <div>
      <h3 style={{ color: 'red', fontSize:'30px'}}>하이</h3>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev { name }</p>
      <a href= { link }>링크</a>
    </div>
  )
}