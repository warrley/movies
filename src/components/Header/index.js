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
                    <Link className='favorites' to="/"> <Home fill='currentColor' color='white' width="30" height="30" /><p>Home</p> </Link>
                    <Link className='home' to="/favorites"> <Star fill='currentColor' color='white' width="30" height="30" /><p>Favorites</p> </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;