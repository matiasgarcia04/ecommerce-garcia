import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Ecommerce</Link>
            <section>
                <Link to='category/mangas'>mangas</Link>
                <Link to='category/comics'>comics</Link>
                <Link to='category/juegos de mesa'>juegos de mesa</Link>
            </section>
            <CartWidget/>
        </nav>
    )

}

export default NavBar