"use client"
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {

const [keyword, setKeyword] = useState('');
const router = useRouter();

  const menu = [
    {
         name: "About", 
         url: "/about"
    },
    {
        name: "Sign In", 
        url: "/login"
   }
        
        ];

        const searchFunc = (e) =>{

          if(e.key === "Enter" && keyword.length >= 3){
            router.push(`/search/${keyword}`)
            setKeyword("")
          }

        }
        //bg-amber-600 p-3 rounded-lg text-2xl font-bold
       
  return (
    <div className={`flex items-center gap-7 h-20 font-bold text-orange-600`}>
      <div className=" headerstl ">
        MovieApp
      </div>

      <div className="flex items-center gap-2 border flex-1 p-3 rounded-lg text-orange-600">
        <input value={keyword} onKeyDown={searchFunc} onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent"
        />
        <IoSearch size={25} />
      </div >
      <ThemeComp/>
      {
        menu.map((menu,key) => (
            <MenuItem menu={menu} key={key}/>
        ))
      }
    </div>
  );
};

export default Header;
