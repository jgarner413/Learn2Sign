/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Words from './Words';









function lessons_words() {

    const [id, setId]= useState(1)

  let lessons = [{
    name: "Lesson 1",
    summary: "A-F",
    id: 1,
    image: "/src/lesson1.jpg"
  },  
  {
    name: "Lesson 2",
    id: 2,
    summary: "G-L",
    image: "/src/lesson1.jpg"
  },
  
  {
    name: "Lesson 3",
    id: 3,
    summary: "M-R",
    image: "/src/lesson1.jpg"
  },
  {
    name: "Lesson 4",
    id: 4,
    summary: "S-Z",
    image: "/src/lesson1.jpg"
  },] 

 
  return (
    <div>  
    <div class="sidebar">
    <a class="actives" onClick={() =>{ setId(1)}} id="1">Lesson1 (A-F)</a>
   
    <a  onClick={() => setId(2)}>Lesson 2 (G-L)</a>
  
    <a  onClick={() => setId(3)}>Lesson 3 (M-R)</a>
   
    <a  onClick={() => setId(4)}>Lesson 4 (S-Z)</a>
   
  </div>
  
  <div class="content">
  <Words id={id}/>
  </div>
  </div>
  
  );
};
export default lessons_words;