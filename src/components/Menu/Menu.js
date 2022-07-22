import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='backgroundMenu'>
        <Link to="/">
        Main page
        </Link>
        <Link to="/pokemontable">
        Pokemon Table
        </Link>
        </div>
    )
}

export default Menu;
