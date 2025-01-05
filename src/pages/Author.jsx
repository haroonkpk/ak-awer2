import React from 'react'
import AuthorTable from '../Components/Table'
import Header from '../Components/header'

export default function Author() {
  return (
    <div style={{width:"100%",minHeight:"100%"}}>
      <Header/>
      <AuthorTable/>
    </div>
  )
}
