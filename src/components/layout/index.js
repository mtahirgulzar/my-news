import React from 'react'
import Header from '../header'
import Footer from '../footer'
import './layout.css'

function Layout({ children }) {
    return (
        <div className="layout-container">
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
