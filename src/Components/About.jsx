import React from "react";

function About() {
  return (
    <div className="text-center">
      <h1 className=" text-3xl font-bold mt-2">About Us</h1>
      <p>This site for those who admire the beauty and harmony of nature</p>
      <div className="flex flex-col gap-10 p-6 md:grid md:grid-cols-3 ">
      <div className=" border border-black text-center p-2 ">
        <svg class="text-center w-12 h-12 inline "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <h1 className="text-2xl font-bold">Large Assortment</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia dolorem sequi error porro illo hic consectetur praesentium
          voluptatem amet!
        </p>
      </div>
      <div className="border border-black text-center p-2 ">
        <svg class="text-center w-12 h-12 inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
          />
        </svg>
        <h1 className="text-2xl font-bold">Large Assortment</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia dolorem sequi error porro illo hic consectetur praesentium
          voluptatem amet!
        </p>
      </div>
      <div className= "border border-black text-center p-2 ">
         <svg class="text-center w-12 h-12 inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
          />
        </svg>

        <h1 className="text-2xl font-bold">Large Assortment</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia dolorem sequi error porro illo hic consectetur praesentium
          voluptatem amet!
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
