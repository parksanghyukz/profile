import axios from 'axios'
import React, { useEffect, useRef, useState, useContext } from 'react'
// import {  portfolios } from '../../model/model'
import { portfolios } from '../../model/model';
// import PortfolioLi from '../PortfolioLi'
import { AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';
import useProduct from '../../Hooks/useProduct';
import useHeight from '../../Hooks/useHeight';
// import { GetHeightContext, GetHeightProvider } from '../../context/GetHeightContext';





// export default function Portfolio({onClick}) {
export default function Portfolio() {

  // 1. data안에 만든 json 파일 불러오기
  // useEffect(()=>{
  //   axios.get('/data/portfolio.json').then((res)=>{
  //     setAllPortfolio(res.data)
  //   })
  // }, [])


  // 2. useState를 사용해서 상태관리해주기
  // const [allPortfolio, setAllPortfolio] = useState<portfolios>([]) 
  // 타입지정 1. model.ts만든 portfolio라는 타입을 useState에 넣어주기



  // (1,2번 통합) Hook 폴더 안에있는 useProduct.tsx에서 가져오기!
  const [allPortfolio] = useProduct();




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


  const [selectModal, setSelectModal] = useState<any>([])


  

  const goPage=()=>{
    if(selectModal.title==="Football Join"){
      window.open("http://parksang123.dothome.co.kr/footballjoin_rwd/index.html")
    }else if(selectModal.title==="Naming"){
      window.open("http://rkddbsghks.dothome.co.kr/naming_project/")
    }else if(selectModal.title==="Dalhae"){
      window.open("https://dalhaecompany.netlify.app/")
    }else if(selectModal.title==="Profile"){
      window.open("https://sanghyukprofile.netlify.app/")
    }
  }


  
  const goGitHub=()=>{
    if(selectModal.title==="Football Join"|| selectModal.title==="Football Join(Mobile)"){
      window.open("http://parksang123.dothome.co.kr/footballjoin_rwd/index.html")
    }else if(selectModal.title==="Naming"){
      window.open("https://github.com/parksanghyukz/naming_project")
    }else if(selectModal.title==="Dalhae"|| selectModal.title==="Dalhae (Mobile)"){
      window.open("https://github.com/parksanghyukz/dalhae_project")
    }else if(selectModal.title==="Profile"){
      window.open("https://github.com/parksanghyukz/profile")
    }
  }



  // 높이구한것


  const PortfolioSection:any = useRef();

  useHeight(PortfolioSection)


  


  return (
    <>
    
      <section className='w-full h-[1400px] relative' ref={PortfolioSection}>
        <p className=' 
          w-[140px] h-[50px] text-center m-auto font-bold font-sans text-[34px] relative left-0 top-0
          before:absolute before:left-[30px] before:bottom-[-10px] before:contents-[""] before:block before:w-20 before:h-1 before:bg-black
        '>Projects</p>
        <span className='block text-center mt-4 text-[12px] text-[#626262] font-medium font-[NotoSansKR]'>
          Web Application
        </span>

        <ul className='flex flex-row justify-between w-[580px] h-[40px] m-auto mt-[40px] text-[24px] font-bold font-[Inter]'>
          {/* <ul className=' w-[580px] h-[40px] m-auto mt-[40px] text-[24px] font-bold font-[Inter]'> */}
            {
              categorys.map((item)=>(      
                // 6. li를 클릭했을때 setSelectCategory를 실행한다    
                  <li className={selectCategory===item.text ? 'select_Btn' : 'cursor-pointer'} key={item.index} 
                  onClick={()=>{setSelectCategory(item.text)}}>
                  {item.text}
                  </li>
              ))
            }
        </ul>


        <div className='w-[1000px] min-h-[950px] m-auto mt-[40px] relative'>
          <ul className='w-full h-full grid grid-cols-3 gap-[95px] absolute'>

            {
              categoryItems.map((item)=>(               
                  
                  item.device==="PC" ?                

                  <li key={item.id} onClick={()=>{
                    setSelectModal(item)
                    openModal()
                  }}>
                    <p className='w-[270px] h-[210px] border-solid border-[6px] border-black box-border rounded-lg overflow-hidden mb-[40px] cursor-pointer'>
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
                    setSelectModal(item)
                    openModal()
                  }}>
                  {/* img를 감싸고있는 p태그에 group속성을 넣어주고 코드이미지를 기존에 invisible처리해주고 group에 hover하면 보이게 처리해줬다 */}
                  <p className='w-[140px] h-[280px]  overflow-hidden m-auto mb-[40px]  relative top-0 left-0 group cursor-pointer'>
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





    
            <div className='w-[800px] h-[1100px] bg-white absolute left-[100px] top-[-100px] z-[9999] overflow-scroll' ref={modal} >
              <div className='w-full h-[280px] bg-[#B6B6B6] relative'>
                <div className='w-full h-[250px] bg-gradient-to-b from-[#6D9AF4] to-[#283858] p-[40px] box-border relative'>
                      <div className='w-[210px] h-full'>
                        <p className='text-[32px] font-bold font-[NotoSansKR] text-white'>{selectModal.title}</p>
                        <p className='text-[14px] font-medium font-[NotoSansKR] text-white mt-[50px]'>
                          {selectModal.infoTitle}
                          <span className='block mt-[10px]'>{selectModal.infoText}</span> 
                        </p>
                      </div>
                  {
                    selectModal.device==='PC' ? 

                      <div className='absolute right-[80px] top-[40px] w-[320px] h-[250px] border-solid border-[8px] border-black box-border rounded-lg overflow-hidden cursor-pointer group brightness-100 hover:brightness-75'
                    
                      >
                        {/* <img src='../../images/project_DH_PC.png' alt='프로젝트 이미지' className='w-full h-auto'/> */}
                        <button className='w-[110px] h-[34px] bg-black absolute right-[105px] top-[100px] text-white text-center text-[20px] font-bold invisible group-hover:visible'  onClick={goPage}>
                          Go to site
                        </button>
                        <img src={selectModal.image} alt='프로젝트 이미지' className='w-full h-auto'/>

                      </div>
                  
                    :

                    <div className='absolute right-[120px] top-[40px] w-[160px] h-[320px] cursor-pointer'onClick={goPage}>
                      {/* <img src='../../images/project_DH_PC.png' alt='프로젝트 이미지' className='w-full h-auto'/> */}
                      <img src={selectModal.image} alt='프로젝트 이미지' className='w-full h-auto'/>
                    </div>

                  }

                    <button className='absolute right-[10px] top-[10px] text-white text-[30px]' onClick={closeModal}>
                      <AiOutlineClose/>
                    </button>
                </div>

              </div>

              <div className='w-full h-auto pl-[40px] box-border'>
                <p className='font-bold text-[16px] font-[NotoSansKR] mb-[10px] mt-[20px]'>
                  {selectModal.project}
                </p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262]'>
                  <span className='font-bold mr-[5px]'>Date:</span>
                  {selectModal.date}
                </p>

                <p className='font-bold text-[16px] font-[NotoSansKR] mb-[10px] mt-[20px]'>사용기술</p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262] mb-[5px]'>
                  <span className='font-bold mr-[5px]'>Design-Tool:</span>
                  {selectModal.design} 
                </p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262] mb-[5px]'>
                  <span className='font-bold mr-[5px]'>Editer:</span>
                  {selectModal.editer}
                </p>
                <p className='font-medium text-[12px] font-[NotoSansKR] text-[#626262]'>
                  <span className='font-bold mr-[5px]'>Lang:</span>
                  {selectModal.lang}   
                </p>
              </div>


              <div className='p-[40px] box-border w-full h-auto font-medium text-[16px] font-[NotoSansKR]'>
                <p>
                  <span className='font-bold'>
                    {selectModal.title}
                    {selectModal.description?.site}
                    {/* description이 있는지 체크하고 site를 띄워줘야한다 */}
                  </span>
                  입니다. <br/>
                    {selectModal.description?.siteInfo}
                </p>
                <p className='mb-[45px] mt-[45px]'>
                  {selectModal.description?.siteText}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[0]}                
                  </span>
                    {selectModal.description?.infoText[0]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[1]}                
                  </span>
                    {selectModal.description?.infoText[1]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[2]}                
                  </span>
                    {selectModal.description?.infoText[2]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[3]}                
                  </span>
                    {selectModal.description?.infoText[3]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[4]}                
                  </span>
                    {selectModal.description?.infoText[4]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[5]}               
                  </span>
                    {selectModal.description?.infoText[5]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[6]}               
                  </span>
                    {selectModal.description?.infoText[6]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[7]}               
                  </span>
                    {selectModal.description?.infoText[7]}
                </p>
              </div>
              
              {
                selectModal.title==="Dalhae" || selectModal.title==="Profile" 
                
                ?
                <button type="button" className="py-2 px-4 m-auto w-1/2 flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg" onClick={goGitHub}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                  Start with GitHub
                </button>
                :
                <div></div>
              }
              



            </div>
            
        </div>


        {/* hidden 속성을 사용해서 처음에 숨겨준다 */}
        <div className='fixed top-0 left-0 bg-black w-full h-full opacity-80 z-[1000]' ref={modalBg} onClick={closeModal}></div>
      </section>
    
    
    
    </>
  )
}

