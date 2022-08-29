import React, { useState } from "react";
import uuid from "react-uuid";
import Router from "next/router";

import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const dbInstance = collection(database, "paste");

const PasteSettings = ({ pasteDetails, setPasteDetails }) => {
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(pasteDetails);
      addDoc(dbInstance, pasteDetails);
      Router.push(`/${pasteDetails.hash}`);
   };

   const handleChange = (e) => {
      setPasteDetails((prev) => ({
         ...prev,
         hash: uuid(),
         [e.target.name]: e.target.value,
      }));
   };

   return (
      <div className="flex flex-col">
         <h2 className="border-b-[1px] border-white mb-3">
            Optional Paste Settings
         </h2>
         <form
            className="flex flex-col items-start gap-4"
            onSubmit={handleSubmit}
         >
            <label htmlFor="">
               Category:
               <select
                  className="text-white bg-[#2b2b2b]"
                  name="category"
                  id=""
                  onChange={handleChange}
               >
                  <option value="None">None</option>
                  <option value="Crypto">Cryptocurrency</option>
               </select>
            </label>
            <label htmlFor="">
               <label htmlFor="">
                  Tags:
                  <input
                     className="text-white bg-[#2b2b2b]"
                     name="tags"
                     type="text"
                     onChange={handleChange}
                  />
               </label>
            </label>
            <label htmlFor="">
               Syntax Highlighting:
               <select
                  className="text-white bg-[#2b2b2b]"
                  name="syntax"
                  id=""
                  onChange={handleChange}
               >
                  <option value="C">C</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
               </select>
            </label>
            <label htmlFor="">
               Paste Expiration:
               <select
                  className="text-white bg-[#2b2b2b]"
                  name="expiration"
                  id=""
                  onChange={handleChange}
               >
                  <option value="10">10 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="1440">1 day</option>
               </select>
            </label>
            <label htmlFor="">
               Paste Exposure:
               <select
                  className="text-white bg-[#2b2b2b]"
                  name="exposure"
                  id=""
                  onChange={handleChange}
               >
                  <option value="Public">Public</option>
                  <option value="Unlisted">Unlisted</option>
               </select>
            </label>
            <label htmlFor="">
               Paste Name / Title:
               <input
                  className="text-white bg-[#2b2b2b]"
                  name="title"
                  type="text"
                  onChange={handleChange}
               />
            </label>
            <button
               className="border-b-[1px] border-white text-white bg-[#2b2b2b] p-2"
               type="submit"
            >
               Create New Paste
            </button>
         </form>
      </div>
   );
};

export default PasteSettings;
