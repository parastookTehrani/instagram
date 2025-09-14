import { useState, useEffect } from "react";
import axios from "axios";
import instagram from "../assets/insta logo.svg";
import { IoHomeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiPlusSquare } from "react-icons/fi";
import profile from "../assets/Frame (3).svg";
import { useNavigate } from "react-router-dom";

export function InstaLink() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return setResults([]);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/user/searchUser?search=${query}`
        );
        console.log(res);
        
        setResults(res.data.users || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [query]);


  
const navigate = useNavigate ;

    const handelchange = () => { 
      navigate ('/profile')
    }






  return (
    <aside className="fixed h-screen w-1/6 bg-white p-6">
      <div className="mb-8">
        <img src={instagram} alt="Instagram" className="h-10" />
      </div>
      <ul className="flex flex-col gap-6 text-gray-800 font-medium">
        <li className="flex items-center gap-3">

          <IoHomeSharp className="w-6 h-6" />
          <button>Home</button>
        </li>
        <li className="flex items-center gap-3">
          <CiSearch className="w-6 h-6" />
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>Search</button>
        </li>
        <li className="flex items-center gap-3">
          <FiPlusSquare className="w-6 h-6" />
          <button>Create</button>
        </li>
        <li className="flex items-center gap-3">
          <img
            src={profile}
            alt="Profile icon"
            className="w-6 h-6 rounded-full"
          />

          <button onClick={handelchange()} >Profile</button>

        </li>
      </ul>

      {isSearchOpen && (
        <div className="absolute top-5 left-40 w-80 bg-white shadow-lg rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-3">Search</h3>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          {results.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {results.map((user) => (
                <li
                  key={user._id}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.username}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            query && (
              <p className="text-gray-400 text-sm">No results found</p>
            )
          )}
        </div>
      )}
    </aside>
  );
}