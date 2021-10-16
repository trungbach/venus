import React from 'react';
import styles from './style.module.scss';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import SupplyMarket from './SupplyMarket';
import BorrowMarket from './BorrowMarket';
import MintRepay from './MintRepay';
const AllMarkets = () => {

    function callback(key) {
        console.log(key);
    }

    return (
        <div className={styles.markets}>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Supply Market" key="1">
                    <SupplyMarket />
                </TabPane>
                <TabPane tab="Borrow Market" key="2">
                    <BorrowMarket />
                </TabPane>
                <TabPane tab="Mint/Repay VAI" key="3">
                    <MintRepay />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default AllMarkets;
