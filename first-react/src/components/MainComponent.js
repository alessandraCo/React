import backgroundLogo from '../assets/background-logo.png'

function MainComponent() {
    return (
        <div className="main-content">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={backgroundLogo} alt="background react logo"/>
        </div>
    );
}

export default MainComponent;