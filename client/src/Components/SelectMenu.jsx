import React,{useCallback , useState} from 'react'
import {game_1 , stone_paper_scissor} from "../asserts"
import { useNavigate } from 'react-router'
import {backGround} from "../asserts"


const SelectMenu = () => {

    const navigate = useNavigate()

    const [ boxStyle, setBoxStyle ] = useState({
        width: '500px',
        height: '10vh',
        // backgroundColor: 'blue',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        transform: "none",
       
        
      })
    // let containerStyle = ;
    
      const handleMouseEnter = () => {
        // containerStyle = {...containerStyle, backgroundColor :'red'};
        // return containerStyle
        setBoxStyle((prev)=>({...prev ,transform:" scale(1.1) skew(15deg, 0deg)" }))
      };
    
      const handleMouseLeave = () => {
        // containerStyle.backgroundColor = 'blue';
        setBoxStyle((prev)=>({...prev ,transform: "none" }))

      };
    const renderSection = useCallback(()=>{
        return (
            <div           
            style={{...boxStyle , borderRadius : "10px" , border: " 5px solid silver", margin:"20px 40px", display:"flex" , alignItems:"center"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}> 
          
            <div style={{width:"30%" , height:"10vh"}}>

            <img src={game_1} style={{ width:"100%" ,  height:"10vh" }} alt='' />
            </div>
            <div style={{display:"flex" , justifyContent:"center" , width:"100%"}}>    
                    <h3 style={{color:"snow"}}>Stone paper scissor</h3>
            </div>
            </div>
        )
    },[boxStyle])
  return (
    <div style={{display :"grid" , gridTemplateColumns:" 1fr 1fr " , gridGap: "10px"  ,   height :"100vh" , backgroundImage:`url(${backGround})` , backgroundRepeat :"no-repeat" , backgroundSize:"cover" 
  }}>
        {renderSection()}
        {/* {renderSection()}
        {renderSection()}
        {renderSection()}
        {renderSection()} */}
        <div>
            <div style={{display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

            <img src={stone_paper_scissor} alt={""} style={{margin:"20px 0px"}}/>
            <button style={{width:"200px", height:"49px" , fontFamily:"cursive", fontSize:"20px" , margin:"15px 0px "}} onClick={()=>navigate("/game_1/single")}>player vs Com </button>
            <button style={{width:"200px", height:"49px" , fontFamily:"cursive", fontSize:"20px" , margin:"15px 0px "}}>player vs player </button>
            </div>
        </div>


    </div>
  )
}

export default SelectMenu