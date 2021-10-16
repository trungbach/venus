import React from 'react';
import styles from './style.module.scss';
import { Select} from 'antd'
import SXP from '@/public/SXP.png';
import Image from 'next/image';
import Chart from './Chart';
import { PlusCircleFilled } from '@ant-design/icons';
const { Option } = Select;
const Overview = () => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
      
    const listBlocks = [
        { 
            name: "SXP1",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        }
    ]

    const listBlockUI = listBlocks.map((item, index) => {
        return (
            <Option key={index} value={item.name}>
                <Image width={28} height={28} src={item.imgUrl} alt={item.name} /> 
                <span className={styles.dropText}>{item.name}</span>
            </Option>
        )
    })

    return (
        <div className={`${styles.overview} ${styles.totallyLeft}`}>
            <div className={styles.drop}>
                <Select defaultValue='SXP1' style={{ width: 150, marginRight: '10px' }}
                        dropdownClassName={styles.selectCrypto} onChange={handleChange}>
                    {listBlockUI}
                </Select>
                <p>Overview</p>
            </div>
            <div className={styles.addToken}>
                <div className={styles.token}>
                    <span>SXP</span>
                    <PlusCircleFilled />
                </div>
                <div className={styles.token}>
                    <span>vSXP</span>
                    <PlusCircleFilled />
                </div>
                <div>To MetaMask</div>
            </div>
            <div className={styles.historyLabel}>Historical rates</div>
            <div className={styles.totalSupply}>
                <div className={styles.totalValue}>0.18%</div>
                <div className={styles.totalDesc}>Supply APY</div>
            </div>

           <Chart />
            <ul>
                <li>
                    <div className={styles.label}>price</div>
                    <div className={styles.value}>$2.50987134</div>
                </li>
                <li>
                    <div className={styles.label}>market liquidity</div>
                    <div className={styles.value}>81,783,075.18707505 SXP</div>
                </li>
                <li>
                    <div className={styles.label}># of suppliers</div>
                    <div className={styles.value}>2,591</div>
                </li>
                <li>
                    <div className={styles.label}># of borrowers</div>
                    <div className={styles.value}>929</div>
                </li>
                <li>
                    <div className={styles.label}>reserves</div>
                    <div className={styles.value}>126596.06064678 SXP</div>
                </li>
                <li>
                    <div className={styles.label}>revers factor</div>
                    <div className={styles.value}>20%</div>
                </li>
                <li>
                    <div className={styles.label}>collateral factor</div>
                    <div className={styles.value}>50%</div>
                </li>
                <li>
                    <div className={styles.label}>total supplu</div>
                    <div className={styles.value}>$212,314,821.19</div>
                </li>
                <li>
                    <div className={styles.label}>total borrow</div>
                    <div className={styles.value}>$6,670,559.42</div>
                </li>
                <li>
                    <div className={styles.label}>exchange rate</div>
                    <div className={styles.value}>1 SXP = 49.639864 vSXP</div>
                </li>
            </ul>
        </div>
    );
}

export default Overview;
