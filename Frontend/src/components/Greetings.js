/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../firebase/Auth';

function Greetings (props) {
  const { currentUser } = useContext(AuthContext);


  let greetingsList = [
    {
        id:1,
        isTitle:0,
        name: "Good Morning",
        summary:"",
        image:"",    
        module_id: 31,
        video:"good_morning.mp4"
    },  
    {
    id:2,
    isTitle:0,
    name: "Good Night",
    summary:"",
    image:"",    
    module_id: 32,
    video:"good_night.mp4"
  },  
  {
    id:3, 
    isTitle:0, 
    name: "Good Evening",
    summary:"",
    image:"",    
    module_id: 33,
    video:"good_evening.mp4"
  },
  
  {
    id:4,
    isTitle:0,
    name: "Good Afternoon",
    summary:"",
    image:"",    
    module_id: 34,
    video:"good_afternoon.mp4"
  },
  {
    id:5,
    isTitle:0,
    name: "Have a good day",
    summary:"",
    image:"",    
    module_id: 35,
    video:"have_a_good_day.mp4"
},  
  {
    id:6,
    isTitle:0,
    name: "How are you",
    summary:"",
    image:"",    
    module_id: 36,
    video:"how_are_you.mp4"
  },
  {
    id:7,
    isTitle:0,
    name: "Nice to meet you",
    summary:"",
    image:"",    
    module_id: 37,
    video:"nice_to_meet_you.mp4"
  },
  {
    id:8,
    isTitle:0,
    name: "Thank You",
    summary:"",
    image:"",    
    module_id: 38,
    video:"thank_you.mp4"
  },
  {
    id:9,
    isTitle:0,
    name: "You are welcome",
    summary:"",
    image:"",    
    module_id: 39,
    video:"you_are_welcome.mp4"
  },
  
 ]
  
  const [offset, setOffset] = useState(0);
  
  const [data, setData] = useState([]);
  const [perPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)

  const getData = async() => {
   
   
    const data = greetingsList.filter(re=>re.module_id===props.module_id);
              const slice = data.slice(offset, offset + perPage)
              console.log("offset",offset)
              console.log("offset+perpage",offset + perPage)
              console.log("slice",slice)
              const postData = slice.map(re => <div key={re.id}>
                
                  <h1>{re.name}</h1>
                  {re.isTitle===1 ?
                  <img src={`/lesson_images/${re.image}`}></img>:

                  <video className="videoLesson" width="750" height="500" controls loop >
                  <source src={`/lesson_videos/${re.video}`} type="video/mp4"/>
                  </video>}
                  <br></br>
                
                  
              </div>)
              
              if(props.module_id === 39){
                axios.post(`http://localhost:9000/${currentUser.email}/lessonThree`);
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
                      pageRangeDisplayed={1}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
      </div>
    );

  

 
  
}

export default Greetings;