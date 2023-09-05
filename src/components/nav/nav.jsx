function Nav() {
    return (
        <nav className="nav">
            <div className="nav__floating-panel">
                <div className="nav__wrap container">
                    <div className="nav__inner-wrap">
                        <a className="nav__link nav__link--promo" href="promo.html">
                            <img className="nav__icon" src="../symbols/nav-promo.svg" width="24" height="24" alt="" />
                            Акции
                        </a>
                        <a className="nav__link nav__link--now nav__link--current" href="now.html">
                            <img className="nav__icon" src="../symbols/nav-now.svg" width="24" height="24" alt=""/>
                            Сейчас
                        </a>
                        <a className="nav__link nav__link--search" href="results.html">
                            <img className="nav__icon" src="../symbols/nav-search.svg" width="24" height="24" alt=""/>
                            Поиск
                        </a>
                        <a className="nav__link nav__link--messages" href="dialogs.html">
                            <img className="nav__icon" src="../symbols/nav-messages.svg" width="24" height="24" alt=""/>
                            Сообщения
                        </a>
                        <a className="nav__link nav__link--favorites" href="favorites.html">
                            <img className="nav__icon" src="../symbols/nav-favorites.svg" width="24" height="24" alt=""/>
                            Посещу
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
