import './../../components/bookmark/bookmark.css'

function Bookmark(props) {

    return(
        <button className="bookmark" type="button">
            <img className="bookmark__icon" src={`symbols/${props.checked ? 'heart-fill' : 'heart'}.svg`} width="24" height="24" alt=""/>
        </button>
    )
}

export default Bookmark
