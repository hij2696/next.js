// import {age, Hi} from './data.js';

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Banner item="롯데"/>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Btn color="blue"/>
    </div>
  )
}

function Banner(props) {
  return <h5>{props.item}카드 결제 행사 중</h5>
}

function Btn(props) {
  return <button style={{ background: props.color }}>버튼</button>
}

function CartItem(props) {
  return(
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}