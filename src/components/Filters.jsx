import { useState } from 'react'
import './Filters.css'

const Filters = ({ changeFilters }) => {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangePrice = (event) => {
        setMinPrice(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        changeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className='filters'>

            <div>
                <label htmlFor='price'>Price:</label>
                <input 
                    type='range'  
                    id='price'
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor='category'>Category:</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}

export default Filters