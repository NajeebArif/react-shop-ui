import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: []
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts= ()=>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts ,singleItem];
        });
        this.setState(()=>{
            return {products: tempProducts}
        });
    }

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetails = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct : product }
        })
    }

    addToCart = id => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return {products: tempProduct, cart: [...this.state.cart, product]}
        }, ()=>{
            console.log(this.state)
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail : this.handleDetails,
                addToCart : this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
