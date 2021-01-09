import React from 'react';
import Button from 'react-bootstrap/Button';


function Cart(props) {
    return (
        <div style={{ textAlign: 'center', marginTop: 10 }}>
            <h4 style={{ textAlign: 'center' }}>Your Cart</h4>
            <div style={{ marginLeft: 775, border: '3px solid', width: 200, fontWeight: 'normal' }}>
                {props.CartItems.map((cart, index) =>
                    <div key={index}>
                        {cart.item} {cart.cost}$<br></br>
                        <Button variant="warning" onClick={() => props.RemoveItem(index)}>Remove</Button>
                    </div>
                )}
            </div>
            <p style={{fontWeight: 'bold'}}>
                Your toal price: {props.totalPrice}$
            </p>
        </div>

    );
}

export default Cart;