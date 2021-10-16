import React, {useState, useEffect} from 'react';
import styles from './style.module.scss';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import HeaderSwap from '@/components/HeaderSwap';
import SideBar from '@/components/SideBar';
import Link from 'next/link'

const Index = () => {
    const router = useRouter()
    const [page, setPage] = useState(null)
    
    useEffect(() => {
        router && setPage(router.pathname)
    },[router])

    return (
        <div className={styles.app}>
        <SideBar />
            <div className={styles.pool}>
                <HeaderSwap page={page} />
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h3>Pools Overview</h3>
                        <div className={styles.headAction}>
                            <div className={styles.more}>
                                More <DownOutlined />
                            </div>
                            <div className={styles.newPosition}>
                                <Link href="/add_liquidity">
                                    <a>+ New Position</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.listLinks}>
                        <a  href="https://help.uniswap.org/en/articles/5391541-providing-liquidity-on-uniswap-v3"
                            target='_blank' rel="noopener noreferrer" className={styles.about}>
                            <div>
                                <h4>Learn about providing liquidity</h4>
                                <p>Check out our v3 LP walkthrough and migration guides.</p>
                            </div>
                        </a>
                        <a  href="https://help.uniswap.org/en/articles/5391541-providing-liquidity-on-uniswap-v3"
                            target='_blank' rel="noopener noreferrer" className={styles.top}>
                            <div>
                                <h4>Top pools</h4>
                                <p>Explore popular pools on Uniswap Analytics</p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.liquidity}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                        <p>
                            Your V3 liquidity positions will appear here.
                        </p>
                    </div>
                    <div className={styles.v2Liquid}>
                        <a target="_blank" rel='noopener noreferrer' href='https://app.uniswap.org/#/pool/v2' className={styles.v2Liquidity}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            View V2 Liquidity
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
