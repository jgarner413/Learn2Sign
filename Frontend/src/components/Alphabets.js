/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

function Alphabets (props) {


  let alphabetList = [
    {
        id:1,
        name: "Alphabets Lesson 1 ",
        summary:"A-F",
        image:"A-F.png",    
        lesson_id: 1,
        video:"a1.mp4"
    },  
    {
    id:2,
    name: "A",
    summary:"as in the letter A",
    image:"a1.jpg",    
    lesson_id: 1,
    video:"a1.mp4"
  },  
  {
    id:3,  
    name: "B",
    summary:"as in the letter B",
    image:"b1.jpg",    
    lesson_id: 1,
    video:"b1.mp4"
  },
  
  {
    id:4,
    name: "C",
    summary:"as in the letter C",
    image:"c1.jpg",    
    lesson_id: 1,
    video:"c1.mp4"
  },
  {
    id:5,
    name: "D",
    summary:"as in the letter D",
    image:"d1.jpg",    
    lesson_id: 1,
    video:"d1.mp4"
  },
  {
    id:6,
    name: "E",
    summary:"as in the letter E",
    image:"e1.jpg",    
    lesson_id: 1,
    video:"e1.mp4"
  },
  {
    id:7,
    name: "F",
    summary:"as in the letter F",
    image:"f1.jpg",    
    lesson_id: 1,
    video:"f1.mp4"
  },
  {
    id:8,
    name: "Alphabets Lesson 2",
    summary:"G-L",
    image:"G-L.png",    
    lesson_id: 2,
    video:""
  },
  {
    id:9,
    name: "G",
    summary:"as in the letter G",
    image:"g1.jpg",    
    lesson_id: 2,
    video:"g1.mp4"
  },
  {
    id:10,
    name: "H",
    summary:"as in the letter H",
    image:"h1.jpg",    
    lesson_id: 2,
    video:"h1.mp4"
  },
  {
    id:11,
    name: "I",
    summary:"as in the letter I",
    image:"i1.jpg",    
    lesson_id: 2,
    video:"i1.mp4"
  },
  {
    id:12,
    name: "J",
    summary:"as in the letter J",
    image:"j1.jpg",    
    lesson_id: 2,
    video:"j1.mp4"
  },
  {
    id:13,
    name: "K",
    summary:"as in the letter K",
    image:"k1.jpg",    
    lesson_id: 2,
    video:"k1.mp4"
  },
  {
    id:14,
    name: "L",
    summary:"as in the letter L",
    image:"l1.jpg",    
    lesson_id: 2,
    video:"l1.mp4"
  },]
  
  const [offset, setOffset] = useState(0);
  
  const [data, setData] = useState([]);
  const [perPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)

  const getData = async() => {
   
   
    const data = alphabetList.filter(re=>re.lesson_id===props.id);
              const slice = data.slice(offset, offset + perPage)
              console.log("offset",offset)
              console.log("offset+perpage",offset + perPage)
              console.log("sliice",slice)
              const postData = slice.map(re => <div key={re.id}>
                  <h1>{re.name}({re.summary})</h1>
                  {re.id===1 || re.id===8 ?
                  <img src={`/lesson_images/${re.image}`}></img>:

                  <video className="videoLesson" width="750" height="500" controls >
                  <source src={`/lesson_videos/${re.video}`} type="video/mp4"/>
                  </video>}
                  <br></br>
                  
              </div>)
              setData(postData)
              setPageCount(Math.ceil(data.length / perPage))
}
const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage)
};


useEffect(() => {
    
    getData()
  }, [props.id, offset])

  
 

    return(
        <div>

        {data}
         <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
      </div>
    );

  

 
  
}

export default Alphabets;