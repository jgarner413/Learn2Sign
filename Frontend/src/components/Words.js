/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

function Words (props) {


  let wordList = [
    {
        id:1,
        isTitle:1,
        name: "Lesson 1(Words for A)",
        summary:"A",
        image:"a1.jpg",    
        module_id: 5,
        video:""
    },  
    {
    id:2,
    isTitle:0,
    name: "ABANDON",
    summary:"CEASE TO SUPPORT",
    image:"a1.jpg",    
    module_id: 5,
    video:"abandon.mp4"
  },  
  {
    id:3, 
    isTitle:0, 
    name: "ABBREVIATE",
    summary:"SHORTEN",
    image:"a1.jpg",    
    module_id: 5,
    video:"abbreviate.mp4"
  },
  
  {
    id:4,
    isTitle:0,
    name: "ABLE",
    summary:"HAVING THE POWER TO DO SOMETHING",
    image:"a1.jpg",    
    module_id: 5,
    video:"able.mp4"
  },
  {
    id:5,
    isTitle:1,
    name: "Lesson 2(Words for B) ",
    summary:"B",
    image:"b1.jpg",    
    module_id: 6,
    video:"b1.mp4"
},  
  {
    id:6,
    isTitle:0,
    name: "BABY",
    summary:"A VERY YOUNG CHILD",
    image:"b1.jpg",    
    module_id: 6,
    video:"baby.mp4"
  },
  {
    id:7,
    isTitle:0,
    name: "BACK",
    summary:"THE REAR",
    image:"b1.jpg",    
    module_id: 6,
    video:"back.mp4"
  },
  {
    id:8,
    isTitle:0,
    name: "BANK",
    summary:"LAND ALONGSIDE TO A RIVER",
    image:"b1.jpg",    
    module_id: 6,
    video:"bank.mp4"
  },
  {
    id:9,
    isTitle:1,
    name: "Lesson 3(Words for C)",
    summary:"C",
    image:"c1.jpg",    
    module_id: 7,
    video:"c1.mp4"
},  
  {
    id:10,
    isTitle:0,
    name: "CABLE",
    summary:"A THICK ROPE OF WIRE",
    image:"c1.jpg",    
    module_id: 7,
    video:"cable.jpg"
  },
  {
    id:11,
    isTitle:0,
    name: "CAFE",
    summary:"A SMALL RESTAURANT",
    image:"c1.jpg",    
    module_id: 7,
    video:"cafe.mp4"
  },
  {
    id:12,
    isTitle:0,
    name: "CAR",
    summary:"FOUR WHEELED ROAD VEHICLE",
    image:"c1.jpg",    
    module_id: 7,
    video:"car.mp4"
  },
  {
    id:13,
    isTitle:1,
    name: "Lesson 4(Words for D)",
    summary:"D",
    image:"d1.jpg",    
    module_id: 8,
    video:"d1.mp4"
},  
  {
    id:14,
    isTitle:0,
    name: "DADDY",
    summary:"ONE'S FATHER",
    image:"d1.jpg",    
    module_id: 8,
    video:"daddy.jpg"
  },
  {
    id:15,
    isTitle:0,
    name: "DAILY",
    summary:"EVERY DAY ",
    image:"d1.jpg",    
    module_id: 8,
    video:"daily.mp4"
  },
  {
    id:16,
    isTitle:0,
    name: "DEAL",
    summary:"TRADE IN",
    image:"d1.jpg",    
    module_id: 8,
    video:"deal.mp4"
  },
  {
    id:17,
    isTitle:1,
    name: "Lesson 5(Words for E) ",
    summary:"E",
    image:"e1.jpg",    
    module_id: 9,
    video:"e1.mp4"
},  
  {
    id:18,
    isTitle:0,
    name: "EAGLE",
    summary:"A BIRD",
    image:"e1.jpg",    
    module_id: 9,
    video:"eagle.jpg"
  },
  {
    id:19,
    isTitle:0,
    name: "EAR",
    summary:"THE ORGAN OF HEARING",
    image:"e1.jpg",    
    module_id: 9,
    video:"ear.mp4"
  },
  {
    id:20,
    isTitle:0,
    name: "EASY",
    summary:"ACHIEVED WITHOUT GREAT EFFORT",
    image:"e1.jpg",    
    module_id: 9,
    video:"easy.mp4"
  },
  {
    id:21,
    isTitle:1,
    name: "Lesson 6(Words for F) ",
    summary:"F",
    image:"f1.jpg",    
    module_id: 10,
    video:"f1.mp4"
},  
  {
    id:22,
    isTitle:0,
    name: "FACE",
    summary:"PART OF BODY",
    image:"f1.jpg",    
    module_id: 10,
    video:"face.jpg"
  },
  {
    id:23,
    isTitle:0,
    name: "FACT",
    summary:"REALITY",
    image:"f1.jpg",    
    module_id: 10,
    video:"fact.mp4"
  },
  {
    id:24,
    isTitle:0,
    name: "FEMALE",
    summary:"WOMAN",
    image:"f1.jpg",    
    module_id: 10,
    video:"female.mp4"
  },
 ]
  
  const [offset, setOffset] = useState(0);
  
  const [data, setData] = useState([]);
  const [perPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)

  const getData = async() => {
   
   
    const data = wordList.filter(re=>re.module_id===props.module_id);
              const slice = data.slice(offset, offset + perPage)
              console.log("offset",offset)
              console.log("offset+perpage",offset + perPage)
              console.log("slice",slice)
              const postData = slice.map(re => <div key={re.id}>
                
                  <h1>{re.name}</h1>
                  {re.isTitle===1 ?
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
  }, [props.module_id, offset])

  
 

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

export default Words;