'use client'

import {useState} from "react"
// import Image from "next/image"
// import Food0 from '@/public/food0.png'
// import Food1 from '@/public/food1.png'
// import Food2 from '@/public/food2.png'

export default function List() {
  let product = ['Tomatoes', 'Pasta', 'Coconut']
  let arr = [2,3,4]
  let newArr = arr.map(function(a, i) {
    console.log(a)
    return 10
  })
  console.log(newArr)

  let [quantity, change] = useState([0, 0, 0]) // client component 안에서만 사용 가능

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        product.map(function(a, i) {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img" alt="토마토"/>
              {/* <Image src={Food0} className="food-img"/> 최적화
              <Image src={"외부 경로"} width={500} height={400}/> */}
              <h4>{ product[i] } $40</h4>
              <span> {quantity[i]} </span>
              <button onClick={() => {
                let copy = [...quantity]
                copy[i]++
                change(copy)
              }}>+</button>
              <button onClick={() => {
                let copy = [...quantity]
                copy[i]--
                change(copy)
              }}>-</button>
            </div>
          )
        })
      }
    </div>
  )
}