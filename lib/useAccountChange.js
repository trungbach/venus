import { useState, useEffect } from 'react';
import Web3 from 'web3'

export function useAccountChange() {

    const [account, setAccount] = useState({address: undefined});
  
    useEffect(() => {
      const getCurrentAddress = async() => {
          if (typeof window !== 'undefined') {
            if (typeof window.ethereum !== 'undefined') {
              window.web3 = new Web3(window.ethereum);
              await window.ethereum
                    .request({ method: 'eth_requestAccounts' })
                    .catch((error) => {
                        console.error(error);
                      }
                    );
              const publicAddress = await web3.eth.getCoinbase()
              setAccount({address: publicAddress})
            }
          }
      }

      getCurrentAddress()
            
      window && window.ethereum && window.ethereum.on('accountsChanged',  accounts => {
        setAccount({address: accounts[0]})
      })

    }, [])
    
    return account;
}