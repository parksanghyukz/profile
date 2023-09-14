import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {  portfolios } from '../../model/model'
// import PortfolioLi from '../PortfolioLi'
import { AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';


// export default function Portfolio({onClick}) {
export default function Portfolio() {

  // 1. data안에 만든 json 파일 불러오기
  useEffect(()=>{
    axios.get('/data/portfolio.json').then((res)=>{
      setAllPortfolio(res.data)
    })
  }, [])


 

  // 2. useState를 사용해서 상태관리해주기
  const [allPortfolio, setAllPortfolio] = useState<portfolios>([]) 
  // 타입지정 1. model.ts만든 portfolio라는 타입을 useState에 넣어주기



  // 3. category의 순번과 제목 적어주기!
  const categorys = [
    {index:0, text:'ALL'},
    {index:1, text:'React-Js'},
    {index:2, text:'Javascript'},
    {index:3, text:'Mobile'},
  ]




  // 4. category 초기값 ALL로 지정해주기!

  const [selectCategory, setSelectCategory] = useState<string>(categorys[0].text)


  // 7. 콘솔에 클릭한 카테고리 찍어보기

  // console.log(selectCategory)


  // 8. 클릭한 카테고리에 맞는 아이템을 저장하기

  const [categoryItems, setCategoryItems] = useState<portfolios>([])

  //const testArray:string[]=['a', 'b']


  


  // 9. useEffect사용하기

  useEffect(()=>{
    if(selectCategory==='ALL'){
      setCategoryItems(allPortfolio)
    }
    else{
      const categoryItems=allPortfolio.filter((item)=>(item.category===selectCategory))
      setCategoryItems(categoryItems)
    }
  },[selectCategory, allPortfolio])


 

  // 모달 열고 닫기
  // const [isOpen, setIsOpen] = useState(false)



  const modal:any = useRef();

  const modalBg:any = useRef();


  useEffect(()=>{
    closeModal()
  },[])

  const closeModal=()=>{
    gsap.set(modal.current,{display:'none'})
    gsap.set(modalBg.current,{display:'none'})
  }

  const openModal=()=>{
    gsap.set(modalBg.current,{display:'block',onComplete:()=>{
      gsap.set(modal.current,{display:'block'})    
    }})
  }



  // const openModal=(test)=>{

   

  //  // console.log(productItem)
  // }, [allProducts])


  // }


  const [selectModal, setSelectModal] = useState()
  

  

  return (
    <>
    
      <section className='w-full h-[1400px] relative'>
        <p className=' 
          w-[140px] h-[50px] text-center m-auto font-bold font-sans text-[34px] relative left-0 top-0
          before:absolute before:left-[30px] before:bottom-[-10px] before:contents-[""] before:block before:w-20 before:h-1 before:bg-black
        '>Projects</p>
        <span className='block text-center mt-4 text-[12px] text-[#626262] font-medium font-[NotoSansKR]'>
          Web Application
        </span>

        <ul className='flex flex-row justify-between w-[580px] h-[40px] m-auto mt-[40px] text-[24px] font-bold font-[Inter] cursor-pointer '>
          {
            categorys.map((item)=>(      
              // 6. li를 클릭했을때 setSelectCategory를 실행한다    
                <li className={selectCategory===item.text && 'text-center w-[25%] h-auto bg-[#1B263C] text-white '} key={item.index} onClick={()=>{setSelectCategory(item.text)}}>
                  {item.text}
                </li>
            ))
          }
        </ul>


        <div className='w-[1000px] min-h-[950px] m-auto mt-[40px] relative'>
          <ul className='w-full h-full grid grid-cols-3 gap-[95px] absolute'>
            {/* <li>
              <p className='w-[270px] h-[210px] border-solid border-[6px] border-black box-border rounded-lg overflow-hidden mb-[40px]'>
                <img src='../../images/project_FJ_PC.png' alt='포트폴리오이미지' className='w-full h-auto '/>
              </p>
              <p className=' font-[NotoSansKR] text-[18px] font-bold'>Football Join(PC)</p>
              <p className='
              font-[NotoSansKR] text-[12px] font-bold text-[#626262] mb-[20px] relative top-0 left-0 after:absolute after:bottom-[-10px] after:left-0 after:block after:w-[70px] after:contents-[""] after:h-[2px] after:bg-[#1B263C]
              '>july-05-2023
              </p>
              <p className='font-[NotoSansKR] text-[14px] font-medium text-[#050505]'>
                html, cSS, Javascript, gsap, swiper, gsap
                figma, photoshop, figma user 
              </p>
            </li> */}
            {/* {
              categoryItems.map((item)=>(               
                
                <PortfolioLi info={item} onClick={item.id}/>
              ))
            } */}
        {
              categoryItems.map((item)=>(               
                
                item.device==="PC" ?                

                <li key={item.id} onClick={()=>{
                  openModal()
                  setSelectModal(item)
                }}>
                  <p className='w-[270px] h-[210px] border-solid border-[6px] border-black box-border rounded-lg overflow-hidden mb-[40px]'>
                    <img src={item.image} alt='포트폴리오이미지' className='w-full h-auto '/>
                  </p>
                  <p className=' font-[NotoSansKR] text-[18px] font-bold'>{item.title}</p>
                  <p className='
                  font-[NotoSansKR] text-[12px] font-bold text-[#626262] mb-[20px] relative top-0 left-0 after:absolute after:bottom-[-10px] after:left-0 after:block after:w-[70px] after:contents-[""] after:h-[2px] after:bg-[#1B263C]
                  '>{item.date}
                  </p>
                  <p className='font-[NotoSansKR] text-[14px] font-medium text-[#050505]'>
                    {item.tool}
                  </p>
                </li>
    
                :
    
              
                <li key={item.id} onClick={()=>{
                  openModal()
                  setSelectModal(item)
                }}>
                {/* img를 감싸고있는 p태그에 group속성을 넣어주고 코드이미지를 기존에 invisible처리해주고 group에 hover하면 보이게 처리해줬다 */}
                <p className='w-[140px] h-[280px]  overflow-hidden m-auto mb-[40px]  relative top-0 left-0 group'>
                  <img src={item.image} alt='포트폴리오이미지' className='w-full h-auto absolute top-0 left-0'/>
                  <img src={item.code} alt='코드이미지' className='w-full h-[280px] absolute invisible group-hover:visible'/>
                </p>
                <p className=' font-[NotoSansKR] text-[18px] font-bold'>{item.title}</p>
                <p className='
                font-[NotoSansKR] text-[12px] font-bold text-[#626262] mb-[20px] relative top-0 left-0 after:absolute after:bottom-[-10px] after:left-0 after:block after:w-[70px] after:contents-[""] after:h-[2px] after:bg-[#1B263C]
                '>{item.date}
                </p>
                <p className='font-[NotoSansKR] text-[14px] font-medium text-[#050505]'>
                  {item.tool}
                </p>
              </li>
              ))
            
        }

          </ul>





    
            <div className='w-[800px] h-[1100px] bg-white absolute left-[100px] top-[50px] z-20' ref={modal}>
              <div className='w-full h-[280px] bg-[#B6B6B6] relative'>
                <div className='w-full h-[250px] bg-gradient-to-b from-[#6D9AF4] to-[#283858] p-[40px] box-border relative'>
                  <div className='w-[210px] h-full'>
                    <p className='text-[32px] font-bold font-[NotoSansKR] text-white'>{selectModal.title}</p>
                    <p className='text-[14px] font-medium font-[NotoSansKR] text-white mt-[50px]'>
                      실측부터 시공까지 대표가 직접!
                      <span className='block mt-[10px]'>창호시공 전문기업 달해기업</span> 
                    </p>
                  </div>
                  <div className='absolute right-[80px] top-[40px] w-[320px] h-[250px] border-solid border-[8px] border-black box-border rounded-lg overflow-hidden'>
                    {/* <img src='../../images/project_DH_PC.png' alt='프로젝트 이미지' className='w-full h-auto'/> */}
                    <img src={selectModal.image} alt='프로젝트 이미지' className='w-full h-auto'/>
                  </div>
                  <button className='absolute right-[10px] top-[10px] text-white text-[30px]' onClick={closeModal}>
                    <AiOutlineClose/>
                  </button>
                </div>
              </div>

              <div className='w-full h-auto pl-[40px] box-border'>
                <p className='font-bold text-[16px] font-[NotoSansKR] mb-[10px] mt-[20px]'>personal project</p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262]'>
                  <span className='font-bold mr-[5px]'>Date:</span>
                  2023.08.23  
                </p>

                <p className='font-bold text-[16px] font-[NotoSansKR] mb-[10px] mt-[20px]'>사용기술</p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262] mb-[5px]'>
                  <span className='font-bold mr-[5px]'>Design-Tool:</span>
                  {selectModal.design} 
                </p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262] mb-[5px]'>
                  <span className='font-bold mr-[5px]'>Editer:</span>
                  Vscode  
                </p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262]'>
                  <span className='font-bold mr-[5px]'>Tool:</span>
                  react, swiper, gsap, firebase,kakao map api   
                </p>
              </div>


              <div className='p-[40px] box-border w-full h-auto font-medium text-[16px] font-[NotoSansKR]'>
                <p>
                  <span className='font-bold'>
                    달해기업은 인테리어 시공 전문업체 웹사이트
                  </span>
                  입니다. 
                  제 지인이 실제로 운영하는 인테리어 업체로 제 지인에게 도움이 되고 싶은 마음에 진행한 프로젝트입니다.
                </p>
                <p className='mb-[45px] mt-[45px]'>
                  자바스크립트 라이브러리 언어인 react.js의 기초문법을 이해하고 공부한 내용을 활용해보고자 구현했습니다.
                </p>
                <p className='text-justify'>
                  <span className='font-bold mr-[5px]'>
                    라우터설계 : 
                  </span>
                  createBrowserRouter 라는 react-router-dom의 훅을 사용해 시작하자마자 보여줄 요소를 설계하고 경로에 따라 보여지는 컴포넌트를 설계 했습니다.
                  react-device-detect API를 사용하여 모바일과 pc버전 router를 분리하여 적응형 
                  또한 outlet 객체를 활용하여 헤더와 푸터를 고정시켜 효율적으로 랜더링을 구현 했습니다.
                </p>
              </div>
              
            </div>
            
        </div>


        {/* hidden 속성을 사용해서 처음에 숨겨준다 */}
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-80 z-10' ref={modalBg} onClick={closeModal}></div>
      </section>
    
    
    
    </>
  )
}

