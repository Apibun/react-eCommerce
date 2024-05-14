import Header from "./components/Header";
import headerIcon from "./assets/Header_Icon-01.png";
import headerIcon2 from "./assets/Header_Icon-02.png";
import headerIcon3 from "./assets/Header_Icon-04.png";
import headerIcon4 from "./assets/Header_Icon-03.png";
import headerIcon5 from "./assets/Header_Icon-05.png";
import headerIcon6 from "./assets/Header_Icon-07.png";
import GridViewIcon from "@mui/icons-material/GridView";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Divider from "@mui/material/Divider";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div
              className="flex w-1/6 justify-around items-center py-1.5 px-3 rounded-lg bg-blue-600 text-white text-sm font-bold"
              style={{ width: "145px" }}
            >
              <div className="mr-1">
                <GridViewIcon />
              </div>
              <span>หมวดหมู่สินค้า</span>
            </div>
            <div className="flex pl-3 flex-shrink-0">
              <div
                className="flex text-sm font-semibold"
                style={{ columnGap: "8px" }}
              >
                <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
                  <div className="w-5 h-5 mr-2">
                    <img src={headerIcon} alt="header Icon" />
                  </div>
                  <span>สำหรับคุณ</span>
                </a>
                <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
                  <div className="w-5 h-5 mr-2">
                    <img src={headerIcon2} alt="header Icon" />
                  </div>
                  <span>ฟังเพลง</span>
                </a>
                <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
                  <div className="w-5 h-5 mr-2">
                    <img src={headerIcon3} alt="header Icon" />
                  </div>
                  <span>เล่นเกม</span>
                </a>
                <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
                  <div className="w-5 h-5 mr-2">
                    <img src={headerIcon4} alt="header Icon" />
                  </div>
                  <span>คอมพิวเตอร์</span>
                </a>
                <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
                  <div className="w-5 h-5 mr-2">
                    <img src={headerIcon5} alt="header Icon" />
                  </div>
                  <span>จัดโต๊ะคอม</span>
                </a>
                <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
                  <div className="w-5 h-5 mr-2">
                    <img src={headerIcon6} alt="header Icon" />
                  </div>
                  <span>อุปกรณ์มือถือ</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex items-center text-sm font-semibold"
            style={{ columnGap: "8px" }}
          >
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              style={{ height: "24px" }}
            />
            <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
              <div className="w-5 h-5 mr-2">
                <img src={headerIcon} alt="header Icon" />
              </div>
              <span>เก็บคูปอง</span>
            </a>
            <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
              <div className="w-5 h-5 mr-2">
                <img src={headerIcon} alt="header Icon" />
              </div>
              <span>BEST OF</span>
            </a>
            <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
              <div className="w-5 h-5 mr-2">
                <img src={headerIcon} alt="header Icon" />
              </div>
              <span>รีวิวสินค้า</span>
            </a>
            <a className="flex justify-around p-2 bg-gray-100 rounded-lg text-slate-700">
              <div className="mr-2">
                <StorefrontOutlinedIcon style={{ fontSize: "20px" }} />
              </div>
              <span>ที่ตั้งร้าน</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
