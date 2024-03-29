import React from "react"
import CartItem from "./CartItem"

function Cart({inCart, removeFromTheCart, setInCart}) {

    function handleCheckout() {
        setInCart([])
        alert('Thanks for shopping at Freshmade Market! Enjoy!')
    }

    const cartPrice = inCart.map((cartItems) => {
        return cartItems.price
    })
   .reduce(function(a, b){
        return a + b;
    }, 0)

    

    const cartItems = inCart.map((cartItems) => {
        return (
            <CartItem key={cartItems.id} cartItem={cartItems} removeFromTheCart={removeFromTheCart} cartPrice={cartPrice}/>
        )
    })
    return(
        <div className="page-layout">
            <h2> My Cart:</h2>
            {cartItems}
             <h3>Total: ${cartPrice.toFixed(2)}  </h3>
            <div class="ui vertical animated button" tabindex="0" onClick={handleCheckout}>
                <div class="hidden content"> Checkout </div>
                <div class="visible content">
                    <i class="shop icon"></i>
                </div>
            </div>
        </div>
        
    )
}

export default Cart
