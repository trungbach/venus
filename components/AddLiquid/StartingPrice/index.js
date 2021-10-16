import React from 'react';
import styles from './style.module.scss';

const StartingPrice = () => {
    return (
        <div className={styles.startingPrice}> 
            <h3 className={styles.title}>Set Starting Price</h3>
            <div className={styles.description}>
                This pool must be initialized before you can add liquidity. 
                To initialize, select a starting price for the pool. 
                Then, enter your liquidity price range and deposit amount. 
                Gas fees will be higher than usual due to the initialization transaction.
            </div>
            <div className={styles.formItem}>
                <div className={styles.inputValue}>
                    <input  inputMode="decimal" autoComplete="off" autoCorrect="off" 
                            type="text" pattern="^[0-9]*[.,]?[0-9]*$" 
                            placeholder="0.0" minLength="1" maxLength="79" 
                            spellCheck="false" value="" />
                </div>
            </div>
            <div className={styles.btnAction}>
                Current ETH Price: 
                <span>-</span>
            </div>
        </div>
    );
}

export default StartingPrice;
