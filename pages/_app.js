import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import { useStore } from '@/store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
  
}

export default MyApp
