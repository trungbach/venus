import React, {useState, useEffect} from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import setting from '@/public/setting.png';
import ethSwap from '@/public/ethSwap.png';
import arrowDown from '@/public/arrowDown.png';
import ModalToken from '@/components/Swap/ModalToken';
import { Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import HeaderSwap from '@/components/HeaderSwap';
import SideBar from '@/components/SideBar';
const Index = () => {
    const router = useRouter()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [page, setPage] = useState(null)
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    useEffect(() => {
        router && setPage(router.pathname)
    },[router])

    return (
        <div className={styles.app}>
            <SideBar />
            <div className={styles.swap}>
                <HeaderSwap page={page} />
                <div className={styles.content}>
                    <div className={styles.swapContent}>
                        <div className={styles.header}>
                            <div>Swap</div>
                            <div>
                                <Image width={20} height={20} src={setting} alt='setting' />
                            </div>
                        </div>
                        <div className={styles.formSwap}>
                            <div className='d-flex justify-content-between'>
                                <div className={styles.asset}>
                                    <div className={styles.infoAsset} onClick={showModal}>
                                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                                        <div className={styles.assetName}>ETH</div>
                                        <Image src={arrowDown} width={12} height={7} alt='arrow' />
                                    </div>
                                </div>
                                
                                <div className={styles.inputValue}>
                                    <input  inputMode="decimal" autoComplete="off" autoCorrect="off" 
                                            type="text" pattern="^[0-9]*[.,]?[0-9]*$" 
                                            placeholder="0.0" minLength="1" maxLength="79" 
                                            spellCheck="false" value="" />
                                </div>
                            </div>
                            <div className={styles.balance}>Balance: 0.2092 ETH (Max)</div>
                        </div>
                        <div className={styles.formSwap}>
                            <div className='d-flex justify-content-between'>
                                <div className={styles.asset}>
                                    <div className={styles.selectToken} onClick={showModal}>
                                        Select a token
                                        <DownOutlined />
                                    </div>
                                </div>
                                
                                <div className={styles.inputValue}>
                                    <input  inputMode="decimal" autoComplete="off" autoCorrect="off" 
                                            type="text" pattern="^[0-9]*[.,]?[0-9]*$" 
                                            placeholder="0.0" minLength="1" maxLength="79" 
                                            spellCheck="false" value="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.cta}>
                            <div>
                                Enter an amount
                            </div>
                        </div>
                    </div>
                </div>
                <Modal title="Select a token" visible={isModalVisible} 
                    footer={null}
                    className={styles.modalToken}
                    onOk={handleOk} onCancel={handleCancel}>
                        
                        <ModalToken /> 
                </Modal>
            </div>
        </div>
    );
}

export default Index;
