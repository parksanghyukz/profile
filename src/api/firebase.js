import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove, query, orderByKey, equalTo } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  /********** 개인 인증키 입력 **********/
  // apiKey: "AIzaSyBG38xd3_xDfZ4sgiw1DiOJcMh54oUaCoQ",
  // authDomain: "dalhaeproject.firebaseapp.com",
  // databaseURL: "https://dalhaeproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "dalhaeproject",
  // storageBucket: "dalhaeproject.appspot.com",
  // messagingSenderId: "1034892568430",
  // appId: "1:1034892568430:web:d7b242d69a9b10458c037f",
  // measurementId: "G-9M4FEY4X57"

  // apiKey: "AIzaSyD1dKXf9Et1XT7eAiFpQuwQOAbRuYTgqak",
  // authDomain: "dalhaeproject-8c107.firebaseapp.com",
  // projectId: "dalhaeproject-8c107",
  // storageBucket: "dalhaeproject-8c107.appspot.com",
  // messagingSenderId: "381175501003",
  // appId: "1:381175501003:web:80181e97e8dcd501f70b4e"


  databaseURL: "https://profileproject-9534a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  apiKey: "AIzaSyAFyBNJoR8G6_vB1M-WxUIYJp03m2Ju5xk",
  authDomain: "profileproject-9534a.firebaseapp.com",
  projectId: "profileproject-9534a",
  storageBucket: "profileproject-9534a.appspot.com",
  messagingSenderId: "381162513976",
  appId: "1:381162513976:web:c5f6f3a3240c2805f6a8cd"



  
  

};
console.log('firebaseConfig ', firebaseConfig)
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);



export function login() { // 로그인창 실행함수 
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() { // 로그아웃 실행함수 
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) { // 로그인 로그아웃 상태관리 함수  
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) { // 관리자여부조회 함수 
  return get(ref(database, 'admins')) 
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}


// 상품관리 실시간 데이터 베이스




export async function getProducts() { // 데이터 베이스에 등록된 상품 로드 하는 함수 
  return get(ref(database, 'products')).then((snapshot) => {
    // 여기서 'products'의 이름은 데이터베이스이름과 같아야한다!
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getStorys() { // 데이터 베이스에 등록된 상품 로드 하는 함수 
  return get(ref(database, 'mstory')).then((snapshot) => {
    // 여기서 'products'의 이름은 데이테베이스이름과 같아야한다!
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}




export async function getProductDetail(productId) { // 특정 id 와 같은 상품 찾아주는 함수 ( 상품상세페이지 )
  return get(
    query(ref(database, "products"), orderByKey("id"), equalTo(productId)) // 이 productId와 App.js의 경로뒤의 값이 일치해야한다
    //  {path:'/MaboutItem/:productId', element:<MaboutItemDetail/>}, 
  ).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())[0];
    } else {
      console.log("Product not found");
      return null;
    }
  });
}

