// components/layout.js

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <><div className='p-5 bg-black'>
      <Navbar />
    </div>
      <main>{children}</main>
      <Footer />
    </>
  )
}