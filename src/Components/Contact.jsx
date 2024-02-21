import React from "react";
import Nav from "./Nav";
import Fooder from "./Fooder";

function Contact() {
  return (
    <div>
      <Nav></Nav>
      <div className="grid justify-center">
        <h1 className="text-4xl mt-5 mb-3 text-center">Contact Us</h1>
        <p className="text-gray-400 mb-5 text-center">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know
        </p>
     
      <div className="p-5">
          <h1 className="">Email</h1>
        <input type="email " className="border border-gray-400 w-[95%] rounded-md mb-8 p-2" placeholder="name@flowbite.com" />
        <h1 className="">Subject</h1>
        <input type="text " className="border border-gray-400 w-[95%] rounded-md mb-8 p-2" placeholder="Let us know how we want help you"/>
        <h1 className="">Your Message</h1>
        <textarea name="" id="" cols="40" rows="5" className="border border-gray-400 w-[95%] rounded-md  mb-8 p-2" placeholder="Leave a comment..."></textarea>
<div className="grid justify-center">
<button type="submit" className="text-xl bg-green-100 text-black border border-black px-8 pb-1 rounded-md">Submit</button>
</div>
      </div>
    </div>
    <Fooder></Fooder>
    </div>

  );
}

export default Contact;
