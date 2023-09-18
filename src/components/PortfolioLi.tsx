// import React from 'react'
// import { portfolio } from '../model/model'
// import { useParams } from 'react-router-dom';
// import { gsap } from 'gsap';
// import Portfolio from './Portfolio/Portfolio';


// // 1.Portfolio.tsx에서 던진 props의 타입을 지정해준후 다시 propsType을 만들어준다.
// interface propsType{
//   info:portfolio; 
// }

// // 2. 위에서 만든 propsType을 info에 정의해준다!
// export default function PortfolioLi({info, onClick}) {


//   const openModal=()=>{
//     console.log(onClick)
//   }
  


//   return (
//     <>
//         {/* <li>
//           <p className='w-[270px] h-[210px] border-solid border-[6px] border-black box-border rounded-lg overflow-hidden mb-[40px]'>
//             <img src={info.image} alt='포트폴리오이미지' className='w-full h-auto '/>
//           </p>
//           <p className=' font-[NotoSansKR] text-[18px] font-bold'>{info.title}</p>
//           <p className='
//           font-[NotoSansKR] text-[12px] font-bold text-[#626262] mb-[20px] relative top-0 left-0 after:absolute after:bottom-[-10px] after:left-0 after:block after:w-[70px] after:contents-[""] after:h-[2px] after:bg-[#1B263C]
//           '>{info.date}
//           </p>
//           <p className='font-[NotoSansKR] text-[14px] font-medium text-[#050505]'>
//             {info.tool}
//           </p>
//         </li> */}

        
//         {

//               info.device==="PC" ?                
            
//                 <li key={info.id} onClick={openModal}>
//                   <p className='w-[270px] h-[210px] border-solid border-[6px] border-black box-border rounded-lg overflow-hidden mb-[40px]'>
//                     <img src={info.image} alt='포트폴리오이미지' className='w-full h-auto '/>
//                   </p>
//                   <p className=' font-[NotoSansKR] text-[18px] font-bold'>{info.title}</p>
//                   <p className='
//                   font-[NotoSansKR] text-[12px] font-bold text-[#626262] mb-[20px] relative top-0 left-0 after:absolute after:bottom-[-10px] after:left-0 after:block after:w-[70px] after:contents-[""] after:h-[2px] after:bg-[#1B263C]
//                   '>{info.date}
//                   </p>
//                   <p className='font-[NotoSansKR] text-[14px] font-medium text-[#050505]'>
//                     {info.tool}
//                   </p>
//                 </li>

//                 :

               
//                 <li key={info.id} onClick={openModal}>
//                 {/* img를 감싸고있는 p태그에 group속성을 넣어주고 코드이미지를 기존에 invisible처리해주고 group에 hover하면 보이게 처리해줬다 */}
//                 <p className='w-[140px] h-[280px]  overflow-hidden m-auto mb-[40px]  relative top-0 left-0 group'>
//                   <img src={info.image} alt='포트폴리오이미지' className='w-full h-auto absolute top-0 left-0'/>
//                   <img src={info.code} alt='코드이미지' className='w-full h-[280px] absolute invisible group-hover:visible'/>
//                 </p>
//                 <p className=' font-[NotoSansKR] text-[18px] font-bold'>{info.title}</p>
//                 <p className='
//                 font-[NotoSansKR] text-[12px] font-bold text-[#626262] mb-[20px] relative top-0 left-0 after:absolute after:bottom-[-10px] after:left-0 after:block after:w-[70px] after:contents-[""] after:h-[2px] after:bg-[#1B263C]
//                 '>{info.date}
//                 </p>
//                 <p className='font-[NotoSansKR] text-[14px] font-medium text-[#050505]'>
//                   {info.tool}
//                 </p>
//               </li>
//         }



        
//     </>
//   )
// }

export {} 
