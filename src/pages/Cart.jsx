import Header from "../components/Header";
import Checkbox from "@mui/material/Checkbox";
import hyperXProduct from "../assets/images/hyperx-cloud-ii-gaming-earbuds-red-front-view.jpg";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const Cart = () => {
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
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex items-center gap-x-1 pt-4">
              <p className="text-lg/6 font-bold">รถเข็นของฉัน</p>
              <p className="text-sm text-zinc-600/80">(สินค้า 0 ชิ้น)</p>
            </div>
            <div className="flex items-center bg-zinc-300/15 border-y border-zinc-300 text-sm font-bold">
              <div className="w-2/12">
                <Checkbox />
              </div>
              <div className="w-5/12">
                <p>สินค้า</p>
              </div>
              <div className="w-3/12">
                <p>ราคาต่อชิ้น (บาท)</p>
              </div>
              <div className="w-2/12">
                <p>จำนวน</p>
              </div>
            </div>
            <div className="flex items-center py-2 border-b border-zinc-200/50">
              <div>
                <Checkbox />
              </div>
              <div className="flex items-center w-6/12">
                <div className="max-w-20 max-h-20">
                  <img src={hyperXProduct} alt="hyperx cloud earbuds" />
                </div>
                <div>
                  <Link to={"/detail"}>
                    <p className="text-sm">หูฟัง HyperX Cloud Earbuds II</p>
                  </Link>
                  <p className="text-xs text-gray-600">Color : Red</p>
                </div>
              </div>
              <div className="w-3/12 pl-4">
                <div className="flex items-center gap-x-1">
                  <div className="h-6 text-sm text-white rounded-lg bg-red-600">
                    <p className="px-1 py-[2px]">-13%</p>
                  </div>
                  <p className="text-xl font-bold">฿1,290</p>
                </div>
                <p className="text-sm text-zinc-400/80 line-through">฿1,490</p>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="flex border border-slate-300/70 rounded-lg overflow-hidden">
                  <button
                    className="p-1 disabled:text-gray-200"
                    onClick={minusQuantity}
                    disabled={inputQuantity <= 1}
                  >
                    <RemoveRoundedIcon sx={{ fontSize: "20px" }} />
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
                    <AddRoundedIcon sx={{ fontSize: "20px" }} />
                  </button>
                </div>
                <IconButton>
                  <DeleteOutlineRoundedIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <p className="text-xs text-gray-500">สำหรับลูกค้าองค์กร</p>
              <p className="text-xs text-blue-600 font-bold">ขอใบเสนอราคา</p>
            </div>
          </div>
          <div className="w-80 min-w-80 ml-10">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-4 px-4 py-4 rounded-lg border border-gray-300">
                <div className="flex items-center gap-x-3">
                  <DiscountOutlinedIcon className="text-gray-600" />
                  <span className="text-sm font-semibold">ใช้คูปองส่วนลด</span>
                </div>
                <button className="w-full py-2 rounded-lg border border-blue-600 text-sm font-bold text-blue-600">
                  ใช้คูปองส่วนลด
                </button>
              </div>
              <div className="flex flex-col gap-y-2 py-4 rounded-lg border border-gray-300">
                <div className="flex flex-col gap-y-2 px-4">
                  <div className="flex items-center gap-x-3">
                    <ReceiptLongOutlinedIcon className="text-gray-600" />
                    <span className="text-sm font-semibold">
                      สรุปการสั่งซื้อ
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>
                      ยอดรวมสินค้า{" "}
                      <span className="text-xs text-gray-500">(0 ชิ้น)</span>
                    </span>
                    <p className="font-semibold">฿0</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p>ส่วนลดคูปอง</p>
                    <p className="font-semibold">฿0</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 text-sm">
                    <p>ค่าจัดส่ง</p>
                    <button>
                      <InfoOutlinedIcon
                        className="text-blue-600"
                        sx={{ fontSize: "16px" }}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2 bg-zinc-300/30">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold">ยอดสุทธิ</p>
                    <p className="text-xs">(รวมภาษีมูลค่าเพิ่ม)</p>
                  </div>
                  <p className="text-xl font-bold text-blue-600">฿0</p>
                </div>
                <div className="px-4">
                  <Link to={"/checkout"}>
                    <button className="w-full py-2 rounded-lg border bg-blue-600 text-sm font-bold text-white">
                      ทำการสั่งซื้อ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
