import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

const Filters = () => {

    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangePrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
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
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category:</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}

export default Filters