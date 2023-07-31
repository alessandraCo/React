import imgGrid from '../photo-grid.png'

function HeroComponent() {
    return (
        <div className='heroComponent'>
            <img src={imgGrid} alt="grid of images" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    );
}

export default HeroComponent;