import React from 'react';
import styles from './style.module.scss';
import { Table, Switch } from 'antd';
import Image from 'next/image'
import SXP from '@/public/SXP.png';
import { ArrowUpOutlined, ArrowDownOutlined  } from '@ant-design/icons';

const BorrowMarket = () => {
    const columns = [
        {
          title: 'Asset',
          dataIndex: 'asset',
          key: 'asset',
          render: text => <div className={styles.asset}>
           <Image src={SXP} alt='coin' width='25' height='25'/>
           <span>{text}</span>
          </div>,
        },
        {
          title: 'APY',
          dataIndex: 'apy',
          key: 'apy',
          render: text =>
           <div className={styles.apy}>
             <ArrowDownOutlined />
             <span className={styles.apyRedLabel}>{text}</span> 
            </div>,
          align: 'right'
        },
        {
          title: 'Wallet',
          dataIndex: 'wallet',
          key: 'wallet',
          render: text => <div className={styles.wallet}>{text}</div>,
          align: 'right'
        },
        {
          title: 'Liquidity',
          key: 'liquidity',
          dataIndex: 'liquidity',
          render: text => <div className={styles.wallet}>${text}</div>,
          align: 'right'
        },
    ];
      
    const data = [
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    {
        asset: 'SXP',
        apy: '0.04%',
        wallet: '0 SXP',
        liquidity: '192,576,080.2',
    },
    ];

    return (
        <div className={styles.supplyMarket}>
             <Table 
             pagination={false}
             columns={columns} dataSource={data} />
        </div>
    );
}

export default BorrowMarket;
