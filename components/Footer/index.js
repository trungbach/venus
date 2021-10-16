import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import telegram from '@/public/telegram.png'
import twitter from '@/public/twitter.png'
import github from '@/public/github.png'
import Link from 'next/link';

const Footer = ({id}) => {
    return (
        <footer id={id} className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerTop}>
                   <div className={styles.footerLogo}>
                        <Link href='/'>
                            <a className={styles.logo}>
                                <Image width={107} height={24} src='https://venus.io/images/logo.svg' alt='logo' />
                            </a>
                        </Link>
                    </div> 
                    <div className={styles.footerMenu}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuListItem}>
                                <a href="/#mint" className={styles.menuLink}>Mint</a>
                            </li>
                            <li className={styles.menuListItem}>
                                <a href="/#savings" className={styles.menuLink}>Savings</a>
                            </li>
                            <li className={styles.menuListItem}>
                                <a href="/#protocol" className={styles.menuLink}>Protocol</a>
                            </li>
                            <li className={styles.menuListItem}>
                                <a href="/#borrow" className={styles.menuLink}>Borrow</a>
                            </li>
                            <li className={styles.menuListItem}>
                                <a href="/#markets" className={styles.menuLink}>Markets</a>
                            </li>
                            <li className={styles.menuListItem}>
                                <a href="/#docs" className={styles.menuLink}>Docs</a>
                            </li>
                        </ul>
                        <a href="/" className={`${styles.primaryBtn} ${styles.whitePaper}`} target='_blank'>White Paper</a>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        &copy; 2021 Developed by Swipe Wallet. <br />
                        Licensed &amp; open-source under the MIT License
                    </div>
                    <div className={styles.social}>
                        <ul className={styles.socialList}>
                            <li className={styles.socialItem}>
                                <a className={styles.socialLink} 
                                   href="https://medium.com/VenusProtocol" target="_blank">
                                    <Image width="20" height='20' src={telegram} alt='telegram' />
                                </a>
                                <a href="https://medium.com/VenusProtocol" tar></a>
                            </li>
                            <li className={styles.socialItem}>
                                <a className={styles.socialLink} 
                                   href="https://medium.com/VenusProtocol" target="_blank">
                                    <Image width="20" height='20' src={twitter} alt='twitter' />
                                </a>
                                <a href="https://medium.com/VenusProtocol" tar></a>
                            </li>
                            <li className={styles.socialItem}>
                                <a className={styles.socialLink} 
                                   href="https://medium.com/VenusProtocol" target="_blank">
                                    <Image width="20" height='20' src={github} alt='github' />
                                </a>
                                <a href="https://medium.com/VenusProtocol" tar></a>
                            </li>
                            <li className={styles.socialItem}>
                                <a className={styles.socialLink} 
                                   href="https://medium.com/VenusProtocol" target="_blank">
                                    <Image width="20" height='20' src={github} alt='github' />
                                </a>
                                <a href="https://medium.com/VenusProtocol" tar></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer

