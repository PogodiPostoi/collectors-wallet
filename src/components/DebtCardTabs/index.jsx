import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./debtCardTabs.module.scss";
import DebtCardTabClient from "../DebtCardTabClient";
import DebtCardTabDebt from "../DebtCardTabDebt";
import DebtCardTabPhone from "../DebtCardTabPhone";
import DebtCardTabAddress from "../DebtCardTabAddress";
import DebtCardTabEmail from "../DebtCardTabEmail";
import DebtCardTabPayment from "../DebtCardTabPayment";

const DebtCardTabs = () => {
  return (
    <div className="debt-card-tabs">
      <div className="bg-block debt-card-tabs__width" >
        <div className="bg-block__container debt-card-tabs__flex">
          <Tabs className="debt-card-tabs__tabs-container">
            <TabList className="debt-card-tabs__tab-container">
              <Tab className="debt-card-tabs__tab-title">Клиент</Tab>
              <Tab className="debt-card-tabs__tab-title">Договор</Tab>
            </TabList>

            <TabPanel>
              <DebtCardTabClient />
            </TabPanel>
            <TabPanel>
              <DebtCardTabDebt />
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <div className="bg-block debt-card-tabs__width" >
        <div className="bg-block__container debt-card-tabs__flex">
          <Tabs className="debt-card-tabs__tabs-container">
            <TabList className="debt-card-tabs__tab-container">
              <Tab className="debt-card-tabs__tab-title">Телефоны</Tab>
              <Tab className="debt-card-tabs__tab-title">Адреса</Tab>
              <Tab className="debt-card-tabs__tab-title">Email</Tab>
              <Tab className="debt-card-tabs__tab-title">Платежи</Tab>
            </TabList>

            <TabPanel>
              <DebtCardTabPhone/>
            </TabPanel>
            <TabPanel>
              <DebtCardTabAddress/>
            </TabPanel>
            <TabPanel>
              <DebtCardTabEmail/>
            </TabPanel>
            <TabPanel>
              <DebtCardTabPayment/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      

      {/* <div className="debt-card-tabs">
        <div className="bg-block debt-card-tabs__width">
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
            <DebtCardTabDebt />
          </div>
        </div> */}
        {/* <div className="bg-block debt-card-tabs__width">
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
            <DebtCardTabPhone/>
            <DebtCardTabAddress/>
            <DebtCardTabEmail/>
          </div>
        </div> */}
        {/* <div className="bg-block debt-card-tabs__width">
          <div className="bg-block__container debt-card-tabs__flex">
            <div className="debt-card-tabs__tabs-container">
              <div className="debt-card-tabs__tab-container">
                <p className="debt-card-tabs__tab-title">Платежи</p>
              </div>
            </div>
            <DebtCardTabPayment/>
          </div>
        </div>
      </div> */}
      
    </div>


    
  );
};

export default DebtCardTabs;
