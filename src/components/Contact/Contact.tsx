import React from 'react'
import { BiSolidPhoneCall, BiLogoGmail, BiSolidEditLocation } from 'react-icons/bi';
import { SiKakaotalk,SiFacebook,SiInstagram } from 'react-icons/si';
export default function Contact() {
  

  const goFaceBook=()=>{
    window.open("https://www.facebook.com/profile.php?id=100008297777654")
  }


  const goInstagram=()=>{
    window.open("https://www.instagram.com/sanghyukkun/")
  }


  const goKakao=()=>{
    window.open("https://open.kakao.com/o/s83PTuHf")
  }




  return (
    <>
      <div className='w-full h-[550px] bg-gradient-to-r from-[#415C94] to-[#1B263C] relative p-[50px] box-border'>
        <p className=' 
          w-[140px] h-[50px] text-center m-auto font-bold font-sans text-[34px] text-white relative left-0 top-0
          before:absolute before:left-[30px] before:bottom-[-10px] before:contents-[""] before:block before:w-20 before:h-1 before:bg-white
        '>Contact
        </p>
        <span className='block text-center mt-4 text-[14px] text-white font-medium font-[NotoSansKR]'>
          아래 연락처 및 플랫폼을 통해 언제든지 연락주세요.
        </span>

        <div className='w-[240px] h-[180px] m-auto mt-[60px] ' >
          <p className='w-full text-left h-[40px] text-white font-[NotoSansKR] text-[16px] font-bold leading-[40px] mb-[20px]'>
            <BiSolidPhoneCall className='inline text-[30px] mr-10'/>
            010-8513-8918
          </p>
          <p className='text-left text-white font-[NotoSansKR] text-[16px] font-bold mb-[20px]'>
            <BiLogoGmail className='inline text-[40px] mr-10'/>pash609@naver.com</p>
          <p className='text-left text-white font-[NotoSansKR] text-[16px] font-bold'>
            <BiSolidEditLocation className='inline text-[40px] mr-10'/>
            경기도 부천시
          </p>
        </div>

        <div className='w-[240px] h-[30px] m-auto flex flex-row flex-wrap justify-between mt-[30px]'>
          <SiFacebook className='text-[30px] w-[30px] h-[30px] text-white cursor-pointer' onClick={goFaceBook}/>
          <SiInstagram className='text-[30px] text-white cursor-pointer' onClick={goInstagram}/>
          <SiKakaotalk className='w-[30px] h-[30px] text-white cursor-pointer' onClick={goKakao}/>
        </div>



      </div>
    
    
    
    
    </>
  )
}
