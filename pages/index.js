import { useState } from "react";
import PasteSettings from "../components/PasteSettings";

export default function Home() {
   const initialPasteDetails = {
      paste: "",
      category: "",
      tags: "",
      syntax: "",
      expiration: "",
      exposure: "",
      title: "",
      hash: "",
   };
   const [pasteDetails, setPasteDetails] = useState(initialPasteDetails);

   const handleChange = (e) => {
      setPasteDetails((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   return (
      <div className="p-3">
         <h2>New Paste</h2>
         <textarea
            className="text-white bg-[#2b2b2b] text-sm p-3"
            name="paste"
            id=""
            cols="100"
            rows="10"
            onChange={handleChange}
         ></textarea>
         <PasteSettings
            pasteDetails={pasteDetails}
            setPasteDetails={setPasteDetails}
         />
      </div>
   );
}
