import star from '../star.png';

/*
props: 
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

<img src={`/airbnb-clone/src/assets/${props.img}`} alt="experience card"/>
src={`../images/${props.img}`}
 */

function Card(props) {
    let badgeText;
    if(props.elem.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.elem.country === "Online") {
        badgeText = "ONLINE";
    } else {
        badgeText = null;
    }
    return (
        <div className="card-element">
            <div className="card-img">
                {badgeText !== null && <p className="card-state">{badgeText}</p>}
                <img src={`/${props.elem.coverImg}`} alt="experience card"/>
            </div>
            <div className="card-valutation">
                <img src={star} alt="red star"/>
                <p className='reviews'>{props.elem.stats.rating}</p>
                <p className='location'>({props.elem.stats.reviewCount}) - {props.elem.location}</p>
            </div>
            <p className='card-description'>{props.elem.title}</p>
            <p className='card-cost'> <span className='important-txt'>From ${props.elem.price} </span>/ person</p>
        </div>
    );
}

export default Card;