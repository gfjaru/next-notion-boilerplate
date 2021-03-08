import "../styles/globals.css"
import Footer from "../components/layout/footer"

export default function MyApp({ Component, pageProps }) {
  return( 
    <>
      <div className="container">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
