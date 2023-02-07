import React, { useState } from 'react'
 import InterFace from './InterFace'
 import LogIn from './LogIn'
 import HomePage from './HomePage'
import { Routes as Routess, Route } from 'react-router-dom'
import SignIn from './signIn';
import { items } from '../DataSaudiD'


function Routes() {
  const filtterbySearch =(word: string) => {
    if(word !== ""){

    const newArr=items.filter((item)=> item.title=== word)
    setItemData(newArr)
  }
  }
  const [itemsData , setItemData] = useState(items)


  return (
    <div>
<Routess>
<Route path="/" element={<InterFace/>}></Route>
<Route path="/logIn" element={<LogIn/>}></Route>
<Route path="/signIn" element={<SignIn/>}></Route>
<Route path="/saudiday" element={<HomePage filtterbySearch={filtterbySearch} itemsData={itemsData}/>}>
  
</Route>

</Routess>

    </div>
  )
}

export default Routes


