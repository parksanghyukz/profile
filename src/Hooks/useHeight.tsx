import React, {useEffect, useState} from 'react'

export default function useHeight(PortfolioSection:any){

  const [Height, setHeight] = useState<any>()

    useEffect(()=>{
      setHeight(PortfolioSection.current.offsetHeight)
    },[PortfolioSection])

    console.log(Height)

  return (
     
    [Height]
      
  )
}
