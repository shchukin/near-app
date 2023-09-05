import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__floating-panel">
                <div className="nav__wrap container">
                    <div className="nav__inner-wrap">
                        <NavLink to="/promo" className={({isActive}) => isActive ? 'nav__link nav__link--current' : 'nav__link'}>
                            <img className="nav__icon" src="../symbols/nav-promo.svg" width="24" height="24" alt="" />
                            Акции
                        </NavLink>
                        <NavLink to="/" className={({isActive}) => isActive ? 'nav__link nav__link--current' : 'nav__link'}>
                            <img className="nav__icon" src="../symbols/nav-now.svg" width="24" height="24" alt=""/>
                            Сейчас
                        </NavLink>
                        <NavLink to="/results" className={({isActive}) => isActive ? 'nav__link nav__link--current' : 'nav__link'}>
                            <img className="nav__icon" src="../symbols/nav-search.svg" width="24" height="24" alt=""/>
                            Поиск
                        </NavLink>
                        <NavLink to="/dialogs" className={({isActive}) => isActive ? 'nav__link nav__link--current' : 'nav__link'}>
                            <img className="nav__icon" src="../symbols/nav-messages.svg" width="24" height="24" alt=""/>
                            Сообщения
                        </NavLink>
                        <NavLink to="/favorites" className={({isActive}) => isActive ? 'nav__link nav__link--current' : 'nav__link'}>
                            <img className="nav__icon" src="../symbols/nav-favorites.svg" width="24" height="24" alt=""/>
                            Посещу
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
