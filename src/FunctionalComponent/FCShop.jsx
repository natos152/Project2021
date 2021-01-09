import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Shop(props) {

  return (
    <div style={{ display: 'flex', marginLeft: 30, textAlign: 'center', fontWeight: 'bold' }}>
      <h1>Products</h1><br />
      <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 20 }}>
        Choose your category: <select value={props.category} onChange={props.chooseCategory}>
          <option value=''></option>
          <option value="Accessories">Accessories</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Ipades">Ipades</option>
          <option value="Computers">Computers</option>
        </select>
      </div>
      {props.category === '' && props.ShopItems.filter(item => props.category !== item.category).map((s, index) =>
        <div key={s.id}>
          <img src={s.src} width='300' height='250' /><br />
          {s.item}<br />
          {s.cost}$<br />
          <Button variant="success" onClick={() => props.buyItem(s.id)}>Buy Now !</Button>
        </div>)}
      {props.category !== '' && props.ShopItems.filter(item => props.category === item.category).map((s, index) =>
        <div key={s.id}>
          <img src={s.src} width='300' height='250' /><br />
          {s.item}<br />
          {s.cost}$<br />
          <Button variant="success" onClick={() => props.buyItem(s.id)}>Buy Now !</Button>
        </div>)}
      <div>
        <Link to="/cart" >Cart items</Link>
      </div>
    </div>

  );
}

export default Shop;