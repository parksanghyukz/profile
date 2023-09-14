import React from 'react'
import Visual from '../components/Visual/Visual'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'

export default function Main() {
  return (
    <div>
      <Visual/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
