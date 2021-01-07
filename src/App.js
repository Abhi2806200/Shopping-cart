
import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products:data.products,
      cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
      size:"",
      sort:"",
    };
  }
  createOrder = (order) =>{
    alert("Need to save order for " + order.name)
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
   cartItems : cartItems.filter((x) =>x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
       JSON.stringify (this.state.cartItems));
  };
  addToCart =(product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id ===product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  sortProducts(event){
    //impl
    console.log(event.target.value);
  }
  filterProducts = (event) => {
    //impl
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({size: event.target.value, product: data.Products});
    } 
    else {
      this.setState({
        size:event.target.value,
        Products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value)>=0
       ),
     });
    }
  };
render(){

  return (
    <div className="grid-container">
      <header>
        <a href="/">OTS (On the spot) </a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}></Filter>
            <Products products={this.state.products}addToCart={this.addToCart}></Products>
          </div>
          <div className="sidebar"> 
          <Cart cartItems={this.state.cartItems} 
          removeFromCart={this.removeFromCart}
          createOrder={this.createOrder}
          />
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}
}
export default App;