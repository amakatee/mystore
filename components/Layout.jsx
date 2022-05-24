import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <main>
            {children}

        </main>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default Layout