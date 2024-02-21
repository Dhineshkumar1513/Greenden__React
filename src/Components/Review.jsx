import React from "react";

function Review() {
  return (
    <div>
      <div>
        <h1 className="text-4xl mt-4 mb-4 font-bold text-center">Customer Reviews</h1>
        <div>
          <div className="m-5 p-5 bg-green-900 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem facilis sapiente aspernatur, nisi odit at ipsa repellat
              architecto incidunt, fugiat perspiciatis eum reiciendis
              consequuntur expedita numquam impedit quo labore dolorum.
            </p>
            <h1 className="font-bold text-yellow-500">Genny Madhew</h1>
          </div>
          <div className="m-5 p-5 bg-green-900 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem facilis sapiente aspernatur, nisi odit at ipsa repellat
              architecto incidunt, fugiat perspiciatis eum reiciendis
              consequuntur expedita numquam impedit quo labore dolorum.
            </p>
            <h1 className="font-bold text-yellow-500">Gim</h1>
          </div>
          <div className="m-5 p-5 bg-green-900 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem facilis sapiente aspernatur, nisi odit at ipsa repellat
              architecto incidunt, fugiat perspiciatis eum reiciendis
              consequuntur expedita numquam impedit quo labore dolorum.
            </p>
            <h1 className="font-bold text-yellow-500">Parker</h1>
          </div>
        </div>
        <div className="text-center  ">
            <h1 className="text-4xl font-bold mt-2 mb-2">Join our News Letter</h1>
            <p>Signup for our email newspaper to get exclusive discounts, updates, and more</p>
            <input type="text"  className="border border-black mt-3 w-[80%] p-2 rounded-md mb-8"/>
            <br />
            <h1 className="bg-black text-white mt-8 px-6 py-3 inline w-[20%]">Subscribe</h1>
        </div>
      </div>
    </div>
  );
}

export default Review;
