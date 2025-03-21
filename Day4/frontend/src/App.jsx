import React from 'react'
import View from './components/View'
import Insert from './components/Insert'
import Delete from './components/Delete'
import Update from './components/Update'
const App = () => {
  return (
    <div>
      <Insert/>
      <View/>
      <Update/>
      <Delete/>
    </div>
  )
}

export default App
