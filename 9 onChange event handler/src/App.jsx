import { useState } from "react"

function App() {

  const [name, setName] = useState("Guest")
  const [comment, setComment] = useState("comment")
  const [payment, setPayment] = useState("UPI")
  const [shipping, setShipping] = useState("Delivery")

  const nameHandler = (e) => setName(e.target.value)
  const commentHandler = (e) => setComment(e.target.value)
  const paymentHandler = (e) => setPayment(e.target.value)
  const shippingHandler = (e) => setShipping(e.target.value)


  return (
    <>
      <div className="container">
        <input type="text" value={name} onChange={nameHandler} />
        <p>Name:{name}</p>
        <textarea type="text" value={comment} onChange={commentHandler} />
        <p>Comment: {comment}</p>
        
        <select value={payment} onChange={paymentHandler} >
          <option value="">Select an option</option>
          <option value="UPI">UPI</option>
          <option value="Netbanking">Netbanking</option>
        </select> 
        <p>Payment: {payment}</p>

        <input type="radio" value="Pickup" checked={shipping==='Pickup'}  onChange={shippingHandler}/>Pickup
        <input type="radio" value="Delivery" checked={shipping==='Delivery'} onChange={shippingHandler}  />Delivery

        <p>Shipping: {shipping}</p>
      </div>
    </>
  )
}

export default App
