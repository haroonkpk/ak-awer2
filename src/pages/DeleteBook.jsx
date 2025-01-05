import React from 'react'
import DeleteBookCard from '../Components/DeleteBookCard'
import Header from '../Components/header'

export default function DeleteBook() {
  return (
    <div style={{width:'100%',minHeight:'100%'}}>
      <Header/>
      <DeleteBookCard/>
    </div>
  )
}
