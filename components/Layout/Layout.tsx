import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import * as React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx>
        {`
          main {
            width: 100%;
            background-color: salmon;
          }
        `}
      </style>
    </>
  )
}

export default Layout
