import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image'
import styles from './style.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import Wallet from '@/components/Wallet';
import {listMenu} from '@/config/constants';

const Header = ({}) => {
    
    const refHeader = useRef()
    const [activeLink, setActiveLink] = useState()
    const listNav = {
        HOME: '/',
        SHOP: '/shop',
        MARKET: '/market',
        MYANT: '/my-ant',
        FIGHT: '/fight',
        ARENA: '/arena'
    }

    const listMenuLink = listMenu.map((item, index) => {
        return (
            <a className={styles.navId}  key={index} href={item.url}>
                 {item.name}
            </a>
        )
    })

    return (  
        <>
         <Head>
            <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
        </Head>
        <nav ref={refHeader} 
             className= {activeLink == listNav.HOME 
                    ? `${styles.nav} ${styles.transparentNav} navbar navbar-expand-lg` 
                    : `${styles.nav} navbar navbar-expand-lg `}>
            <div className={`${styles.navContainer} container`}>
                <Link href='/'>
                    <a className={`navbar-brand ${styles.logo}`} >
                        <Image width={107} height={24} src='https://venus.io/images/logo.svg' alt='logo' />
                    </a>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles.navRight}`}>
                        {listMenuLink}
                        <a href="/" className={`${styles.primaryBtn} ${styles.whitePaper}`} target='_blank'>white paper</a>
                    </div>
                </div>
            </div>
            {/* <Wallet /> */}
        </nav>
        </>
    );
}

  


export default Header