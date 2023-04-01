import React from 'react'
import Header from '../../Component/Header'
import NewOrder from '../../Component/NewOrderContainer'


const Order = () => {
  return (
    <div>
      <Header isDashBoard={false}/>
      <NewOrder/>
    </div>
  )
}

export default Order