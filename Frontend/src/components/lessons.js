/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Alphabets from './Alphabets';
import Greetings from './Greetings';
import Words from './Words';









function lessons() {
    let path=window.location.pathname;
    let temp= path.split("/");
    let lesson_id=temp[2];
    
    

  

 if(lesson_id==="1")
 {
  const [moduleId, setModuleId]= useState(parseInt(1))
  return (
    <div>  
    <div class="sidebar">
    <a class="actives" onClick={() =>{ setModuleId(1)}} >Lesson1 (A-F)</a>
   
    <a  onClick={() => setModuleId(2)}>Lesson 2 (G-L)</a>
  
    <a  onClick={() => setModuleId(3)}>Lesson 3 (M-R)</a>
   
    <a  onClick={() => setModuleId(4)}>Lesson 4 (S-Z)</a>
   
  </div>
  
  <div class="content">
  <Alphabets module_id={moduleId}/>
  </div>
  </div>
  
  );
 }
 else if(lesson_id==="2"){
  const [moduleId, setModuleId]= useState(parseInt(5))
  
    return (
      <div>  
      <div class="sidebar">
      <a class="actives" onClick={() =>{ setModuleId(5)}} >Lesson 1(Words for A)</a>     
      <a onClick={() =>{ setModuleId(6)}} >Lesson 2(Words for B)</a>    
      <a onClick={() =>{ setModuleId(7)}} >Lesson 3(Words for C)</a>     
      <a onClick={() =>{ setModuleId(8)}} >Lesson 4(Words for D)</a>
      <a  onClick={() =>{ setModuleId(9)}} >Lesson 5(Words for E)</a>
      <a  onClick={() =>{ setModuleId(10)}} >Lesson 6(Words for F)</a>
      <a  onClick={() =>{ setModuleId(11)}} >Lesson 7Words for G)</a>
      <a  onClick={() =>{ setModuleId(12)}} >Lesson 8(Words for H)</a>
      <a  onClick={() =>{ setModuleId(13)}} >Lesson 9(Words for I)</a>
      <a  onClick={() =>{ setModuleId(14)}} >Lesson 10(Words for J)</a>
      <a  onClick={() =>{ setModuleId(15)}} >Lesson 11(Words for K)</a>
      <a  onClick={() =>{ setModuleId(16)}} >Lesson 12(Words for L)</a>      
      <a  onClick={() =>{ setModuleId(17)}} >Lesson 13(Words for M)</a>
      <a onClick={() =>{ setModuleId(18)}} >Lesson 14(Words for N)</a>
      <a  onClick={() =>{ setModuleId(19)}} >Lesson 15(Words for O)</a>
      <a  onClick={() =>{ setModuleId(20)}} >Lesson 16(Words for P)</a>
      <a  onClick={() =>{ setModuleId(21)}}>Lesson 17(Words for Q)</a>    
      <a  onClick={() =>{ setModuleId(22)}} >Lesson 18(Words for R)</a>
      <a  onClick={() =>{ setModuleId(23)}} >Lesson 19(Words for S)</a>
      <a  onClick={() =>{ setModuleId(24)}} >Lesson 20(Words for T)</a>
      <a  onClick={() =>{ setModuleId(25)}} >Lesson 21(Words for U)</a>
      <a  onClick={() =>{ setModuleId(26)}} >Lesson 22(Words for V)</a>
      <a  onClick={() =>{ setModuleId(27)}} >Lesson 23(Words for W)</a>
      <a  onClick={() =>{ setModuleId(28)}} >Lesson 24(Words for X)</a>
      <a  onClick={() =>{ setModuleId(29)}} >Lesson 25(Words for Y)</a>
      <a  onClick={() =>{ setModuleId(30)}} >Lesson 26(Words for Z)</a>

     
    </div>
    
    <div class="content">
    <Words module_id={moduleId}/>
    </div>
    </div>
    
   );
   
 }
 else{
  const [moduleId, setModuleId]= useState(parseInt(31))
  return(
    <div>  
      <div class="sidebar">
      <a class="actives" onClick={() =>{ setModuleId(31)}} >Good Morning</a>     
      <a onClick={() =>{ setModuleId(32)}} >Good Night</a>    
      <a onClick={() =>{ setModuleId(33)}} >Good Evening</a>     
      <a onClick={() =>{ setModuleId(34)}} >Good Afternoon</a>
      <a  onClick={() =>{ setModuleId(35)}} >Have a good day</a>
      <a  onClick={() =>{ setModuleId(36)}} >How are you</a>
      <a  onClick={() =>{ setModuleId(37)}} >Nice to meet you</a>
      <a  onClick={() =>{ setModuleId(38)}} >Thank You</a>
      <a  onClick={() =>{ setModuleId(39)}} >You are welcome</a>
      

     
    </div>
    
    <div class="content">
    <Greetings module_id={moduleId}/>
    </div>
    </div>
    
  );
  
}
  
};
export default lessons;