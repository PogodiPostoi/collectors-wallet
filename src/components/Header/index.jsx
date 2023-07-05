import { Outlet, Link } from "react-router-dom";

import "./header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const debtCardList = useSelector((state) => state.debtCardList.debtCardList);

  return (
    <>
      <header className="header">
        <div className="header__profile">
          <img src="/img/header/user_icon.svg" alt="profile icon" />
          <span className="header__username">Погодин Артем</span>
        </div>
        <div className="header__modules">
          <ul>
            <li>
              <Link
                to="/"
                className="header__module-name header__module-name--debts-module"
              >
                Долги
              </Link>
            </li>
            {debtCardList.id && (
              <li>
                <Link
                  to="/debtCard"
                  className="header__module-name header__module-name--debt-card"
                >
                  Карточка должника
                </Link>
              </li>
            )}
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
