import React, { useState } from 'react';
import '../../App.css'
import Header from '../../components/Header';
// Profile을 컴포넌트화하여 재사용성이 용이함.
import Profile from '../../components/Profile';
import { ThemeContext } from '../../ThemeContext';

const AppProfile = () => {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Header />
      <div className='container' style={{background : isDark ? '#262626' : null}}>
        <Profile image='../images/profile1.png' isNew={true} name='yeseul'/>
        <Profile image='../images/ebichu.png' name='Ebichu'/>
        <Profile image='../images/profile3.jpg' />
      </div>
    </ThemeContext.Provider>
  )
}

export default AppProfile