/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../firebase/Auth';


function Alphabets (props) {
  const { currentUser } = useContext(AuthContext);

  let alphabetList = [
    {
        id:1,
        isTitle:1,
        name: "Alphabets Lesson 1 ",
        summary:"A-F",
        image:"A-F.png",    
        module_id: 1,
        video:"a1.mp4"
    },  
    {
    id:2,
    isTitle:0,
    name: "A",
    summary:"as in the letter A",
    image:"a1.jpg",    
    module_id: 1,
    video:"a1.mp4"
  },  
  {
    id:3,  
    isTitle:0,
    name: "B",
    summary:"as in the letter B",
    image:"b1.jpg",    
    module_id: 1,
    video:"b1.mp4"
  },
  
  {
    id:4,
    isTitle:0,
    name: "C",
    summary:"as in the letter C",
    image:"c1.jpg",    
    module_id: 1,
    video:"c1.mp4"
  },
  {
    id:5,
    isTitle:0,
    name: "D",
    summary:"as in the letter D",
    image:"d1.jpg",    
    module_id: 1,
    video:"d1.mp4"
  },
  {
    id:6,
    isTitle:0,
    name: "E",
    summary:"as in the letter E",
    image:"e1.jpg",    
    module_id: 1,
    video:"e1.mp4"
  },
  {
    id:7,
    isTitle:0,
    name: "F",
    summary:"as in the letter F",
    image:"f1.jpg",    
    module_id: 1,
    video:"f1.mp4"
  },
  {
    id:8,
    isTitle:1,
    name: "Alphabets Lesson 2",
    summary:"G-L",
    image:"G-L.png",    
    module_id: 2,
    video:""
  },
  {
    id:9,
    isTitle:0,
    name: "G",
    summary:"as in the letter G",
    image:"g1.jpg",    
    module_id: 2,
    video:"g1.mp4"
  },
  {
    id:10,
    isTitle:0,
    name: "H",
    summary:"as in the letter H",
    image:"h1.jpg",    
    module_id: 2,
    video:"h1.mp4"
  },
  {
    id:11,
    isTitle:0,
    name: "I",
    summary:"as in the letter I",
    image:"i1.jpg",    
    module_id: 2,
    video:"i1.mp4"
  },
  {
    id:12,
    isTitle:0,
    name: "J",
    summary:"as in the letter J",
    image:"j1.jpg",    
    module_id: 2,
    video:"j1.mp4"
  },
  {
    id:13,
    isTitle:0,
    name: "K",
    summary:"as in the letter K",
    image:"k1.jpg",    
    module_id: 2,
    video:"k1.mp4"
  },
  {
    id:14,
    isTitle:0,
    name: "L",
    summary:"as in the letter L",
    image:"l1.jpg",    
    module_id: 2,
    video:"l1.mp4"
  },
  {
    id:15,
    isTitle:1,
    name: "Alphabets Lesson 3",
    summary:"M-R",
    image:"M-R.png",    
    module_id: 3,
    video:"l1.mp4"
  },
  {
    id:16,
    isTitle:0,
    name: "M",
    summary:"as in the letter M",
    image:"m1.jpg",    
    module_id: 3,
    video:"m1.mp4"
  },
  {
    id:17,
    isTitle:0,
    name: "N",
    summary:"as in the letter N",
    image:"n1.jpg",    
    module_id: 3,
    video:"n1.mp4"
  },
  {
    id:18,
    isTitle:0,
    name: "O",
    summary:"as in the letter O",
    image:"o1.jpg",    
    module_id: 3,
    video:"o1.mp4"
  },
  {
    id:19,
    isTitle:0,
    name: "P",
    summary:"as in the letter P",
    image:"p1.jpg",    
    module_id: 3,
    video:"p1.mp4"
  },
  {
    id:20,
    isTitle:0,
    name: "Q",
    summary:"as in the letter Q",
    image:"q1.jpg",    
    module_id: 3,
    video:"q1.mp4"
  },
  {
    id:21,
    isTitle:0,
    name: "R",
    summary:"as in the letter R",
    image:"r1.jpg",    
    module_id: 3,
    video:"r1.mp4"
  },
  {
    id:22,
    isTitle:1,
    name: "Alphabets Lesson 4",
    summary:"S-Z",
    image:"S-Z.png",    
    module_id: 4,
    video:"l1.mp4"
  },
  {
    id:23,
    isTitle:0,
    name: "S",
    summary:"as in the letter S",
    image:"s1.jpg",    
    module_id: 4,
    video:"s1.mp4"
  },
  {
    id:24,
    isTitle:0,
    name: "T",
    summary:"as in the letter T",
    image:"t1.jpg",    
    module_id: 4,
    video:"t1.mp4"
  },
  {
    id:25,
    isTitle:0,
    name: "U",
    summary:"as in the letter U",
    image:"u1.jpg",    
    module_id: 4,
    video:"u1.mp4"
  },
  {
    id:26,
    isTitle:0,
    name: "V",
    summary:"as in the letter V",
    image:"v1.jpg",    
    module_id: 4,
    video:"v1.mp4"
  },
  {
    id:27,
    isTitle:0,
    name: "W",
    summary:"as in the letter W",
    image:"w1.jpg",    
    module_id: 4,
    video:"w1.mp4"
  },
  {
    id:28,
    isTitle:0,
    name: "X",
    summary:"as in the letter X",
    image:"x1.jpg",    
    module_id: 4,
    video:"x1.mp4"
  },
  {
    id:29,
    isTitle:0,
    name: "Y",
    summary:"as in the letter Y",
    image:"y1.jpg",    
    module_id: 4,
    video:"y1.mp4"
  },
  {
    id:30,
    isTitle:0,
    name: "Z",
    summary:"as in the letter Z",
    image:"z1.jpg",    
    module_id: 4,
    video:"z1.mp4"
  }]
  
  
  const [offset, setOffset] = useState(0);
  
  const [data, setData] = useState([]);
  const [perPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)

  const getData = async() => {
   
   
    const data = alphabetList.filter(re=>re.module_id===props.module_id);
              const slice = data.slice(offset, offset + perPage)
              console.log("offset",offset)
              console.log("offset+perpage",offset + perPage)
              console.log("sliice",slice)
              const postData = slice.map(re => <div key={re.id}>
                  <h1>{re.name}({re.summary})</h1>
                  {re.isTitle===1 ?
                  <img src={`/lesson_images/${re.image}`}></img>:

                  <video className="videoLesson" width="750" height="500" controls autoPlay muted loop>
                  <source src={`/lesson_videos/${re.video}`} type="video/mp4"/>
                  </video>}
                  <br></br>
                  
              </div>)

              if(props.module_id === 4){
                axios.post(`http://localhost:9000/${currentUser.email}/lessonOne`);
              }

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

export default Alphabets;