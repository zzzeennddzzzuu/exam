import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa";


export default function Header() {
let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Gaming devices</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>
            <div onClick={() => setCartOpen(!cartOpen)} className={' shop-cart ${cartopen && "active"}'}><FaShoppingCart /></div>
            {cartOpen &&  (
              <div className='shop-cart-button'>
                
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
