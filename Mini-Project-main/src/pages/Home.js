
 import ReactDOM from "react-dom/client"
 import React, { useEffect, useState, createContext, useContext } from 'react';
 import "../Home.css";
 import "../About.css";
 import "./Layout";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }

// export default App;

// let pfp = src="https://media.licdn.com/dms/image/v2/D5603AQEqVKzitmPHRg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691086160529?e=1731542400&v=beta&t=0GHvja7uG_f88XXyO7lGsGb6w-RbHCUZv9Eznnc1_QM"
//  alt="pfp"


const Home = () => {
  const [rotateValue, setRotateValue] = useState(0);
  const [inputValue, setInputValue] = useState("");




  const MyButton = () => {

    return (
      <button class="button" onClick={() => setRotateValue(rotateValue + 90)}>
        Click to Spin
        <div>me around</div>
        
      </button>
      
    );
  }

  useEffect(() => {
    console.log(rotateValue);
  }, [rotateValue]);

  return (
    <>

 

      <div class="navAnchor" id='AppHeader' >

        <center id='Headerfont'>Orlando Lim</center>
        <center><div><h2>Welcome to my website!</h2></div></center>
        
        
      </div>
  



 


      {/* <center><div id='ProfilePic'></div></center> */}
    <div>
    <img style={{ transform: `rotate(${rotateValue}deg)` }} id='ProfilePic' src="https://media.licdn.com/dms/image/v2/D5603AQEqVKzitmPHRg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691086160529?e=1731542400&v=beta&t=0GHvja7uG_f88XXyO7lGsGb6w-RbHCUZv9Eznnc1_QM"
    alt="pfp"></img>

         
      <div id='ButtonStyle'>
        <MyButton/>
        <div> 
          <br></br>
          <input
          type="text"
          placeholder='Type here to rotate me too'
          // value={inputValue}

          // value={rotateValue}
          // setInputValue(e.target.value == "test")
          onChange={() =>  + setRotateValue(rotateValue + 90)}
          />
          
        </div>
        <br></br>
      </div> 
    </div> 
    </>
  );
}
export default Home;

function HelloWorld(){
  console.log('Helloworld')
}

// function SpinImg(){
//   var pfp = document.getElementById('ProfilePic')

//   console.log("test");
//   pfp.style.transform = 'rotate(180deg)';
//   document.addEventListener('ProfilePic', SpinImg);
// }

// document.getElementById("ButtonStyle").addEventListener(MyButton, SpinImg);