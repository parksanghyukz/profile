import React from 'react'

export default function About() {

  const aboutInfos = [
    {index:0, title:'이름', text:'박상혁',image:'../../images/name_icon.png'},
    {index:1, title:'생년월일', text:'1999.06.09',image:'../../images/date_icon.png'},
    {index:2, title:'주소지', text:'경기도 부천시',image:'../../images/location_icon.png'},
    {index:3, title:'연락처', text:'010-8513-8918',image:'../../images/phone_icon.png'},
    {index:4, title:'이메일', text:'pash609@naver.com',image:'../../images/mail_icon.png'},
    {index:5, title:'학력', text:'유한대학교 (IT융합비즈니스 학과)',image:'../../images/school_icon.png'},
  ]


  return (
    <>
      <section className='w-full h-[800px] bg-[#C4D1EB] p-[100px] box-border'>
        <p className=' 
        w-[110px] h-[50px] text-center m-auto font-bold font-sans text-[34px] relative left-0 top-0
        after:absolute after:left-[15px] after:bottom-[-5px] after:contents-[""] after:block after:w-20 after:h-1 after:bg-black
        '>About</p>

        <p className='m-auto w-[100px] h-[100px] mt-[20px] drop-shadow'>
          <img src='../../images/profile_img.png' alt='프로필이미지' className='w-[100%] h-auto'/>
        </p>
        <p className='w-[190px] h-auto m-auto text-center font-bold font-[Inter] text-[24px] mt-[40px] text-[#464646]'>Who's this guy?</p>
        <p className='w-auto h-auto m-auto text-center text-[14px] text-[#626262] mt-[20px] font-[Inter]'>
          안녕하세요. 저는 경기도 부천에 거주하고 있는 예비 프론트엔드 개발자 <br/>
          박상혁 입니다. <br/>
          저는 UI 효과, 애니메이션 및 직관적이고 역동적인 사용자 경험을 만드는 데 진지한 열정을 가지고 있습니다.
        </p>

        <div className='w-[1000px] h-[180px] m-auto mt-[80px]'>
          <ul className='w-full h-full grid grid-cols-3 gap-x-[100px] gap-y-[80px]'>
            {
              aboutInfos.map((item)=>(
                <li>
                <p className='float-left mr-3 w-[40px] h-[40px]'>
                  <img src={item.image} alt='아이콘이미지' className='w-full h-auto'/>
                </p>

                <p className='text-[16px] font-medium text-black font-[NotoSansKR]'>{item.title}</p>
                <p className='text-[14px] font-medium text-[#464646] font-[NotoSansKR]'>{item.text}</p>
              </li>
              ))
            }
          </ul>
        </div>
        
      </section>
    </>
  )
}
