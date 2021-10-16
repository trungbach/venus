import React, {useState, useEffect} from 'react';
import { Tooltip } from 'antd';
import styles from './style.module.scss';
import Image from 'next/image'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import metamask from '@/public/metamask.png'
import Web3 from 'web3'
import { ToastContainer, toast } from 'react-toastify';
import {verifySignature} from '@/pages/api/login'
import {getInfoUser, getProfileById} from '@/pages/api/user'
import avatarUser from '@/public/avatarUser.png'
import {useAccountChange} from '@/lib/useAccountChange'
import ANTToken from '@/artifacts/contracts/ANTToken.sol/ANTToken.json'
import config from '@/config/index'
import CloseIcon from '@material-ui/icons/Close';
import {useSelector, useDispatch} from 'react-redux';
import { toggleWallet, logout, login } from '@/store/actions';

const Wallet = () => {
    // const dispatch = useDispatch();
    // const [widthScreen, setWidthScreen] = useState()
    // const [currentPublicAddress, setCurrentPublicAddress] = useState()
    // const [username, setUsername] = useState()
    // const [avatarUrl, setAvatarUrl] = useState()
    // const [balanceANT, setBalanceANT] = useState()
    // const account = useAccountChange()
    // const {isLoggedIn, isOpenWallet, user} = useSelector(state => state);

    // useEffect(() => {
    //     setWidthScreen(window.screen.width)
    // },[])

    // useEffect(() => {
    //     if(user !== null) {
    //         setUsername(user.username)
    //         setAvatarUrl(user.avatar_url)
    //         setCurrentPublicAddress(user.public_address)

    //         const getBalance = async() => {
    //             if (window.ethereum) {
    //                 window.web3 = new Web3(window.ethereum)
    //                 await window.ethereum
    //                 .request({ method: 'eth_requestAccounts' })
    //                 .catch((error) => {
    //                     console.error(error);
    //                 });
    //                 const tokenInst = new web3.eth.Contract(ANTToken.abi, config.antaddress);

    //                 const balance = await tokenInst.methods.balanceOf(user.public_address).call()
    //                 setBalanceANT(balance * (10**-18)) 
    //             }
    //         }
    //         getBalance()
    //     }
    // }, [user])

    // useEffect(() => {
    //     if(account.address !== currentPublicAddress) {
    //         dispatch(logout())
    //     }
    // },[account.address])

    // const checkMetamask = async() => {
    //     const isMetaInstalled = typeof window.ethereum  !== 'undefined'
    //     if(isMetaInstalled) {
    //       await handleLogin()
    //     } else window.open("https://metamask.io/download.html", "_blank")
    // }

    // const  handleLogin = async() => {
    //     if (window.ethereum) {
    //       window.web3 = new Web3(window.ethereum)
    //       await window.ethereum
    //             .request({ method: 'eth_requestAccounts' })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }
    //     else if (window.web3) {
    //       window.web3 = new Web3(window.web3.currentProvider)
    //     }

    //     const publicAddress = await web3.eth.getCoinbase()
    //     const infoByAddress = await getInfoUser({public_address: publicAddress})
    //     const infoById = await getProfileById({id: infoByAddress.id})
    //     const {nonce} = infoByAddress
        
    //     // handleSignMessage
    //     web3.eth.personal.sign(
    //         web3.utils.fromUtf8(`I am signing my one-time nonce: ${nonce}`),
    //         publicAddress,
    //         async (err, signature) => {
    //             const resSignature = await verifySignature({public_address: publicAddress, signature});
    //             toast.dark('Login Success!', { position: "bottom-right", autoClose: 2000})
    //             dispatch(login({token: resSignature.body.data, user: infoById}))
    //             dispatch(toggleWallet())
    //           }
    //       )
    //   }

    return (
        <div>   d</div>
        // <div className={styles.wallet}>
        //    {isOpenWallet && <div className={styles.overlay} onClick={()=>dispatch(toggleWallet())}></div>}

        //    {!isLoggedIn ?
        //     (<div className={styles.sideFilter} style={{right: isOpenWallet ? '0' : (widthScreen > 768 ? '-380px' : '-100%')}}>
        //         <div className={styles.sideCollapse}>
        //             <div className={styles.filterTitle}>
        //                 <div>
        //                     <AccountCircleIcon /> My wallet
        //                 </div>
        //                 <div onClick={() => dispatch(toggleWallet())}>
        //                     <CloseIcon />
        //                 </div>
        //             </div>
                    
        //             <div className={styles.content}>
        //                 <p>Connect with one of our available 
        //                     <Tooltip placement="bottomRight" 
        //                             title={<div>A crypto wallet is an application or hardware device that 
        //                                         allows individuals to store and retrieve digital assets. 
        //                                         <a href="https://openseahelp.zendesk.com/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea" 
        //                                             rel="nofollow noreferrer noopener" target="_blank">Learn more</a>
        //                                     </div>}>
        //                             <span className={styles.tooltip}>&nbsp; wallet <InfoOutlinedIcon />&nbsp;</span>
        //                     </Tooltip>
        //                     providers or create a new one.
        //                 </p>
        //                 <ul className={styles.listWallet}>
        //                     <li onClick={checkMetamask}>
        //                         <Image width={24} height={24} src={metamask} alt='meta-mask' /> <span>MetaMask</span>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>)  : 
            
        //     (<div className={styles.sideFilter} style={{right: isOpenWallet ? '0' : (widthScreen > 768 ? '-380px' : '-100%')}}>
        //         <div className={styles.sideCollapse}>
        //             <div className={styles.infoWallet}>
        //                 <div>
        //                     <Image src={avatarUrl || avatarUser} alt='avatar' width={30} height={30} /> welcome {username}!
        //                 </div>
        //                 <div onClick={ () => dispatch(toggleWallet()) }>
        //                     <CloseIcon />
        //                 </div>
        //             </div>
        //             <div className={styles.publicAddress} title={currentPublicAddress}>Address: {currentPublicAddress}</div>
        //             <div className={styles.publicAddress} >Balance: {balanceANT} ANT</div>
        //         </div>
        //     </div>)
        //     }

        //     <ToastContainer
        //         position="bottom-right"
        //         autoClose={2000}
        //     />
        // </div>
    );
}

export default Wallet
