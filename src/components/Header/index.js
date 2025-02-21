import { Home, Star } from 'lucide-react';
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='separator'>
                <Link className='logo' to="/">
                    <div className='logo-text'>
                        <h1>W</h1> <span>FLIX</span>
                    </div>
                </Link>
                <div className='menu'>
                    <Link className='favorites' to="/"> <Home fill='currentColor' width="30" height="30" />Home </Link>
                    <Link className='home' to="/favorites"> <Star fill='currentColor' width="30" height="30" />Favorites </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;