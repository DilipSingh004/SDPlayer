import React, { useState } from 'react'
import { Leftmenu } from './leftmenu/Leftmenu'
import Rightmenu from './rightmenu/Rightmenu'

function Layout({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Leftmenu/>
      {children}
      <Rightmenu isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default Layout
