import React, { Component } from 'react'
import ipad12 from '../images/ipad12.jpg';
import charger from '../images/chargeriphon.jpeg';
import iphone12 from '../images/iphone12.jpg';
import macbookpro from '../images/macbookpro.png';
import Shop from '../FunctionalComponent/FCShop';
import Cart from '../FunctionalComponent/FSCart';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../ClassComponent/Home';

class ManagerShop extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            category: '',
            ShopItems: [
                {
                    id: 1,
                    item: "Charger",
                    category: 'Accessories',
                    cost: 50,
                    src: charger
                },
                {
                    id: 2,
                    item: "IPhone12",
                    category: 'Smartphones',
                    cost: 1500,
                    src: iphone12
                },
                {
                    id: 3,
                    item: "IPad12",
                    category: 'Ipades',
                    cost: 2000,
                    src: ipad12
                },
                {
                    id: 4,
                    item: "MacBook12",
                    category: 'Computers',
                    cost: 4000,
                    src: macbookpro
                }],
            CartItems: [],
            totalPrice: 0
        }
    }

    chooseCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    buyItem = (id) => {
        let item = this.state.ShopItems.find(item => item.id === id)
        let savePrice = item.cost + this.state.totalPrice
        let arr = [...this.state.CartItems, item]
        this.setState({ CartItems: arr, totalPrice: savePrice })
    }

    RemoveItem = (index) => {
        let item = this.state.CartItems[index]
        let savePrice = this.state.totalPrice - item.cost
        let arr = this.state.CartItems.filter((item, i) => i !== index)
        this.setState({ CartItems: arr, totalPrice: savePrice })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" render={() =>
                    <Shop
                        ShopItems={this.state.ShopItems}
                        buyItem={this.buyItem}
                        chooseCategory={this.chooseCategory}
                        category={this.state.category}
                    />}></Route>
                <Route path="/cart" render={() =>
                    <Cart
                        CartItems={this.state.CartItems}
                        totalPrice={this.state.totalPrice}
                        RemoveItem={this.RemoveItem} />}></Route>
            </Switch >
        );
    }
}

export default withRouter(ManagerShop);