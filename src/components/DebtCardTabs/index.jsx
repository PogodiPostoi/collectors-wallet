import "./debtCardTabs.module.scss";
import DebtCardTabClient from "../DebtCardTabClient";

const DebtCardTabs = () => {
  return (
    <div className="debt-card-tabs">
      <div className="bg-block">
        <div className="bg-block__container debt-card-tabs__flex">
          <div className="debt-card-tabs__tabs-container">
            <div className="debt-card-tabs__tab-container">
              <p className="debt-card-tabs__tab-title">Клиент</p>
            </div>
            <div className="debt-card-tabs__tab-container">
              <p className="debt-card-tabs__tab-title">Договор</p>
            </div>
          </div>
          <DebtCardTabClient />
        </div>
      </div>
      <div className="bg-block">
        <div className="bg-block__container debt-card-tabs__flex">
          <div className="debt-card-tabs__tabs-container">
            <div className="debt-card-tabs__tab-container">
              <p className="debt-card-tabs__tab-title">Телефоны</p>
            </div>
            <div className="debt-card-tabs__tab-container">
              <p className="debt-card-tabs__tab-title">Email</p>
            </div>
            <div className="debt-card-tabs__tab-container">
              <p className="debt-card-tabs__tab-title">Адреса</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtCardTabs;
