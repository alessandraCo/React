function Die(props) {
    const style = props.isHeld? {backgroundColor : "#59E391"} :  {backgroundColor : "#FFFFFF"};
    return (
        <div className="die-element" onClick={()=>props.holdDice(props.id)}> 
            <h3 style={style}>{props.value}</h3>
        </div>
    )
}

export default Die;