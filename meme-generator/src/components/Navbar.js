import logo from '../troll-face.png'

function Navbar() {
    return (
        <nav>
            <div className="nav-logo-title">
                <img src={logo} alt="troll-face logo"/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </nav>
    );
}

export default Navbar;