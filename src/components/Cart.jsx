import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'

const Cart = () => {

    const cartCheckboxId = useId()

    return (
        <>
            <label className='cart-button' htmlFor='cart'>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            
            <aside className='cart'>
                <ul>
                    <li>
                        <img 
                            src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" 
                            alt="Iphone" 
                        />
                        <div>
                            <strong>iPhone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
    }

export default Cart