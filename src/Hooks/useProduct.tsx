import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import {portfolios} from '../model/model'


export default function useProduct() {

  const [allPortfolio, setAllPortfolio] = useState<portfolios>([])

  useEffect(()=>{
    axios.get('/data/portfolio.json').then((res)=>{
      setAllPortfolio(res.data)
    })
  }, [])



  // const getHeight=useCallback((e)=>{
  //   console.log(e)
  // })


  // getHeight()




  return (
    [allPortfolio]
  )
}
