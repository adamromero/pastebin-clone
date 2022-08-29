import React from "react";
import Link from "next/link";

const Header = () => {
   return (
      <header className="px-3 py-4 border-b-[1px] border-white">
         <div className="max-w-[1340px] w-full m-auto flex justify-between">
            <div className="flex gap-6 max-w-lg items-center">
               <h1 className="text-2xl">PASTEBIN</h1>
               <Link href="/">
                  <a className="flex items-center bg-[#61ba65] py-1 px-2 rounded text-sm">
                     <span className="font-bold text-[30px] mr-[2px] relative top-[-3px]">
                        +
                     </span>
                     <span>paste</span>
                  </a>
               </Link>
            </div>
            <div>login?</div>
         </div>
      </header>
   );
};

export default Header;
