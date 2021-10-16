import React, { useState, useEffect } from 'react';
import HeaderSwap from '@/components/HeaderSwap';
import SideBar from '@/components/SideBar';
import styles from './style.module.scss';
import Image from 'next/image'
import setting from '@/public/setting.png';
import ethSwap from '@/public/ethSwap.png';
import arrowDown from '@/public/arrowDown.png';
import { ArrowLeftOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Modal } from 'antd';
import ModalToken from '@/components/Swap/ModalToken';
import SelectPair from '@/components/AddLiquid/SelectPair';
import PriceRange from '@/components/AddLiquid/PriceRange';
import DepositAmount from '@/components/AddLiquid/DepositAmount';
import StartingPrice from '@/components/AddLiquid/StartingPrice';

const Index = () => {

    const router = useRouter()
    const [page, setPage] = useState(null)

    useEffect(() => {
        router && setPage(router.pathname)
    },[router])

    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={styles.app}>
            <SideBar />
            <div className={styles.add}>
                <HeaderSwap page={page} />
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <Link href="/pool">
                            <a><ArrowLeftOutlined /></a>
                        </Link>
                        <h3>Add Liquidity</h3>
                        <div className={styles.headAction}>
                            <span>Clear All</span>
                            <Image src={setting} alt='setting' width={20} height={20} />
                        </div>
                    </div>
                    <div className={styles.formAdd}>
                        <div className={styles.formInner}>
                            <SelectPair showModal={showModal} />
                            <StartingPrice />
                            <DepositAmount showModal={showModal} />
                            <PriceRange />
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
    );
}

export default Index;
