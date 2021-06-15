import '../styles/global/globals.scss'
import Base from '../components/Base'



function Hera({ Component, pageProps }) {
  return (
      <Base>
        <Component {...pageProps}/>
      </Base>
  )
}

export default Hera
