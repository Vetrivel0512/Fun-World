import React, { useCallback } from 'react'
// import SelectMenu from './SelectMenu'
import { Outlet } from 'react-router'

const RoutePage = () => {
    const header = useCallback(()=>{
        return (<>
         <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
               {/* <h2 style={{color:"snow"}}>Fun World</h2> */}
         </div>
        </>)
    },[])
    const footer = useCallback(()=>{
        return (<>
           
        </>)
    },[])
  return (
    <div style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between" , height :"100vh", overflow:"hidden"
    }}>
       <div style={{height : "5%",width :"100%" , 
       background:'linear-gradient(180deg, rgba(29,29,32,1) 4%, rgba(44,46,60,1) 41%, rgba(126,122,123,1) 100%)', boxShadow: "1px"
         }}>
            {header()}
       </div>
        <div style={{height:"90%"}}>
                {/* <SelectMenu /> */}
                <Outlet/>
        </div>
        <div style={{height : "5%",width :"100%" ,  background:'linear-gradient(360deg, rgba(29,29,32,1) 4%, rgba(44,46,60,1) 41%, rgba(126,122,123,1) 100%)', boxShadow: "1px"  }}>
            {footer()}
        </div>
    
    </div>
  )
}

export default RoutePage