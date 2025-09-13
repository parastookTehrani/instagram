import instagram from "../assets/insta logo.svg";
import home from "../assets/Frame.svg";
import search from "../assets/Frame (1).svg";
import createIcon from "../assets/Frame (2).svg";
import profile from "../assets/Frame (3).svg";

export function InstaLink() {
  return (
    <aside className=" fixed h-screen w-1/6  bg-white p-6 ">
      <div className="mb-8">
        <img src={instagram} alt="Instagram" className="h-10" />
      </div>

      <ul className="flex flex-col gap-6 text-gray-800 font-medium">
        <li className="flex items-center gap-3">
          <img src={home} alt="Home icon" className="w-6 h-6" />
          <a href="">Home</a>
        </li>
        <li className="flex items-center gap-3">
          <img src={search} alt="Search icon" className="w-6 h-6" />
          <a href="">Search</a>
        </li>
        <li className="flex items-center gap-3">
          <img src={createIcon} alt="Create icon" className="w-6 h-6" />
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
