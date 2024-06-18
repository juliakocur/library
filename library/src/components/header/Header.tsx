import './Header.css';
import icon_profile from '../../assets/icon_profile.svg'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                <div className="header-logo">Brooklyn Public Library</div>
                <div className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#about">About</a></li>
                        <li className="nav-item"><a href="#favorites">Favorites</a></li>
                        <li className="nav-item"><a href="#shop">Coffee shop</a></li>
                        <li className="nav-item"><a href="#contacts">Contacts</a></li>
                        <li className="nav-item"><a href="#card">Library Card</a></li>
                    </ul>
                    <div className="nav-icon">
                        <img src={icon_profile} alt="profile icon" />
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
