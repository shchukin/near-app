function Button(props) {
    return (
        <button className={`button button--${props.theme}`} type={"button"}>
            {
                props.socialIcon && <img className="button__social-icon" src={`./public/symbols/${props.socialIcon}.svg`} width="30" height="30" alt=""/>
            }
            {
                props.children
            }
        </button>
    )
}

export default Button
