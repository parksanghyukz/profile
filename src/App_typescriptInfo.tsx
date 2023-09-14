import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 타입의 종류 
  /*

  string : 문자
  number : 숫자
  boolean : true or false
  null
  undefined 

  */




  // 데이터별 타입설정 문법 

  /**
   * 변수    
   ex) let a:number=1;, let a:string="변수"

   * 함수 
   ex)

   let a:number=1; let b:number=2;

   console.log(test(1,2))  = 3 이다

   function test(a:number, b:number):number{
    매개변수에도 타입설정을 해주고 매개변수 괄호뒤에 :number는 {}안의 값의 타입이다

    return(a+b)

   }

   * 배열
   ex) let array:number[]=[1,2,3,4]
  
   타입을 적어주고 뒤에 []를 하면 된다 
   변수명:타입[]

   * 객체
   ex) 
   interface manInfo(사용할 타입명){
    name:string,
    age:number,
    army:boolean,
   }

   이렇게 interface를 통해 사용자 타입 정의를 해주고
   let park:maninfo={
    name:'박상혁',
    age:'25',
    army:true,
   }

   이런식으로 내가 만든 maninfo라는 타입으로 정의할 수 있다
   
   * state()

   ex)
   const [park, setpark] = useState<maninfo>()

   이런식으로 상태관리가 필요할 경우 <>안에 객체 타입설정한 것을 넣어주면 된다!


   * Props 
   
   ex)
   <Test test={info:maninfo/>
   
   이런식으로 props로 전달할경우 지정한 타입을 프롭스안에 넣어주면 된다!
   * 
   */



  // # 객체 사용자 타입 정의 

  /*

  interface 타입명 {

    속성값: 타입지정, 

    예를들어
    name: string,
    age: number,
    army: boolean,
    등등 타입을 지정해서 사용 가능하다! 

  }


  위에서 정의한 사용자 타입으로 아래처럼 넣어줄 수 있다

  let manInfo:위에서지정한 타입명={
    name:'박상혁',
    age:'25',
    army: trun
  }

  */


  // let a=1;
  // let b=1;

 
  // 사용자정의 타입
  // interface productInfo{
  //   name:string,
  //   category:string,
  //   price:number
  // }
  

  //let array:number[]=[1, 2, 3 ]

  // let product:productInfo={
  //   name:"user",
  //   category:"창문",
  //   price:30000
  // }

  //product.name="홍길동"



  // const [products, setProduct] = useState<productInfo>()

  // setProduct(product)

  // <Test test={product:productInfo}/>


  //product



 







  return (
    <div>

    </div>
  );
}

export default App;
