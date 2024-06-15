import Header from "../components/Header";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import deliveryIcon from "../assets/images/delivery.png";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center pl-2 py-4">
              <div className="flex gap-x-2">
                <PlaceOutlinedIcon className="text-gray-600" />
                <p className="text-lg/7 font-bold">ที่อยู่จัดส่ง</p>
              </div>
              <a
                href="#"
                className="text-sm font-bold text-blue-600 px-3 py-2 hover:bg-blue-200/15"
              >
                จัดการที่อยู่
              </a>
            </div>
            <div className="border border-gray-300 rounded-lg">
              <div className="px-4 pt-4 min-h-32">
                <div className="flex justify-between">
                  <p>ที่อยู่จัดส่งสินค้า</p>
                  <div>
                    <button className="h-10 px-4 py-2 text-sm font-bold text-blue-600 rounded-lg hover:bg-blue-200/15">
                      เปลี่ยน
                    </button>
                    <button className="h-10 px-4 py-2 text-sm font-bold text-blue-600 rounded-lg hover:bg-blue-200/15">
                      เพิ่มที่อยู่
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <Checkbox className="invisible" />
                  <p className="text-base/5 font-bold w-[183px]">
                    อภิบุญ สมศรี 0627852594
                  </p>
                  <p className="text-sm/5">
                    19/249 บึงคำพร้อย ลำลูกกา ปทุมธานี 12150
                    <span className="font-bold"> [ ค่าเริ่มต้น ]</span>
                  </p>
                </div>
              </div>
              <Divider />
              <div className="flex items-center pl-2">
                <Checkbox />
                <p className="text-base/5">ขอใบเสร็จรับเงิน/ใบกำกับภาษี</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-x-2 pt-6 pb-4 pl-2">
                <LocalShippingOutlinedIcon className="text-gray-600" />
                <p className="text-lg font-bold">รูปแบบการจัดส่ง</p>
              </div>
              <div className="flex">
                <div className="w-80 px-4 py-4 rounded-lg border border-blue-500 bg-blue-300/15">
                  <div className="flex flex-col gap-y-4 h-28">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-2">
                        <div>
                          <img
                            src={deliveryIcon}
                            alt="delivery icon"
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className="font-semibold">ส่งปกติ</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <p className="text-sm text-gray-600 line-through">
                          ฿29
                        </p>
                        <p className="text-lg font-bold text-blue-600">฿0</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      จัดส่งฟรีเมื่อซื้อสินค้าครบ 199 บาท
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 min-w-80 ml-4 mt-6">
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
                      สรุปคำสั่งซื้อ
                    </span>
                  </div>
                  <div>
                    <a href="#">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs/5 text-gray-600">
                            หูฟัง HyperX Cloud Earbuds II
                          </p>
                          <p className="text-[10px] text-gray-500">Red</p>
                          <p className="text-[10px] text-gray-500">จำนวน : 1</p>
                        </div>
                        <div>
                          <div className="flex gap-x-1">
                            <div className="h-6 text-xs/5 font-bold text-white rounded-lg bg-red-600">
                              <p className="p-[2px]">-13%</p>
                            </div>
                            <p className="font-semibold">฿1290</p>
                          </div>
                          <p className="text-xs text-gray-400 text-right line-through">
                            ฿1,490
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>
                      ยอดรวมสินค้า{" "}
                      <span className="text-xs text-gray-500">(1 ชิ้น)</span>
                    </span>
                    <p className="font-semibold">฿1,290</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p>ส่วนลดคูปอง</p>
                    <p className="font-semibold">฿0</p>
                  </div>
                  <div className="flex items-center gap-x-1.5 text-sm">
                    <p>ค่าจัดส่ง</p>
                    <button>
                      <InfoOutlinedIcon
                        className="text-xs text-blue-600"
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
                  <p className="text-xl font-bold text-blue-600">฿1,290</p>
                </div>
                <div className="px-4">
                  <button className="w-full h-10 py-2 rounded-lg border bg-blue-600 text-sm font-bold text-white">
                    ชำระเงิน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
