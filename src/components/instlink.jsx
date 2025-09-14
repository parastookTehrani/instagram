import instagram from "../assets/insta logo.svg";
import { IoHomeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiPlusSquare } from "react-icons/fi";
import profile from "../assets/Frame (3).svg";

export function InstaLink() {
  return (
    <aside className=" fixed h-screen bg-white p-6 ">
      <div className="mb-8">
        <img src={instagram} alt="Instagram" className="h-10" />
      </div>

      <ul className="flex flex-col gap-6 text-gray-800 font-medium">
        <li className="flex items-center gap-3">
          <IoHomeSharp className="w-6 h-6" />
          <a href="">Home</a>
        </li>
        <li className="flex items-center gap-3">
          <CiSearch className="w-6 h-6" />
          <a href="">Search</a>
        </li>
        <li className="flex items-center gap-3">
          <FiPlusSquare className="w-6 h-6" />
          <a href="">Create</a>
        </li>
        <li className="flex items-center gap-3">
          <img
            src={profile}
            alt="Profile icon"
            className="w-6 h-6 rounded-full"
          />

          <a href="">Profile</a>
        </li>
      </ul>
    </aside>
  );
}
