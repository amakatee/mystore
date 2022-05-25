import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <main>
            {children}

        </main>
        <footer>
            bottom nav 
        </footer>
    </div>
  )
}

export default Layout