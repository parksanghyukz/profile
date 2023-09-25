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
      window.open("")
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
                          실측부터 시공까지 대표가 직접!
                          <span className='block mt-[10px]'>창호시공 전문기업 달해기업</span> 
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
                    {selectModal.description?.infoTitle[0]}:                 
                  </span>
                    {selectModal.description?.infoText[0]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[1]}:                
                  </span>
                    {selectModal.description?.infoText[1]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[2]}:                
                  </span>
                    {selectModal.description?.infoText[2]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[3]}:                
                  </span>
                    {selectModal.description?.infoText[3]}
                </p>
                <p className='text-justify mb-2'>
                  <span className='font-bold mr-[5px]'>
                    {selectModal.description?.infoTitle[4]}:                
                  </span>
                    {selectModal.description?.infoText[4]}
                </p>
              </div>
              
            </div>
            
        </div>


        {/* hidden 속성을 사용해서 처음에 숨겨준다 */}
        <div className='fixed top-0 left-0 bg-black w-full h-full opacity-80 z-[1000]' ref={modalBg} onClick={closeModal}></div>
      </section>
    
    
    
    </>
  )
}

