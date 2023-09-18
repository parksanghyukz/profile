
export interface portfolio{
  // export 할경우 여러개를 가져올수 있음 하지만 export default를 사용하는경우 객체 하나만 가져올수 있음
  // 여러개 export할 경우 사용할 컴포넌트에서 {}안에 ,를 사용해 여러개 가져올 수 있음
  "id":string,
  "title":string,
  "device":string,
  "date":string,
  "tool":string,
  "image":string,
  "category":string,
  "code":string,
  "design":string,
  "editer":string,
  "lang":string
}



// <portfolio> 라는 사용자 지정 타입을 portfolios라는 배열로 확장시키겠다!
export interface portfolios extends Array<portfolio>{}




// <portfolio>라는 사용자 지정 타입에서 image속성을 제거한 타입인 test라는 타입을 만들겠다!(Omit 사용)
export interface test extends Omit <portfolio, "image">{}


// <portfolio>라는 사용자 지정 타입에서 "date" 속성만 선택하는 tests라는 타입을 만들겠다! (Pick 사용)
// export interface test2 extends Pick <portfolio, "date">






