import './header.module.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__profile">
                <img src="/img/header/user_icon.svg" alt="profile icon"/>
                <span className="header__username">Погодин Артем</span>
            </div>
            <div className="header__modules">
                <ul>
                    <li>
                        {/* <img src="/img/header/debts_module_icon.svg" alt="debts icon"/> */}
                        <span className="header__module-name">Долги</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;