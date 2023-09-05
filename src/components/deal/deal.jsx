import Dummy from "../dummy/dummy.jsx";
import Bookmark from "../bookmark/bookmark.jsx";
import Highlight from "../highlight/highlight.jsx";

function Deal(props) {

    // TO DO: Запрограммировать добавление в избранное

    return (
        <article className="deal">
            <div className="deal__stage">
                <a className="deal__preview" href="venue.html">
                    {
                        props.data.photo
                            ? <img className="deal__photo" src={props.data.photo} width="1425" height="950" alt=""/>
                            : <Dummy/>
                    }
                </a>
                <div className="deal__favorites">
                    <Bookmark checked={props.data.isFavorite}/>
                </div>
                <div className="deal__discount">
                    <img className="deal__badge" src={`symbols/${props.data.isHot ? 'coin-red' : 'coin'}.svg`} width="24" height="24" alt=""/>
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
                        <Highlight distance="10 минут"/>
                    </div>
                    <div className="deal__features">
                        {
                            props.data.highlights.map((element, index)=> {
                                return(
                                    <Highlight icon={element.icon} text={element.text} key={'id' + props.data.id + '-highlight' + index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Deal;
