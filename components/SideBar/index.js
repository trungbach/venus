import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Layout, Menu } from 'antd';
import Link from 'next/link'
import Image from 'next/image';
import {useRouter} from 'next/router';
import {
    HomeFilled,
    AppstoreOutlined,
    AreaChartOutlined,
    GoldOutlined,
    SwapOutlined,
    TransactionOutlined
  } from '@ant-design/icons'
const { Sider } = Layout;

const SideBar = () => {
    const [page, setPage] = useState();
    const router = useRouter()
    useEffect(() => {
        router && setPage(router.pathname)
    }, [router])

    const sideMenu = [
        {
          page: 'dashboard',
          icon: <HomeFilled /> ,
          url: '/dashboard',
          text: 'Dashboard',
        },

        {
            page: 'swap',
            icon: <SwapOutlined />,
            url: '/swap',
            text: 'Swap',
          },
    
        {
          page: 'vote',
          icon: <AppstoreOutlined />,
          url: '/vote',
          text: 'Vote',
        },
    
        {
          page: 'XVS',
          icon: <AreaChartOutlined />,
          url: '/xvs',
          text: 'XVS',
        },
    
        {
          page: 'market',
          icon: <AreaChartOutlined />,
          url: '/market',
          text: 'Market',
        },

        {
            page: 'vault',
            icon: <GoldOutlined />,
            url: '/vault',
            text: 'Vault',
          },
       
        {
          page: 'transaction',
          icon: <TransactionOutlined />,
          url: '/transaction',
          text: 'Transaction History',
        },
    ];

    return (
        <div className={styles.sidebar}>
            <Sider trigger={null}  collapsed={false}>
                <div className={styles.logo}>
                    <Link href='/dashboard'>
                        <a>
                            <Image  width={107} height={24} src='https://venus.io/images/logo.svg' alt='logo'/>
                        </a>
                    </Link>
                </div>
                <Menu defaultSelectedKeys={page}>
                    {sideMenu.map(menu => (
                        <Menu.Item 
                        title={menu.text}
                        key={menu.url}
                        icon={menu.icon}
                        className={`${page === menu.url ? styles.activeMenu : ''} ${styles.menuItem}`}
                        >
                        <Link href={menu.url} >
                            <a>
                              {menu.text}
                            </a>
                        </Link>
                        </Menu.Item>
                    ))}
                </Menu>
                {/* <div className={styles.total}>
                    <div className={styles.totalValue}>
                        <span>$4,2345,345,339.6</span>
                        <div>total value locked</div>
                    </div>
                    <div className={styles.totalValue}>
                        <span>5,345,339.6</span>
                        <div>total VAI minted</div>
                    </div> 
                    <div className={styles.connect}>
                        <span>
                             0x6cD7...8444D
                        </span>
                       
                    </div>
                </div> */}
            </Sider>
        </div>
    );
}

export default SideBar;
