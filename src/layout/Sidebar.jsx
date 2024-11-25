import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Logout from "../assets/images/Logout.png";
import Moon from "../assets/images/moon.png";
import { menuList } from "./menulist";

export default function Sidebar() {
  const { pathname } = useLocation();

  const handleSideBar = () => {
    if (
      document.getElementById("sidebar").className ==
      "h-[100vh] w-[300px] bg-primary overflow-y-scroll fixed left-0 top-0 hidden md:block"
    ) {
      document.getElementById("sidebar").className =
        "h-[100vh] w-[300px] bg-primary overflow-y-scroll fixed left-0 top-0 block md:block";
    } else {
      document.getElementById("sidebar").className =
        "h-[100vh] w-[300px] bg-primary overflow-y-scroll fixed left-0 top-0 hidden md:block";
    }
  };

  return (
    <div className="py-[4px] pt-[25px] px-[25px] h-full ">
      <div>
        <Link to="/">
        <div className="w-[150px] h-[40px]">
          <img src={Logo} alt="logo" />
        </div>
        </Link>

        <div
          onClick={() => handleSideBar()}
          className="md:hidden text-[#667A8A] absolute top-3 right-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
            />
          </svg>
        </div>

        <div className="mt-[51px] mb-[120px]">
          {menuList.map((item, index) => (
            <NavLink to={item.href} key={"href" + item.id} className="">
              <div
                className={`${
                  pathname == item.href ? "bg-[#667A8A]" : ""
                } flex gap-[10px] items-center  p-[8px] rounded`}
              >
                <div className="w-[25px] h-[25px]">
                  <img src={item.icon} />
                </div>
                <p className="text-highlight text-[17px] font-400">
                  {item.menuName}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 bg-primary">
        <div className={`flex gap-[10px] items-center  p-[8px] rounded`}>
          <div className="w-[25px] h-[25px]">
            <img src={Moon} />
          </div>
          <p className="text-highlight text-[17px] font-400">Light Mode</p>
        </div>
        <div className={`flex gap-[10px] items-center  p-[8px] rounded`}>
          <div className="w-[25px] h-[25px]">
            <img src={Logout} />
          </div>
          <p className="text-highlight text-[17px] font-400">Logout</p>
        </div>
      </div>
    </div>
  );
}
