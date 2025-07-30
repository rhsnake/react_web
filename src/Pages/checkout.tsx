import { useState , useEffect } from "react";
import Button from "../components/Button";

function Checkout(){
  const [cartItem,setCartItem] = useState(()=> {
    const localvalue = localStorage.getItem("Cart");
    if (localvalue === null) return [];
    return JSON.parse(localvalue)
  })

    useEffect(()=> {
      localStorage.setItem("Cart",JSON.stringify(cartItem));
    }
    ,[cartItem])

  function handleSelectItem (item :string) {
    console.log(item)
  }

  function removeCartItem (id : string){
    setCartItem( currentCart=>{
      return currentCart.filter(cartItem => cartItem.id != id)
    })
  }

  return (
    <>
    <h1>Welcome to the Checkout</h1>
    <div>
      <ul className="list-group">
        {cartItem.map((item ,index) => 
        <>
          <li className= 'list-group-item' key={item.id}>{item.name}</li>
          <Button color="danger" key={item.id + 'Button'} onClick={() => removeCartItem(item.id)}>Remove</Button>
          </>
        )}
      </ul>
    </div>
    </>
  )
}

export default Checkout