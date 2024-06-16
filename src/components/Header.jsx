import brandIcon from "../assets/images/mercular-logo.png";
import Divider from "@mui/material/Divider";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import reviewIcon from "../assets/images/feedback.png";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import thIcon from "../assets/images/th.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import headerIcon from "../assets/images/Header_Icon-01.png";
import headerIcon3 from "../assets/images/Header_Icon-03.png";
import headerIcon4 from "../assets/images/Header_Icon-05.png";
import headerIcon5 from "../assets/images/Header_Icon-04.png";
import headerIcon6 from "../assets/images/Header_Icon-06.png";
import headerIcon7 from "../assets/images/Header_Icon-07.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);

  const productInCart = cart.reduce(
    (accumulator, item) => (accumulator += item.quantity),
    0
  );

  return (
    <div className="container-header">
      <div className="fixed left-0 right-0 z-50 bg-white">
        <div className="container mx-auto">
          <div className="h-16">
            <div className="flex items-center h-full">
              <div className="flex items-center w-full h-full gap-x-6">
                <img
                  className="my-2"
                  src={brandIcon}
                  alt="Brand Icon"
                  width={120}
                  height={40}
                />
                <div className="flex w-fit">
                  <button className="w-24 py-2 text-sm font-bold">
                    หน้าหลัก
                  </button>
                  <button className="w-24 py-2 text-sm font-bold">
                    สินค้า
                  </button>
                  <button className="w-24 py-2 text-sm font-bold">
                    โปรโมชัน
                  </button>
                </div>
                <div className="w-full">
                  <div className="min-w-[320px] max-w-[401px] max-h-[40px]">
                    <div
                      className="flex items-center max-h-10 px-1 py-[2px] bg-gray-100 rounded-full focus:outline-none focus:ring-1 
              focus:ring-blue-500 hover:ring-1 hover:ring-blue-500"
                    >
                      <div className="flex items-center justify-center w-8 min-w-8 h-8 bg-blue-600 rounded-2xl">
                        <SearchRoundedIcon
                          sx={{ fontSize: "22px", color: "#fff" }}
                        />
                      </div>
                      <input
                        className="w-full py-[7.5px] pr-1 pl-[6px] bg-gray-100 rounded-full outline-none"
                        placeholder="หา Gadget ที่ใช่กับ Mercular..."
                        type="text"
                        name="searchItem"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Link to={"/"}>
                  <div className="flex flex-col items-center w-[52px] h-[52px] p-[2px] text-gray-600 text-center">
                    <button className="p-1">
                      <EmojiEventsOutlinedIcon />
                    </button>
                    <span className="w-12 text-[10px] leading-4">Best of</span>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div className="flex flex-col items-center w-[52px] h-[52px] p-[2px] text-gray-600 text-center">
                    <button className="p-1">
                      <img src={reviewIcon} width={24} alt="header Icon" />
                    </button>
                    <span className="w-12 text-[10px] leading-4">บทความ</span>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div className="flex flex-col items-center w-[52px] h-[52px] p-[2px] text-gray-600 text-center">
                    <button className="p-1">
                      <StorefrontOutlinedIcon />
                    </button>
                    <span className="w-12 text-[10px] leading-4">
                      ที่ตั้งร้าน
                    </span>
                  </div>
                </Link>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ height: "24px" }}
                />
                <div className="flex flex-col items-center w-[52px] h-[52px] p-[2px] text-gray-600 text-center">
                  <button className="p-1">
                    <div className="flex items-center w-6 h-6 border-2 rounded-full overflow-hidden">
                      <img
                        src={thIcon}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                  <span className="w-12 text-[10px] leading-4">ไทย</span>
                </div>
                <Link to={"/cart"}>
                  <div className="flex flex-col items-center w-[52px] h-[52px] p-[2px] text-gray-600 text-center">
                    <button className="p-1 relative">
                      <ShoppingCartOutlinedIcon />
                      {cart.length > 0 && (
                        <span className="flex items-center justify-center w-5 h-5 p-1 absolute -top-1 -right-1 bg-red-500 rounded-3xl text-xs font-medium text-white">
                          {productInCart}
                        </span>
                      )}
                    </button>
                    <span className="w-12 text-[10px] leading-4">รถเข็น</span>
                  </div>
                </Link>
                <div>
                  <button className="w-[90px] h-10 py-2.5 px-4 bg-blue-600 rounded-lg text-white text-sm font-bold">
                    <span>เข้าสู่ระบบ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-600">
          <div className="container mx-auto">
            <div className="flex items-center h-11 py-1">
              <div className="flex min-h-9 max-h-9">
                <div className="flex gap-x-2">
                  <a className="inline-flex justify-center items-center min-w-[90px] px-2 py-[9px] rounded-lg text-white hover:bg-slate-100/20">
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">สำหรับคุณ</span>
                  </a>
                  <a className="inline-flex justify-center items-center min-w-[90px] px-2 py-[9px] rounded-lg text-white hover:bg-slate-100/20">
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon3} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">ฟังเพลง</span>
                  </a>
                  <a className="inline-flex justify-center items-center min-w-[90px] px-2 py-[9px] rounded-lg text-white hover:bg-slate-100/20">
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon4} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">เล่นเกม</span>
                  </a>
                  <a className="inline-flex justify-center items-center min-w-[90px] px-2 py-[9px] rounded-lg text-white hover:bg-slate-100/20">
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon5} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">คอมพิวเตอร์</span>
                  </a>
                  <a className="inline-flex justify-center items-center min-w-[90px] px-2 py-[9px] rounded-lg text-white hover:bg-slate-100/20">
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon6} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">จัดโต๊ะคอม</span>
                  </a>
                  <a className="inline-flex justify-center items-center min-w-[90px] px-2 py-[9px] rounded-lg text-white hover:bg-slate-100/20">
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon7} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">อุปกรณ์มือถือ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
