import './../../components/button/button.css'


function Button(props) {
  return(
    <button className={`button button--${props.theme}`} type={"button"}>
        {
            props.children
        }
    </button>
  )
}

export default Button
