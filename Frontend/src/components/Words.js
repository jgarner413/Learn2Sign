/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect, useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../firebase/Auth';

function Words (props) {
  const { currentUser } = useContext(AuthContext);

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
  video:""
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
  video:""
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
  video:""
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
  video:""
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
  video:""
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
{
  id:25,
  isTitle:1,
  name: "Lesson 7(Words for G) ",
  summary:"G",
  image:"g1.jpg",    
  module_id: 11,
  video:""
},  
{
  id:26,
  isTitle:0,
  name: "GAP",
  summary:" an empty space or opening in the middle of something or between two things.",
  image:"g1.jpg",    
  module_id: 11,
  video:"gap.mp4"
},
{
  id:27,
  isTitle:0,
  name: "GALLON",
  summary:" a unit of liquid capacity equal to 3.79 liters.",
  image:"g1.jpg",    
  module_id: 11,
  video:"gallon.mp4"
},
{
  id:28,
  isTitle:0,
  name: "GALLERY",
  summary:"exhibition (art)",
  image:"g1.jpg",    
  module_id: 11,
  video:"gallery.mp4"
},

{
  id:29,
  isTitle:1,
  name: "Lesson 8(Words for H) ",
  summary:"H",
  image:"h1.jpg",    
  module_id: 12,
  video:""
}, 
{
id:30,
isTitle:0,
name: "HACK",
summary:" use a computer to gain unauthorized access to data in a system.",
image:"h1.jpg",    
module_id: 12,
video:"hack.mp4"
},
{
id:31,
isTitle:0,
name: "HALF",
summary:" Either of two equal or corresponding parts into which something is or can be divided; an amount equal to a half ",
image:"h1.jpg",    
module_id: 12,
video:"half.mp4"
},
{
id:32,
isTitle:0,
name: "HAIRCUT",
summary:"The style in which a person's hair is cut",
image:"h1.jpg",    
module_id: 12,
video:"haircut.mp4"
},
{
id:33,
isTitle:1,
name: "Lesson 9(Words for I) ",
summary:"I",
image:"i1.jpg",    
module_id: 13,
video:""
}, 
{
id:34,
isTitle:0,
name: "I (Me)",
summary:"me",
image:"i1.jpg",    
module_id: 13,
video:"i.mp4"
},
{
id:35,
isTitle:0,
name: "ICECREAM",
summary:" A soft frozen food made with sweetened and flavored milk fat. ",
image:"i1.jpg",    
module_id: 13,
video:"icecream.mp4"
},
{
id:36,
isTitle:0,
name: "IDENTIFY",
summary:" to establish or recognize the identity of",
image:"i1.jpg",    
module_id: 13,
video:"identify.mp4"
},
{
id:37,
isTitle:1,
name: "Lesson 10(Words for J) ",
summary:"J",
image:"j1.jpg",    
module_id: 14,
video:""
}, 
{
id:38,
isTitle:0,
name: "JAGUAR",
summary:"A large, heavily built cat that has a yellowish-brown coat with black spots, found mainly in Central and South America",
image:"j1.jpg",    
module_id: 14,
video:"jaguar.mp4"
},
{
id:39,
isTitle:0,
name: "JAIL",
summary:"prison ",
image:"j1.jpg",    
module_id: 14,
video:"jail.mp4"
},
{
id:40,
isTitle:0,
name: "JACKET",
summary:"a garment for the upper body usually having a front opening, collar, lapels, sleeves, and pockets",
image:"j1.jpg",    
module_id: 14,
video:"jacket.mp4"
},
{
id:41,
isTitle:1,
name: "Lesson 11(Words for K) ",
summary:"K",
image:"k1.jpg",    
module_id: 15,
video:""
}, 
{
id:42,
isTitle:0,
name: "KANGAROO",
summary:"A leaping, plant-eating mammal of Australia and nearby islands that has long powerful hind legs, a thick, powerful tail used as a support in standing or walking, and in the female a pouch on the abdomen in which the young are carried",
image:"k1.jpg",    
module_id: 15,
video:"kangaroo.mp4"
},
{
id:43,
isTitle:0,
name: "KARMA",
summary:"the result of a person's actions; the sum of a person's actions in this life and in a reincarnation (in Hinduism and Buddhism) ",
image:"k1.jpg",    
module_id: 15,
video:"karma.mp4"
},
{
id:44,
isTitle:0,
name: "KNIFE",
summary:"An instrument composed of a thin, sharp-edged, metal blade fixed into a handle, used for cutting.",
image:"k1.jpg",    
module_id: 15,
video:"knife.mp4"
},
{
id:45,
isTitle:1,
name: "Lesson 12(Words for L) ",
summary:"L",
image:"l1.jpg",    
module_id: 16,
video:""
}, 
{
id:46,
isTitle:0,
name: " Laboratory",
summary:"A room or building equipped for scientific experiments, research, or teaching, or for the manufacture of drugs or chemicals.",
image:"l1.jpg",    
module_id: 16,
video:"laboratory.mp4"
},
{
id:47,
isTitle:0,
name: "LADDER",
summary:" A portable structure of wood, metal, or rope, commonly consisting of bars or rungs between two upright sides, used for climbing up or down.",
image:"l1.jpg",    
module_id: 16,
video:"ladder.mp4"
},
{
id:48,
isTitle:0,
name: "LADY",
summary:"FEMALE",
image:"l1.jpg",    
module_id: 16,
video:"lady.mp4"
},
{
id:49,
isTitle:1,
name: "Lesson 13(Words for M) ",
summary:"M",
image:"m1.jpg",    
module_id: 17,
video:""
}, 
{
id:50,
isTitle:0,
name: " MACHINE",
summary:"a tool or device containing one or more parts that uses energy to perform an intended action.",
image:"m1.jpg",    
module_id: 17,
video:"machine.mp4"
},
{
id:51,
isTitle:0,
name: "MAD",
summary:"Enraged, angry",
image:"m1.jpg",    
module_id: 17,
video:"mad.mp4"
},
{
id:52,
isTitle:0,
name: "MAGNIFY",
summary:"To make (something) appear larger than it is, especially with a lens or microscope.",
image:"m1.jpg",    
module_id: 17,
video:"magnify.mp4"
},
{
id:53,
isTitle:1,
name: "Lesson 14(Words for N) ",
summary:"N",
image:"n1.jpg",    
module_id: 18,
video:""
}, 
{
id:54,
isTitle:0,
name: " NAIL",
summary:"a small, thin piece of metal with one pointed end and one flat end that you hit into something with a hammer.",
image:"n1.jpg",    
module_id: 18,
video:"nail.mp4"
},
{
id:55,
isTitle:0,
name: "NAP",
summary:"To sleep lightly or briefly, especially during the day.",
image:"n1.jpg",    
module_id: 18,
video:"nap.mp4"
},
{
id:56,
isTitle:0,
name: "NAME",
summary:"A word or set of words by which a person, animal, place, or thing is known, addressed, or referred to.",
image:"n1.jpg",    
module_id: 18,
video:"name.mp4"
},
{
id:57,
isTitle:1,
name: "Lesson 15(Words for O) ",
summary:"O",
image:"o1.jpg",    
module_id: 19,
video:""
}, 
{
id:58,
isTitle:0,
name: " OBEY",
summary:"comply with",
image:"o1.jpg",    
module_id: 19,
video:"obey.mp4"
},
{
id:59,
isTitle:0,
name: "OATH",
summary:" solemn promise; to tell the truth in a court of law.",
image:"o1.jpg",    
module_id: 19,
video:"oath.mp4"
},
{
id:60,
isTitle:0,
name: "OBESE",
summary:"Grossly fat or overweight",
image:"o1.jpg",    
module_id: 19,
video:"obese.mp4"
},
{
id:61,
isTitle:1,
name: "Lesson 16(Words for P) ",
summary:"P",
image:"p1.jpg",    
module_id: 20,
video:""
}, 
{
id:62,
isTitle:0,
name: " PAIN",
summary:"physical suffering or distress, as due to injury, illness",
image:"p1.jpg",    
module_id: 20,
video:"pain.mp4"
},
{
id:63,
isTitle:0,
name: "PAINT",
summary:"Cover the surface of (something) with paint, as decoration or protection.",
image:"p1.jpg",    
module_id: 20,
video:"paint.mp4"
},
{
id:64,
isTitle:0,
name: "PAGE",
summary:"One side of a sheet of paper in a collection of sheets bound together, especially as a book, magazine, or newspaper.",
image:"p1.jpg",    
module_id: 20,
video:"page.mp4"
},
{
id:65,
isTitle:1,
name: "Lesson 17(Words for Q) ",
summary:"Q",
image:"q1.jpg",    
module_id: 21,
video:""
}, 
{
id:66,
isTitle:0,
name: " QUANTITY",
summary:"a particular or indefinite amount of number.",
image:"q1.jpg",    
module_id: 21,
video:"quantity.mp4"
},
{
id:67,
isTitle:0,
name: "QUARTER",
summary:"One of four equal parts into which something is divisible; a fourth part.",
image:"q1.jpg",    
module_id: 21,
video:"quarter.mp4"
},
{
id:68,
isTitle:0,
name: "QUALITY",
summary:"quality as in degree of excellence.",
image:"q1.jpg",    
module_id: 21,
video:"quality.mp4"
},
{
id:69,
isTitle:1,
name: "Lesson 18(Words for R) ",
summary:"R",
image:"r1.jpg",    
module_id: 22,
video:""
}, 
{
id:70,
isTitle:0,
name: " RACISM",
summary:"Discrimination or prejudice based on race.",
image:"r1.jpg",    
module_id: 22,
video:"racism.mp4"
},
{
id:71,
isTitle:0,
name: "RADIO",
summary:" A piece of electronic equipment used for listening to radio broadcasts.",
image:"r1.jpg",    
module_id: 22,
video:"radio.mp4"
},
{
id:72,
isTitle:0,
name: "RAID",
summary:"a sudden attack on an enemy by troops, aircraft, or other armed forces in warfare.",
image:"r1.jpg",    
module_id: 22,
video:"Raid.mp4"
},
{
id:73,
isTitle:1,
name: "Lesson 19(Words for S) ",
summary:"S",
image:"s1.jpg",    
module_id: 23,
video:""
}, 
{
id:74,
isTitle:0,
name: " SAFARI",
summary:"a journey or expedition, for hunting, exploration, or investigation, especially in eastern Africa.",
image:"s1.jpg",    
module_id: 23,
video:"safari.mp4"
},
{
id:75,
isTitle:0,
name: "SAFE",
summary:"Free from harm or risk; protected from or not exposed to danger or risk; not likely to be harmed or lost.",
image:"s1.jpg",    
module_id: 23,
video:"safe.mp4"
},
{
id:76,
isTitle:0,
name: "SAFETY PIN",
summary:"A pin in the form of a clasp with a guard covering its point when fastened.",
image:"s1.jpg",    
module_id: 23,
video:"safetypin.mp4"
},
{
id:77,
isTitle:1,
name: "Lesson 20(Words for T) ",
summary:"T",
image:"t1.jpg",    
module_id: 24,
video:""
}, 
{
id:78,
isTitle:0,
name: " TAB",
summary:"A tag or label.",
image:"t1.jpg",    
module_id: 24,
video:"tab.mp4"
},
{
id:79,
isTitle:0,
name: "TABOO",
summary:"a rule against doing or saying something in a particular culture or religion.",
image:"t1.jpg",    
module_id: 24,
video:"taboo.mp4"
},
{
id:80,
isTitle:0,
name: "TACTIC",
summary:"An action or strategy carefully planned to achieve a specific end.",
image:"t1.jpg",    
module_id: 24,
video:"tacic.mp4"
},
{
id:81,
isTitle:1,
name: "Lesson 21(Words for U) ",
summary:"u",
image:"u1.jpg",    
module_id: 25,
video:""
}, 
{
id:82,
isTitle:0,
name: " UGLY",
summary:"NOT RETTY",
image:"u1.jpg",    
module_id: 25,
video:"ugly.mp4"
},
{
id:83,
isTitle:0,
name: "UNABLE",
summary:"Cannot",
image:"u1.jpg",    
module_id: 25,
video:"unable.mp4"
},
{
id:84,
isTitle:0,
name: "ULCER",
summary:"A lesion that is eroding away the skin or mucous membrane, such as the one lining the stomach.",
image:"u1.jpg",    
module_id: 25,
video:"ulcer.mp4"
},
{
id:85,
isTitle:1,
name: "Lesson 22(Words for V) ",
summary:"v",
image:"v1.jpg",    
module_id: 26,
video:""
}, 
{
id:86,
isTitle:0,
name: " VACCINE",
summary:" Injection of a killed microbe in order to stimulate the immune system against the microbe, thereby preventing disease.",
image:"v1.jpg",    
module_id: 26,
video:"vaccine.mp4"
},
{
id:87,
isTitle:0,
name: "VACCANT",
summary:"not occupied or in use; available",
image:"v1.jpg",    
module_id: 26,
video:"vaccant.mp4"
},
{
id:88,
isTitle:0,
name: "VALID",
summary:" based on truth or reason; able to be accepted; legally sound, effective, or binding; (of an argument or point) having a sound basis in logic or fact; reasonable.",
image:"v1.jpg",    
module_id: 26,
video:"valid.mp4"
},
{
id:89,
isTitle:1,
name: "Lesson 23(Words for W) ",
summary:"W",
image:"w1.jpg",    
module_id: 27,
video:""
}, 
{
id:90,
isTitle:0,
name: " WAIT",
summary:"To remain inactive or in a state of repose, as until something expected happen",
image:"w1.jpg",    
module_id: 27,
video:"wait.mp4"
},
{
id:91,
isTitle:0,
name: "WALK",
summary:"To move over a surface by taking steps with the feet at a pace slower than a run.",
image:"w1.jpg",    
module_id: 27,
video:"walk.mp4"
},
{
id:92,
isTitle:0,
name: "WALL",
summary:"one of the sides of a room or building.",
image:"w1.jpg",    
module_id: 27,
video:"wall.mp4"
},
{
id:93,
isTitle:1,
name: "Lesson 24(Words for X) ",
summary:"X",
image:"x1.jpg",    
module_id: 28,
video:""
}, 
{
id:94,
isTitle:0,
name: " XRAY",
summary:" a form of high-energy electromagnetic radiation",
image:"x1.jpg",    
module_id: 28,
video:"x-ray.mp4"
},
{
id:95,
isTitle:0,
name: "XEROX",
summary:"xerox; photocopy; copier",
image:"x1.jpg",    
module_id: 28,
video:"xerox.mp4"
},
{
id:96,
isTitle:0,
name: "XO",
summary:"XOXO stands for hugs (X) and kisses (O).",
image:"x1.jpg",    
module_id: 28,
video:"xo.mp4"
},
{
id:97,
isTitle:1,
name: "Lesson 25(Words for Y) ",
summary:"Y",
image:"y1.jpg",    
module_id: 29,
video:""
}, 
{
id:98,
isTitle:0,
name: " YAHOO",
summary:"An Internet portal that incorporates a search engine and a directory of World Wide Web sites organized in a hierarchy of topic categories.",
image:"y1.jpg",    
module_id: 29,
video:"yahoo.mp4"
},
{
id:99,
isTitle:0,
name: "YEAH",
summary:"YES.",
image:"y1.jpg",    
module_id: 29,
video:"yeah.mp4"
},
{
id:100,
isTitle:0,
name: "YEAR",
summary:" a period of 365 or 366 days",
image:"y1.jpg",    
module_id:29,
video:"year.mp4"
},
{
id:101,
isTitle:1,
name: "Lesson 26(Words for Z) ",
summary:"Z",
image:"z1.jpg",    
module_id: 30,
video:""
}, 
{
id:102,
isTitle:0,
name: " ZERO",
summary:"absence of quantity or number",
image:"z1.jpg",    
module_id: 30,
video:"zero.mp4"
},
{
id:103,
isTitle:0,
name: "ZEST",
summary:"a kind of zeal or enthusiasm.",
image:"z1.jpg",    
module_id: 30,
video:"zest.mp4"
},
{
id:104,
isTitle:0,
name: "ZEAL",
summary:"A great enthusiasm or eagerness",
image:"z1.jpg",    
module_id: 30,
video:"zeal.mp4"
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
                  <img src={`/lesson_images/${re.image}`} className="wordImage"></img>:

                  <video className="videoLesson" width="750" height="500" controls loop>
                  <source src={`/lesson_videos/${re.video}`} type="video/mp4"/>
                  </video>}
                  <br></br>
                
                  
              </div>)

              if(props.module_id === 30){
                axios.post(`http://localhost:9000/${currentUser.email}/lessonTwo`);
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

export default Words;