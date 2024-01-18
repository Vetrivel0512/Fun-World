import React , {useCallback, useState, useEffect} from "react";
import {stone , paper , scissor} from "../../asserts"
import ImageButton from "../CommonComponent/ImageButton";

// import {game_1_side ,paper ,stone ,scissor} from "../../asserts"

const SinglePaper = () => {
  const [manual , setManual] = useState()
  const [auto,setAuto] = useState()

  const [user ,setUser]= useState(0)
  const [com ,setCom]= useState(0)


  useEffect(()=>{
    console.log(manual, "manual")
    console.log(auto, "auto")
  },[auto, manual])
  const handleSelect = useCallback((value =0)=>(event)=>{
    let random = Math.floor(Math.random() * 3)
    setManual(value) 
    setAuto(random)
  },[])
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "20%", background: "#0a77e7", height: "90vh" }}>
      </div>
      <div style={{ width: "70%" , display:"flex" ,flexDirection :"column" , justifyContent:"space-between" ,  height: "90vh"}}>
        <div style ={{height:"30vh"}}></div>
        <div>
          <hr/>
          <div style ={{height:"30vh"}}>
              
          </div>
          <hr/>
        </div>
       
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center", background:"rgb(240 240 240)" ,height:"30vh",}}>
          <ImageButton image={stone} imageContent={"stone"} onClick={handleSelect(0)} />
          <ImageButton image={paper} imageContent={"stone"} onClick={handleSelect(0)} />
          <ImageButton image={scissor} imageContent={"stone"} onClick={handleSelect(0)} />

          {/* <button style={{margin:"30px" ,width:"200px" , height:'49px'}} onClick={handleSelect(0)}>stone </button> */}
        
        </div>
      </div>
      <div
        style={{ width: "20%", background: "#0a77e7", height: "90vh" }}
      ></div>
    </div>
  );
};

export default SinglePaper;
