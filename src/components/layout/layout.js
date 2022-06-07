import * as React from 'react'
import Nav from '../../components/nav'
import { title } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main>
        <h1 className={title}>{pageTitle}</h1>
        <Nav></Nav>
        {children}
      </main>
    </div>
  )
}

export default Layout