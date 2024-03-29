import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./debtCardTabs.module.scss";

import Modal from "../Modal";
import DebtCardTabClient from "../DebtCardTabClient";
import DebtCardTabDebt from "../DebtCardTabDebt";
import DebtCardTabPhone from "../DebtCardTabPhone";
import DebtCardTabAddress from "../DebtCardTabAddress";
import DebtCardTabEmail from "../DebtCardTabEmail";
import DebtCardTabPayment from "../DebtCardTabPayment";


const DebtCardTabs = ({personData, debtData, addressesData, phonesData, emailsData, paymentsData}) => {
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
              <DebtCardTabClient 
                personData={personData}
              />
            </TabPanel>
            <TabPanel>
              <DebtCardTabDebt
                debtData={debtData}
              />
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
              <DebtCardTabPhone
                phonesData={phonesData}
                Modal = {Modal}
              />
            </TabPanel>
            <TabPanel>
              <DebtCardTabAddress
                addressesData={addressesData}
                Modal = {Modal}
              />
            </TabPanel>
            <TabPanel>
              <DebtCardTabEmail
                emailsData={emailsData}
                Modal = {Modal}
              />
            </TabPanel>
            <TabPanel>
              <DebtCardTabPayment
                paymentsData={paymentsData}
                Modal = {Modal}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      

      
    </div>


    
  );
};

export default DebtCardTabs;
