import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__floating-panel">
                <div className="nav__wrap container">
                    <div className="nav__inner-wrap">
                        <Link className="nav__link nav__link--promo" to="/promo">
                            <img className="nav__icon" src="../symbols/nav-promo.svg" width="24" height="24" alt="" />
                            Акции
                        </Link>
                        <Link className="nav__link nav__link--now nav__link--current" to="/now">
                            <img className="nav__icon" src="../symbols/nav-now.svg" width="24" height="24" alt=""/>
                            Сейчас
                        </Link>
                        <Link className="nav__link nav__link--search" to="/results">
                            <img className="nav__icon" src="../symbols/nav-search.svg" width="24" height="24" alt=""/>
                            Поиск
                        </Link>
                        <Link className="nav__link nav__link--messages" to="/dialogs">
                            <img className="nav__icon" src="../symbols/nav-messages.svg" width="24" height="24" alt=""/>
                            Сообщения
                        </Link>
                        <Link className="nav__link nav__link--favorites" to="/favorites">
                            <img className="nav__icon" src="../symbols/nav-favorites.svg" width="24" height="24" alt=""/>
                            Посещу
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
