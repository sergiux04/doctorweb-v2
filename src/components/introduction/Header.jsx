
import './Header.css'; // Import your component-specific CSS file

const Header = () => {
    return (
        <header className="video-header">
            <div className="header-content">
                <h1 className='logo'>Dr. Keith Shannons</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;