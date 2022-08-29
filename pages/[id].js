import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { app, database } from "../firebaseConfig";
import {
   collection,
   getDoc,
   getDocs,
   query,
   doc,
   onSnapshot,
   where,
} from "firebase/firestore";

const Post = () => {
   const [paste, setPaste] = useState([]);
   const router = useRouter();
   const { id } = router.query;
   const pasteRef = collection(database, "paste");

   const getPaste = async () => {
      const q = query(pasteRef, where("hash", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
         setPaste(doc.data());
      });
   };

   useEffect(() => {
      if (!router.isReady) return;
      getPaste();
   }, [router.isReady]);

   return (
      <div className="flex flex-col gap-5 p-3">
         <p>Title: {paste.title}</p>
         <p>Syntax: {paste.syntax}</p>
         <div className="border-[1px] border-white">{paste.paste}</div>
         <div>Tags: {paste.tags}</div>
         <div>RAW Paste Data</div>
         <textarea
            className="text-white bg-black"
            name=""
            id=""
            cols="80"
            rows="10"
            value={paste.paste}
         ></textarea>
      </div>
   );
};

export default Post;
