import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./Constants/constants";
import { cacheResults } from "./Utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)

  // console.log(searchQuery)

  const searchCache = useSelector(store => store.search)

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {

    const timer = setTimeout(()=>{
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        handleSearchSuggestions();
      }
    },200)
  
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])
  

  const handleSearchSuggestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    console.log(json)
    setSuggestions(json[1])
     dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }
  // console.log(suggestions)

  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-4 cursor-pointer"
          alt="menu-logo"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
        />
        <a href="/">
          <img
            className="h-8 py-1 mx-2"
            alt="youtube-logo"
            src="https://tse4.mm.bing.net/th?id=OIP.xxNZm92rz6ZHHChoF2zZSAHaBp&pid=Api&P=0&h=180"
          />
        </a>
      </div>
      <div className="bg-gray-50 col-span-11 text-center ">
        <div>
        <input
          className="w-1/2 px-4 py-1 border rounded-l-full border-black"
          placeholder="  🔍︎  Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className=" bg-gray-300 py-1 border border-black rounded-r-full px-3">
          {" "}
          🔍︎{" "}
        </button>
        <button className=" bg-gray-300 py-1 border border-black rounded-full px-3 mx-2">
          {" "}
          🎙️{" "}
        </button>
        </div>
        {showSuggestion && <div className="border-gray-200 rounded-md shadow-md ml-48 absolute p-1 bg-white w-[26rem]">
          <ul className="border-gray-400 rounded-xl" >
            {suggestions.map(s=> <li key={s} className="hover:bg-gray-200 py-1 shadow-sm text-start mx-2">🔍︎  {s}</li>)}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="w-8"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/non_2x/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
