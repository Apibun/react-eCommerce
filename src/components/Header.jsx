import brandIcon from "../assets/mercular-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import thIcon from "../assets/th.png";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import headerIcon from "../assets/Header_Icon-01.png";
import headerIcon2 from "../assets/Header_Icon-02.png";
import headerIcon3 from "../assets/Header_Icon-04.png";
import headerIcon4 from "../assets/Header_Icon-03.png";
import headerIcon5 from "../assets/Header_Icon-05.png";
import headerIcon6 from "../assets/Header_Icon-07.png";
import GridViewIcon from "@mui/icons-material/GridView";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Divider from "@mui/material/Divider";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center">
          <img
            className="my-2"
            src={brandIcon}
            alt="Brand Icon"
            width={120}
            height={40}
          />
          <div className="px-10" style={{ width: "100%" }}>
            <div className="mx-auto" style={{ maxWidth: "648px" }}>
              <div
                className="flex items-center px-1 bg-gray-100 rounded-full focus:outline-none focus:ring-1 
              focus:ring-blue-500 hover:ring-1 hover:ring-blue-500"
              >
                <div className="flex items-center justify-center bg-blue-600 rounded-2xl w-8 h-8">
                  <SearchRoundedIcon
                    style={{ fontSize: "20px", color: "#fff" }}
                  />
                </div>
                <input
                  className="w-11/12 p-2 bg-gray-100"
                  placeholder="หา Gadget ที่ใช่กับ Mercular..."
                  type="text"
                  name="searchItem"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="p-2 mr-1 w-10 h-10">
              <div
                className="flex items-center w-6 h-6 border-2 overflow-hidden"
                style={{ borderRadius: "50%" }}
              >
                <img src={thIcon} className="w-full h-full" />
              </div>
            </button>
            <button className="p-2 mr-1 w-10 h-10">
              <HeadphonesOutlinedIcon
                style={{ fontSize: "24px", color: "rgb(107 114 128)" }}
              />
            </button>
            <button className="p-2 mr-1 w-10 h-10">
              <FavoriteBorderRoundedIcon
                style={{ fontSize: "24px", color: "rgb(107 114 128)" }}
              />
            </button>
            <button className="p-2 mr-1 w-10 h-10">
              <ShoppingCartOutlinedIcon
                style={{ fontSize: "24px", color: "rgb(107 114 128)" }}
              />
            </button>
            <button
              className="py-2.5 px-4 ml-4 h-10 bg-blue-600 rounded-lg text-white text-sm font-bold"
              style={{ width: "90px" }}
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
