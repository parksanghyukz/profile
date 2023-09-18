import React, { useRef } from 'react'




export default function Header() {




  // 일단 scrollTo 로 컨트롤했지만 ref를 props로 넘겨 헤더에서 받고 받은 ref로 이동하는 방법
  // 질문하기

  const goTop=()=>{
    window.scrollTo(0,0)
  }

  const goAbout=()=>{
    window.scrollTo(0,700)
  }
  const goSkills=()=>{
    window.scrollTo(0,1500)
  }
  const goProjects=()=>{
    window.scrollTo(0,3756)
  }
  const goContact=()=>{
    window.scrollTo(0,5006)
  }



  return (
    <div>
      <header className="w-full h-[70px] bg-white fixed z-50 left-0 top-0">
        <h1 className="w-35.5 h-12.5 absolute top-[10px] left-[360px] cursor-pointer" onClick={goTop}>
          <img src='../../images/logo.png' alt='로고이미지' className='w-full h-auto'/>
        </h1>


        <nav className='w-[284px] h-5 absolute top-[25px] right-[360px]'>
          <ul className='w-full h-full flex flex-row flex-wrap justify-between'>
            <li onClick={goAbout} className='cursor-pointer'>About</li>
            <li onClick={goSkills} className='cursor-pointer'>Skills</li>
            <li onClick={goProjects} className='cursor-pointer'>Projects</li>
            <li onClick={goContact} className='cursor-pointer'>Contact</li>
          </ul>
        </nav>


      </header>

      
    </div>
  )
}
