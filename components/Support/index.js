import React from 'react'
import styles from './style.module.scss';

export default function Support() {
    return (
        <div className={styles.support}>
            <div className='d-flex align-items-center'>
                <div className={styles.statusCircle}></div>
                <a href="https://bscscan.com" target="_blank" rel="noreferrer">
                    Latest Block: 11757407
                </a>
            </div>
            <a href="https://bscscan.com/address/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63" target="_blank" rel="noreferrer">XVS</a>
            <a href="https://t.me/VenusProtocol" target="_blank" rel="noreferrer">Support</a>
            <a href="https://venus.io/Whitepaper.pdf" target="_blank" rel="noreferrer">Whitepaper</a>
        </div>
    )
}
