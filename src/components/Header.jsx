import Filters from "./Filters"

const Header = ({ changeFilters }) => {
    return (
        <header>
            <Filters changeFilters={changeFilters}/>
        </header>
    )
}

export default Header