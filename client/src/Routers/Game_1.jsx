import React, {  lazy } from "react";
import { Route, Routes } from "react-router";
import SuspenseLoader from "../SuspenseLoader";
// import SinglePaper from '../Components/Stone_paper_scissor/SinglePaper'

const Game_1 = () => {

    const RoutePage = SuspenseLoader(lazy(()=>import("../Components/RoutePage")))
    const SelectMenu = SuspenseLoader(lazy(()=>import("../Components/SelectMenu")))
  const SinglePlayer = SuspenseLoader(lazy(() =>
    import("../Components/Stone_paper_scissor/SinglePaper"))
  );
  return (
    
      <Routes>
        <Route element ={<RoutePage/>}>
        <Route path="/" element = {<SelectMenu/>}/>
        <Route path="game_1/single" element={<SinglePlayer />} />
        </Route>
      </Routes>
  
  );
};

export default Game_1;
