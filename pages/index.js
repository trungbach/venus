import Banner from '@/components/HomeFeature/Banner';
import Pluses from '@/components/HomeFeature/Pluses';
import Footer from '@/components/Footer';
import styles from './style.module.scss'
import Mint from '@/components/HomeFeature/Mint';
import InfoBlocks from '@/components/HomeFeature/InfoBlocks';
import Protocol from '@/components/HomeFeature/Protocol';
import InfoBorrow from '@/components/HomeFeature/InfoBorrow';
import Markets from '@/components/HomeFeature/Markets';
import Header from '@/components/Header';
export default function Home() {
  return (
    <>
      <div className={styles.contentHome}>
        <Header/>
        <Banner id='banner' />
        <Pluses />
        <Mint />
        <InfoBlocks />
        <Protocol />
        <InfoBorrow />
        <Markets />
        <Footer id='community' />
      </div>
    </>
  )
}

