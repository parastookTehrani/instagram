import { useState, useEffect } from "react";
import axios from "axios";
import instagram from "../assets/insta logo.svg";
import { IoHomeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiPlusSquare } from "react-icons/fi";
import profile from "../assets/Frame (3).svg";

import { Link, useNavigate } from "react-router-dom";


export function InstaLink() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [isContentEditing, setIsContentEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
const navigate2=useNavigate()
  useEffect(() => {
    if (!query) return setResults([]);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/user/searchUser?search=${query}`
        );
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

    <>
      <aside className="fixed h-screen w-1/6 bg-white p-6">
        <div className="mb-8">
          <img src={instagram} alt="Instagram" className="h-10" />
        </div>
        <ul className="flex flex-col gap-6 text-gray-800 font-medium">
          <li className="flex items-center gap-3">
            <IoHomeSharp className="w-6 h-6" />
            <button onClick={()=>{navigate2('/instagram')}}>Home</button>
          </li>
          <li className="flex items-center gap-3">
            <CiSearch className="w-6 h-6" />
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>Search</button>
          </li>
          <li className="flex items-center gap-3">
            <FiPlusSquare className="w-6 h-6" />
            <button onClick={() => setIsCreateOpen(!isCreateOpen)}>Create</button>
          </li>
          <li className="flex items-center gap-3">
            <img
              src={profile}
              alt="Profile icon"
              className="w-6 h-6 rounded-full"
            />
            <button>Profile</button>
          </li>
        </ul>
=

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
                  <Link key={user.username} to={`/deatilsuser/${user.username}`}>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                      <img
                        src={user.profilePicture}
                        alt={user.username}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{user.username}</p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              query && <p className="text-gray-400 text-sm">No results found</p>
            )}
          </div>
        )}
      </aside>


      {isCreateOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 pointer-events-auto">
            <h2 className="text-lg font-semibold text-center mb-4">
              Create new post
            </h2>


            <div className="mb-3">
              {isTitleEditing ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={() => setIsTitleEditing(false)}
                  className="w-full border rounded-lg px-3 py-2 outline-none"
                  autoFocus
                />
              ) : (
                <p
                  className="text-gray-600 cursor-text border rounded-lg px-3 py-2"
                  onClick={() => setIsTitleEditing(true)}
                >
                  {title || "Title"}
                </p>
              )}
            </div>

            <div className="mb-3">
              {isContentEditing ? (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onBlur={() => setIsContentEditing(false)}
                  rows={3}
                  className="w-full border rounded-lg px-3 py-2 outline-none resize-none"
                  autoFocus
                />
              ) : (
                <p
                  className="text-gray-600 cursor-text border rounded-lg px-3 py-2"
                  onClick={() => setIsContentEditing(true)}
                >

                  {content || "Content"}
                </p>
              )}
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Select from computer
            </button>

            <div className="mt-4">
              <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Create Post
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}