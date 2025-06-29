import React, {useState,useEffect, useCallback, useRef,useMemo} from 'react'
import {createRoot} from 'react-dom/client'
import './app.css'
import Product from './Product.jsx'
import {Cart} from "./Cart.jsx"
import ToDo from './Todo.jsx'
import CartContext from './CartContext.jsx'

function App() {
	const [cart,setCart]  = useState([])

	const products = [
		{id:1,name:'Js',price:300},
		{id:2,name:'Spring boot',price:700},
		{id:3,name:'Java',price:500},
		{id:4,name:'Reactjs',price:600},
	]	
	

	const addProduct = useCallback((e) => {
		let data = parseInt(e.target.getAttribute("data"));
		
		let findData = cart.findIndex(cur => cur.data === data);
		if(findData !== -1){
			cart[findData].count++
			setCart(cart => [...cart])
		}
		else{
			setCart(cart => [...cart ,{data,count:1}])
		}
		
	},[products])

	const totalQuatityProduct = useMemo(() => {
		let total = cart.reduce((acc,cur,index) => {
			return acc + cur.count;
		},0)
		return total;
	},[cart])

	const totalMoneyCart = useMemo(() => {
		return cart.reduce((acc,cur,index) => {
			let findProduct = products.find(product => product.id ==cur.data);
			return acc + findProduct.price * cur.count;
		},0)
	},[cart])

  return (
	<>
		{/* <Product onClick = {addProduct} products = {products}/>
		<Cart
			cartRef = {cart}
			totalQuantityProduct = {totalQuatityProduct}
			totalMoneyCart = {totalMoneyCart}
		/>

		<ToDo /> */}

		<CartContext />
	</>
  );
}

export default App

