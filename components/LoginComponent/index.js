import React from 'react';
import styles from './style.module.scss'
import {Button} from 'antd';
import {toggleWallet} from '@/store/actions';
import {useDispatch} from 'react-redux';

const LoginComponent = () => {

    const dispatch = useDispatch()

    return (
        <div className={styles.login}>
            <h1>Connect wallet to continue !</h1>
            <Button className={styles.secondaryBtn} onClick={()=>dispatch(toggleWallet())}>Connect</Button> 
        </div>
    );
}

export default LoginComponent;
