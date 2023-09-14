import React from 'react'

export default function Skills() {


  const skills=[
    {index:0, title: 'Fast', text:'빠른 로드 시간과 지연 없는 상호 작용이 최우선 사항입니다.', image:'../../images/fast_icon.png'},
    {index:1, title: 'Responsive', text:'디바이스의 크기에 맞게 유동적으로 변합니다.', image:'../../images/responsive_icon.png'},
    {index:2, title: 'Adaptive', text:'모바일 디바이스에 최적화되어 있습니다.', image:'../../images/adaptive_icon.png'},
    {index:3, title: 'Intuitive', text:'사용하기 쉽고 직관적인 UI/UX를 선호합니다.', image:'../../images/intuitive_icon.png'},
  ]



  return (
    <>
      <section className='box-border w-full h-[2350px] pt-[150px] pb-[150px]'>
      <p className=' 
        w-[110px] h-[50px] text-center m-auto font-bold font-sans text-[34px] relative left-0 top-0
        after:absolute after:left-[15px] after:bottom-[-5px] after:contents-[""] after:block after:w-20 after:h-1 after:bg-black
        '>Skills
      </p>
      <div className='w-[1000px] h-[200px] m-auto mt-[40px]'>
        <ul className='w-full h-full flex flex-row justify-between'>
          {
            skills.map((item)=>(
              <li className='w-[200px]'>
                <p className='w-[100px] h-[100px] rounded-[50%] bg-[#73FF98] leading-[100px] p-[25px] box-border m-auto'>
                  <img src={item.image} alt='아이콘이미지' className='w-full h-full'/>
                </p>
                <p className='text-[20px] text-center font-[NotoSansKR] font-medium mt-[20px] mb-[10px]'>{item.title}</p>
                <p className='text-[14px] text-center font-[NotoSansKR] font-medium'>{item.text}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='w-[616px] h-[616px] p-[42px] rounded-[50%]  m-auto mt-[100px] mb-[100px] border-solid border-[1px] border-[#CBCBCB] box-border relative top-0 left-0'>
        <div className='w-[150px] h-[150px] rounded-[50%] bg-[#6C8493] text-center text-white font-[NotoSansKR] font-bold leading-[150px] absolute left-[-60px] top-[110px] text-[16px] z-10'>HTML& CSS</div>
        <div className='w-[150px] h-[150px] rounded-[50%] bg-[#6C8493] text-center text-white font-[NotoSansKR] font-bold leading-[150px] absolute left-0 bottom-[20px] text-[16px] z-10'>Javascript</div>
        <div className='w-[150px] h-[150px] rounded-[50%] bg-[#6C8493] text-center text-white font-[NotoSansKR] font-bold leading-[150px] absolute right-0 bottom-0 text-[16px] z-10'>React.js</div>
        <div className='w-[150px] h-[150px] rounded-[50%] bg-[#6C8493] text-center text-white font-[NotoSansKR] font-bold leading-[150px] absolute right-0 top-[10px] text-[16px] z-10'>Git</div>
            <div className='w-full h-full rounded-[50%] bg-[#E8E8E8] pt-[200px] pb-[200px] relative top-0 left-0'>
            <div className='w-[90px] h-[90px] rounded-[50%] bg-[#6B9DBC] text-center text-white font-[NotoSansKR] font-bold leading-[90px] absolute left-[180px] top-[30px] text-[14px]'>Api</div>
          <div className='w-[90px] h-[90px] rounded-[50%] bg-[#6B9DBC] text-center text-white font-[NotoSansKR] font-bold leading-[90px] absolute right-[180px] bottom-[30px] text-[14px]'>TailWindcss</div>
            <p className='font-bold text-[20px] text-center font-[NotoSansKR]'>Objective</p>
            <p className='text-center font-medium text-[14px] font-[Inter] text-[#626262] mt-[20px]'>
              코드의 구조와 유지보수성을 중요시하는 개발자로, 재사용 가능한 <br/>
              컴포넌트와 모듈을 개발하여 프로젝트를 효율적으로 관리하는 것을 <br/>
              지향하고 있습니다.
            </p>
          </div>
      </div>
          

          <div className='w-full h-[1000px] p-[100px] box-border bg-[url("/public/images/skill_text_Bg.png")]'>
            {/* 백그라운드 이미지 넣을경우 절대경로로 설정해주기! */}
            <div className='w-[740px] h-full m-auto'>
              <ul className='w-full h-full flex flex-col justify-between'>
                <li>
                  <p className='text-[20px] font-bold font-[NotoSansKR] text-white mb-[30px]'>HTML&CSS</p>
                    <p className='w-full h-auto mb-[50px]'>
                      <ul className='w-full h-full text-[16px] font-medium font-[NotoSansKR] text-white'>
                        <li>한국형 웹 접근성 지침 (KWCAG) 을 준수한 Semantic-Markup</li>
                        <li>CSS의 가상요소인 before, after를 사용해 마크업없이 시각적인 요소를 표현</li>
                        <li>CSS Flex 및 grid 레이아웃 기반의 반응형 웹사이트 하드코딩 개발경험</li>
                        <li>px,em,rem,vh,vw등 css 단위와 css animation에 대해 이해하고 사용한 경험</li>
                        <li>데스크탑 웹사이트와 모바일 웹 어플리케이션을 분리해  적응형으로 개발경험</li>
                      </ul>
                    </p>
                </li>
                <li>
                  <p className='text-[20px] font-bold font-[NotoSansKR] text-white mb-[30px]'>Javascript</p>
                    <p className='w-full h-auto mb-[50px]'>
                      <ul className='w-full h-full text-[16px] font-medium font-[NotoSansKR] text-white'>
                        <li>JavaScript es6 버전을 활용한 인터렉션 UI 개발 경험</li>
                        <li>배열과 객체 문법에 대해서 이해하고 메서드를 사용한 경험</li>
                        <li>인터렉션 2Depth 네비게이션 및 메인 비쥬얼 슬라이드 하드코딩 개발경험</li>
                        <li>Gsap, Swiper 라이브러리를 사용한 인터렉션 UI개발 경험</li>
                      </ul>
                    </p>
                </li>
                <li>
                  <p className='text-[20px] font-bold font-[NotoSansKR] text-white mb-[30px]'>React.js</p>
                    <p className='w-full h-auto mb-[50px]'>
                      <ul className='w-full h-full text-[16px] font-medium font-[NotoSansKR] text-white'>
                        <li>css 모듈화 및 tailwind css 개발 경험</li>
                        <li>Router를 이용한 SPA 개발 경험이 있고 조건에 따라 컴포넌트 분기 처리 가능</li>
                        <li>React-device-detact API 를 사용하여 모바일 전용 router 분리 , 적응형 모바일웹 구현 </li>
                        <li>react-Hooks 사용 경험, axios를 이용하여 API 데이터를 받아와, 컴포넌트에 데이터를 바인딩한 경험</li>
                        <li>Firebase에서 제공하는 Authentication 와 AuthContext 기능을 활용해 로그인/로그아웃 기능 개발 경험</li>
                        <li>Gsap, Swiper 라이브러리를 사용한 인터렉션 UI개발 경험, netlify를 사용한 실제 배포 경험</li>
                      </ul>
                    </p>
                </li>
                <li>
                  <p className='text-[20px] font-bold font-[NotoSansKR] text-white mb-[30px]'>Git</p>
                    <p className='w-full h-auto mb-[50px]'>
                      <ul className='w-full h-full text-[16px] font-medium font-[NotoSansKR] text-white'>
                        <li>git 을 사용해 분산 버전 관리 경험, git을 사용해 팀프로젝트(네이밍) 개발 경험</li>
                      </ul>
                    </p>
                </li>
              </ul>
             
            </div>
            

          </div>


     
      </section>
    
    
    
    
    </>
  )
}
