import './../../components/deal/deal.css'

function Deal(props) {
    return(
        <article className="deal">
            <div className="deal__stage">
                <a className="deal__preview" href="venue.html">
                    <img className="deal__photo" src={props.data.photo} width="1425" height="950" alt=""/>
                    {/*или*/}
                    {/*<div className="dummy">*/}
                    {/*    <img className="dummy__icon" src="../symbols/dummy.svg" width="30" height="30" alt=""/>*/}
                    {/*</div>*/}
                </a>
                <div className="deal__favorites">
                    <button className="bookmark" type="button">
                        <img className="bookmark__icon" src={`symbols/${props.data.isFavorite ? 'heart-fill' : 'heart'}.svg`} width="24" height="24" alt=""/>
                    </button>
                </div>
                <div className="deal__discount">
                    <img className="deal__badge" src={`symbols/${props.data.isHot ? 'coin-red' : 'coin'}.svg`} width="24" height="24" alt="" />
                    {props.data.title}
                </div>
            </div>
            <div className="deal__body">
                <div className="deal__data">
                    <h2 className="deal__heading">{props.data.venue}</h2>
                    <div className="deal__note">{props.data.venueDescription}</div>
                </div>
                <div className="deal__stats">
                    <div className="deal__distance">
                        <div className="highlight">
                            <img className="highlight__icon" src={'symbols/car-tiny.svg'} width="20" height="20" alt=""/>
                            <div className="highlight__value">10 минут</div>
                        </div>
                    </div>
                    <div className="deal__features">

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Deal
