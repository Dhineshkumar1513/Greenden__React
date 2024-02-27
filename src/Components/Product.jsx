import React from "react";
import Nav from "./Nav";
import img1 from "./assets/images/g2.jpg";
import img2 from "./assets/images/g3.jpg";
import img3 from "./assets/images/g4.png";
import img4 from "./assets/images/g5.png";
import Fooder from "./Fooder";

function Product() {
  var search=()=>{
    var input=document.getElementById('input').value
    var plant=document.querySelector('#card')
    var Div =plant.querySelectorAll('div')
    for(let i of Div)
    {
      var h1=i.querySelector('h1').textContent
      if(h1.toLowerCase().includes(input)){
        i.style.display="block"
      }
      else{
        i.style.display="none"
      }
    }
  }
  return (
    <div>
      <Nav></Nav>
      <div className="text-center">
        <h1 className="text-4xl text-center font-bold mt-5 mb-5">Our Products</h1>
        <input type="text" 
        onKeyUp={search}
        id="input"
         className="items-center w-[80%] border border-black rounded-md mb-2 p-2" 
         placeholder="Search For a Products..."/>
        <div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 p-10" id="card">
            <div className="text-center cursor-pointer hover:-translate-y-2">
              <img src={img1} alt="" className="inline" />
              <h1>Rose Plant</h1>
              <p>₹50</p>
            </div>
            <div className="text-center cursor-pointer hover:-translate-y-2">
              <img src={img2} alt="" className="inline" />
              <h1>Jasmin Plant</h1>
              <p>₹50</p>
            </div>
            <div className="text-center  cursor-pointer hover:-translate-y-2">
              <img src={img3} alt="" className="inline" />
              <h1>Lotus Plant</h1>
              <p>₹50</p>
            </div>
            <div className="text-center cursor-pointer hover:-translate-y-2">
              <img src={img4} alt="" className="inline" />
              <h1>Lavender Plant</h1>
              <p>₹50</p>
            </div>

            <div className="text-center cursor-pointer hover:-translate-y-2">
              <img src={img1} alt="" className="inline" />
              <h1>Whiterose Plant</h1>
              <p>₹50</p>
            </div>
            <div className="text-center cursor-pointer hover:-translate-y-2">
              <img src={img2} alt="" className="inline" />
              <h1>Lilly Plant</h1>
              <p>₹50</p>
            </div>
            <div className="text-center cursor-pointer  hover:-translate-y-2">
              <img src={img3} alt="" className="inline" />
              <h1>Carnation Plant</h1>
              <p>₹50</p>
            </div>
            <div className="text-center cursor-pointer hover:-translate-y-2">
              <img src={img4} alt="" className="inline" />
              <h1>Sunflower Plant</h1>
              <p>₹50</p>
            </div>
          </div>
        </div>
      </div>
      <Fooder></Fooder>
    </div>
    
  );
}

export default Product;
