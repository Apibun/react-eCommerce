import productItem from "../assets/hyperx-cloud-ii-gaming-earbuds-red-front-view.jpg";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import newbadgeScore from "../assets/new-badgeScore.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Divider from "@mui/material/Divider";
import fastDeliveryLogo from "../assets/sameday.png";
import freeShipping from "../assets/free-shipping.png";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import guarantee from "../assets/guarantee.png";
import genuine from "../assets/genuine.png";
import { useState } from "react";

const DetailItem = () => {
  const [inputQuantity, setInputQuantity] = useState(1);

  const minusQuantity = () => {
    setInputQuantity(inputQuantity - 1);
  };

  const plusQuantity = () => {
    setInputQuantity(inputQuantity + 1);
  };

  const handleKeydownInput = (e) => {
    const allowKeys = ["Backspace", "ArrowLeft", "ArrowRight"];
    if (!/\d/.test(e.key) && !allowKeys.includes(e.key) && !e.ctrlKey) {
      e.preventDefault();
    }
  };

  return (
    <div className="container mx-auto">
      <nav className="mt-2">
        <ol className="flex items-center">
          <li>
            <a href="#" className="text-sm">
              หน้าแรก
            </a>
          </li>
          <li>
            <div
              className="w-1 h-1 rounded-full bg-blue-500"
              style={{ margin: "0 14px" }}
            ></div>
          </li>
          <li>
            <a href="#" className="text-sm">
              เกมมิ่ง
            </a>
          </li>
          <li>
            <div
              className="w-1 h-1 rounded-full bg-blue-500"
              style={{ margin: "0 14px" }}
            ></div>
          </li>
          <li>
            <a href="#" className="text-sm">
              หูฟังเกมมิ่ง & ลำโพงเกมมิ่ง
            </a>
          </li>
          <li>
            <div
              className="w-1 h-1 rounded-full bg-blue-500"
              style={{ margin: "0 14px" }}
            ></div>
          </li>
          <li>
            <a href="#" className="text-sm">
              หูฟัง HyperX Cloud Earbuds II
            </a>
          </li>
        </ol>
      </nav>
      <div className="flex mt-4 gap-x-4">
        <div className="flex w-5/12">
          <div className="flex flex-col gap-y-4">
            <div className="preview-product-mini rounded-xl overflow-hidden hover:border-blue-600">
              <img src={productItem} alt="hyperx cloud earbuds II" />
            </div>
            <div className="preview-product-mini rounded-xl overflow-hidden hover:border-blue-600">
              <img src={productItem} alt="hyperx cloud earbuds II" />
            </div>
            <div className="preview-product-mini rounded-xl overflow-hidden hover:border-blue-600">
              <img src={productItem} alt="hyperx cloud earbuds II" />
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-full rounded-xl cursor-pointer">
              <img src={productItem} alt="hyperx cloud earbuds II" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 w-4/12">
          <a href="#">
            <p className="text-xs font-medium text-blue-600">HyperX</p>
          </a>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">หูฟัง HyperX Cloud Earbuds II</p>
            <div className="flex flex-col justify-center items-center w-12 h-12 text-blue-600">
              <button className="p-1 rounded-full bg-transparent hover:bg-blue-100/55">
                <FavoriteBorderRoundedIcon />
              </button>
              <span style={{ fontSize: "10px", lineHeight: "16px" }}>
                ถูกใจ
              </span>
            </div>
          </div>
          <p style={{ fontSize: "10px", color: "rgba(69, 79, 91, 1)" }}>
            รหัสสินค้า 1512124000001 (106872)
          </p>
          <div className="flex items-center rounded-xl p-2 bg-gray-50 gap-x-3 mt-3">
            <div className="relative flex items-center justify-center w-12 h-12">
              <img src={newbadgeScore} alt="new badge score" />
              <span className="absolute text-2xl font-bold text-white">
                4.5
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  <div>
                    <StarRoundedIcon />
                  </div>
                  <div>
                    <StarRoundedIcon />
                  </div>
                  <div>
                    <StarRoundedIcon />
                  </div>
                  <div>
                    <StarRoundedIcon />
                  </div>
                  <div>
                    <StarRoundedIcon />
                  </div>
                </div>
                <a href="#" className="self-end pl-1">
                  <p className="text-sm text-blue-600">จาก 34 รีวิว</p>
                </a>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-semibold">27 คน</p>
                <p className="text-xs">แนะนำให้ซื้อสินค้าชินนี้</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <div className="flex justify-center items-center text-white rounded-lg bg-red-600">
                <p className="font-semibold" style={{ padding: "2px 4px" }}>
                  -13%
                </p>
              </div>
              <p
                className="text-3xl font-bold text-blue-600"
                style={{ lineHeight: "48px" }}
              >
                ฿1,290
              </p>
              <p className="text-xs text-slate-500/80 line-through mb-2 self-end">
                ราคาปกติ ฿1,490
              </p>
            </div>
            <p className="text-sm text-red-600">ประหยัดทันที 200 บาท</p>
          </div>
          <div className="flex flex-col gap-y-2 mt-3 mb-3">
            <div className="flex gap-x-1">
              <p className="text-sm/6 font-bold">Color :</p>
              <p className="text-sm/6">Red</p>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="px-3 py-1 mb-1 rounded-lg bg-gray-100/80 text-sm font-semibold">
                Red
              </button>
              <button className="px-3 py-1 mb-1 rounded-lg bg-gray-100/80 text-sm font-semibold">
                Black
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <p className="text-sm font-semibold">จำนวน :</p>
              <div className="flex border border-slate-300/70 rounded-lg overflow-hidden">
                <button
                  className="p-1 disabled:text-gray-200"
                  onClick={minusQuantity}
                  disabled={inputQuantity <= 1}
                >
                  <RemoveRoundedIcon style={{ fontSize: "20px" }} />
                </button>
                <div className="flex item-center">
                  <input
                    type="text"
                    maxLength="2"
                    value={inputQuantity}
                    className="w-12 font-bold text-center focus:outline-0"
                    onChange={(e) => setInputQuantity(Number(e.target.value))}
                    onKeyDown={handleKeydownInput}
                  />
                </div>
                <button
                  className="p-1 disabled:text-gray-200"
                  onClick={plusQuantity}
                  disabled={inputQuantity >= 99}
                >
                  <AddRoundedIcon style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 mt-3">
            <a href="#">
              <div className="flex flex-col w-14 h-14 items-center text-blue-600">
                <button className="p-1 rounded-full bg-transparent hover:bg-blue-100/55">
                  <CompareArrowsRoundedIcon />
                </button>
                <p style={{ fontSize: "10px" }}>เปรียบเทียบ</p>
              </div>
            </a>
            <div className="flex flex-col w-14 h-14 items-center text-blue-600">
              <button className="p-1 rounded-full bg-transparent hover:bg-blue-100/55">
                <QuestionAnswerOutlinedIcon />
              </button>
              <p style={{ fontSize: "10px" }}>แชท</p>
            </div>
            <button className="px-2 py-4 w-36 h-12 bg-blue-200/70 rounded-lg text-sm font-bold text-blue-600 transition-colors hover:bg-blue-500/40">
              ซื้อเลย
            </button>
            <button className="flex justify-center items-center px-2 py-4 w-36 h-12 bg-blue-600 rounded-lg text-sm font-bold text-white transition-shadow hover:shadow-lg hover:shadow-blue-300/55">
              <AddShoppingCartRoundedIcon
                className="mr-1"
                style={{ fontSize: "20px" }}
              />
              <p>ใส่รถเข็น</p>
            </button>
          </div>
        </div>
        <div className="w-3/12">
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-x-2">
                <DiscountOutlinedIcon className="text-blue-600" />
                <p className="text-sm font-bold">คูปองส่วนลด</p>
              </div>
              <div className="flex items-center gap-x-1.5 text-blue-600">
                <p className="text-xs">ดูทั้งหมด</p>
                <ChevronRightRoundedIcon />
              </div>
            </div>
            <div className="flex gap-x-2 overflow-auto scroll-smooth">
              <div className="relative">
                <div className="flex pl-3 pt-1 bg-red-100 rounded-2xl before:content-[' '] before:bg-white before:w-4 before:h-4 before:absolute before:top-9 before:-left-2 before:rounded-2xl after:content-[' '] after:bg-white after:w-4 after:h-4 after:absolute after:top-9 after:-right-2 after:rounded-2xl">
                  <div className="flex flex-col w-44 pl-1">
                    <p className="text-lg font-bold text-red-600">
                      ลดเพิ่ม 200.-
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      คูปองลด HyperX
                    </p>
                    <p className="text-xs text-gray-700 pb-5">
                      ช้อปครบ 3,000.-
                    </p>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderRightWidth: "3px",
                      borderStyle: "dashed",
                      borderColor: "#fff",
                      borderSpacing: "10px",
                    }}
                  />
                  <div className="flex flex-col items-center justify-evenly w-24 px-1">
                    <button className="h-8 px-6 rounded-lg bg-red-600 text-sm font-bold text-white text-center">
                      เก็บ
                    </button>
                    <p className="text-gray-500" style={{ fontSize: "10px" }}>
                      ใช้ได้ถึง 30 มิ.ย. 67
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 mt-2 rounded-2xl bg-zinc-50">
              <p className="font-semibold">จัดส่ง</p>
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-3 w-64">
                  <div className="min-w-6 w-6">
                    <img
                      src={fastDeliveryLogo}
                      className="object-contain"
                      alt="fast delivery logo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-blue-600 hover:transition-colors"
                    >
                      ส่งทันใจ Sameday
                    </a>
                    <p className="text-sm/6 text-gray-700">
                      ได้รับสินค้าภายในวันนี้ ไม่เกิน 22:00 น.
                      เมื่อสั่งซื้อและชำระเงินไม่เกิน 15:00 น.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <div className="min-w-6 w-6">
                    <img
                      src={freeShipping}
                      className="object-contain"
                      alt="free shipping logo"
                    />
                  </div>
                  <div className="flex flex-col w-60">
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-blue-600 hover:transition-colors"
                    >
                      ส่งปกติ (ฟรี)
                    </a>
                    <span className="text-sm/6 text-gray-700">
                      จัดส่งฟรีทั่วประเทศ เมื่อซื้อครบ 199.-
                      <br />
                      <div className="inline-block mr-1 text-blue-600">
                        <LocationOnRoundedIcon
                          className="relative bottom-1"
                          style={{ fontSize: "20px" }}
                        />
                        <span>กรุงเทพมหานคร</span>
                      </div>
                      ได้รับสินค้าวันที่
                      <br /> 11 มิ.ย. 2567 - 12 มิ.ย. 2567 โดยประมาณ
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-4 mt-2 rounded-2xl bg-zinc-50">
              <p className="font-semibold">มั่นใจ Mercular</p>
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-3 w-64">
                  <div className="min-w-8 w-8">
                    <img
                      src={guarantee}
                      className="object-contain"
                      alt="guarantee logo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-blue-600 hover:transition-colors"
                    >
                      การรับประกัน
                    </a>
                    <p className="text-sm/6 text-gray-700">
                      รับประกันโดยศูนย์ไทยระยะเวลา 2 ปี
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <div className="min-w-8 w-8">
                    <img
                      src={genuine}
                      className="object-contain"
                      alt="genuine logo"
                    />
                  </div>
                  <div className="flex flex-col w-60">
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-blue-600 hover:transition-colors"
                    >
                      ของแท้ 100%
                    </a>
                    <p className="text-sm/6 text-gray-700">
                      เป็นตัวแทนจำหน่ายอย่างเป็นทางการ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
