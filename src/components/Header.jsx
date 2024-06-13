import brandIcon from "../assets/mercular-logo.png";
import Divider from "@mui/material/Divider";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import reviewIcon from "../assets/feedback.png";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import thIcon from "../assets/th.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import headerIcon from "../assets/Header_Icon-01.png";
import headerIcon3 from "../assets/Header_Icon-03.png";
import headerIcon4 from "../assets/Header_Icon-05.png";
import headerIcon5 from "../assets/Header_Icon-04.png";
import headerIcon6 from "../assets/Header_Icon-06.png";
import headerIcon7 from "../assets/Header_Icon-07.png";

const Header = () => {
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
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      maxWidth: "401px",
                      minWidth: "320px",
                      maxHeight: "40px",
                    }}
                  >
                    <div
                      className="flex items-center max-h-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 
              focus:ring-blue-500 hover:ring-1 hover:ring-blue-500"
                      style={{ padding: "2px 4px" }}
                    >
                      <div className="flex items-center justify-center w-8 min-w-8 h-8 bg-blue-600 rounded-2xl">
                        <SearchRoundedIcon
                          style={{ fontSize: "22px", color: "#fff" }}
                        />
                      </div>
                      <input
                        className="w-full bg-gray-100 rounded-full outline-none"
                        placeholder="หา Gadget ที่ใช่กับ Mercular..."
                        type="text"
                        name="searchItem"
                        style={{ padding: "7.5px 4px 7.5px 6px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <a href="/">
                  <div
                    className="flex items-center flex-col text-center"
                    style={{
                      padding: "2px",
                      width: "52px",
                      height: "52px",
                      color: "rgba(69, 79, 91, 1)",
                    }}
                  >
                    <button className="p-1">
                      <EmojiEventsOutlinedIcon />
                    </button>
                    <span
                      className="w-12"
                      style={{ fontSize: "10px", lineHeight: "16px" }}
                    >
                      Best of
                    </span>
                  </div>
                </a>
                <a href="/">
                  <div
                    className="flex items-center flex-col text-center"
                    style={{
                      padding: "2px",
                      width: "52px",
                      height: "52px",
                      color: "rgba(69, 79, 91, 1)",
                    }}
                  >
                    <button className="p-1">
                      <img src={reviewIcon} width={24} alt="header Icon" />
                    </button>
                    <span
                      className="w-12"
                      style={{ fontSize: "10px", lineHeight: "16px" }}
                    >
                      บทความ
                    </span>
                  </div>
                </a>
                <a href="/">
                  <div
                    className="flex items-center flex-col text-center"
                    style={{
                      padding: "2px",
                      width: "52px",
                      height: "52px",
                      color: "rgba(69, 79, 91, 1)",
                    }}
                  >
                    <button className="p-1">
                      <StorefrontOutlinedIcon />
                    </button>
                    <span
                      className="w-12"
                      style={{ fontSize: "10px", lineHeight: "16px" }}
                    >
                      ที่ตั้งร้าน
                    </span>
                  </div>
                </a>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ height: "24px" }}
                />
                <div
                  className="flex items-center flex-col text-center"
                  style={{
                    padding: "2px",
                    width: "52px",
                    height: "52px",
                    color: "rgba(69, 79, 91, 1)",
                  }}
                >
                  <button className="p-1">
                    <div
                      className="flex items-center w-6 h-6 border-2 overflow-hidden"
                      style={{ borderRadius: "50%" }}
                    >
                      <img
                        src={thIcon}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                  <span
                    className="w-12"
                    style={{ fontSize: "10px", lineHeight: "16px" }}
                  >
                    ไทย
                  </span>
                </div>
                <div
                  className="flex items-center flex-col text-center"
                  style={{
                    padding: "2px",
                    width: "52px",
                    height: "52px",
                    color: "rgba(69, 79, 91, 1)",
                  }}
                >
                  <button className="p-1">
                    <ShoppingCartOutlinedIcon />
                  </button>
                  <span
                    className="w-12"
                    style={{ fontSize: "10px", lineHeight: "16px" }}
                  >
                    รถเข็น
                  </span>
                </div>
                <div>
                  <button
                    className="py-2.5 px-4 h-10 bg-blue-600 rounded-lg text-white text-sm font-bold"
                    style={{ width: "90px" }}
                  >
                    <span>เข้าสู่ระบบ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-600">
          <div className="container mx-auto">
            <div className="flex items-center py-1" style={{ height: "44px" }}>
              <div
                className="flex"
                style={{ maxHeight: "36px", minHeight: "36px" }}
              >
                <div className="flex gap-x-2">
                  <a
                    className="inline-flex justify-center items-center rounded-lg text-white hover:bg-slate-100/20"
                    style={{ padding: "9px 8px", minWidth: "90px" }}
                  >
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">สำหรับคุณ</span>
                  </a>
                  <a
                    className="inline-flex justify-center items-center rounded-lg text-white hover:bg-slate-100/20"
                    style={{ padding: "9px 8px", minWidth: "90px" }}
                  >
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon3} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">ฟังเพลง</span>
                  </a>
                  <a
                    className="inline-flex justify-center items-center rounded-lg text-white hover:bg-slate-100/20"
                    style={{ padding: "9px 8px", minWidth: "90px" }}
                  >
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon4} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">เล่นเกม</span>
                  </a>
                  <a
                    className="inline-flex justify-center items-center rounded-lg text-white hover:bg-slate-100/20"
                    style={{ padding: "9px 8px", minWidth: "90px" }}
                  >
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon5} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">คอมพิวเตอร์</span>
                  </a>
                  <a
                    className="inline-flex justify-center items-center rounded-lg text-white hover:bg-slate-100/20"
                    style={{ padding: "9px 8px", minWidth: "90px" }}
                  >
                    <div className="w-5 h-5 mr-2 bg-white rounded-full">
                      <img src={headerIcon6} alt="Header Icon" />
                    </div>
                    <span className="text-sm font-semibold">จัดโต๊ะคอม</span>
                  </a>
                  <a
                    className="inline-flex justify-center items-center rounded-lg text-white hover:bg-slate-100/20"
                    style={{ padding: "9px 8px", minWidth: "90px" }}
                  >
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
