import React from 'react'

export default function Header() {
  return (
    <div>
      <header className="w-full h-[70px] bg-white relative left-0 top-0">
        <h1 className="w-35.5 h-12.5 absolute top-[10px] left-[360px] ">
          <img src='../../images/logo.png' alt='로고이미지' className='w-full h-auto'/>
        </h1>


        <nav className='w-[284px] h-5 absolute top-[25px] right-[360px]'>
          <ul className='w-full h-full flex flex-row flex-wrap justify-between'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>


      </header>

      
    </div>
  )
}
