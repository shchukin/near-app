function Highlight(props) {

    // TO DO: атрибуты width/height
    // Запрограммировать расстояния

    if(props.distance) {
        return (
            <div className="highlight">
                <img className="highlight__icon" src="/symbols/car-tiny.svg" width="20" height="20" alt=""/>
                <div className="highlight__value">{props.distance}</div>
            </div>
        )
    } else {
        return (
            <div className="highlight">
                <img className="highlight__icon" src={props.icon} width="20" height="20" alt=""/>
                {props.text && <div className="highlight__value">{props.text}</div>}
            </div>
        )
    }
}

export default Highlight;
