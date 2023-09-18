import React, {useEffect, useState} from 'react'

export default function useHeight(e:any) {

  const [Height, setHeight] = useState<any>([])


    // console.log(e.current.offsetHeight)


    useEffect(()=>{
      setHeight(e.current.offsetHeight)
    },[e])

    console.log(Height)

    // const getHeight=useCallback(()=>{
    
    // },[])

  return (
    <>
    

    

    
    
    
    </>
  )
}
