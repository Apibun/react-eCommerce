import { useState } from "react";
import fastDeliveryLogo from "../assets/images/sameday.png";
import freeShipping from "../assets/images/free-shipping.png";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseOverProduct = (index) => {
    setHoveredProduct(index);
  };

  const handleMouseOutProduct = () => {
    setHoveredProduct(null);
  };
  return (
    <>
      <div
        className="flex flex-col flex-grow-0 flex-shrink-0 max-w-[240px] bg-white rounded-xl pb-3 box-border"
        onMouseOver={() => handleMouseOverProduct(item.id)}
        onMouseOut={handleMouseOutProduct}
        style={{
          boxShadow:
            hoveredProduct === item.id
              ? "0px 12px 24px -4px rgba(15, 99, 233, 0.3)"
              : "0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
          color: "rgba(22, 28, 36, 1)",
          transition: "box-shadow 0.15s",
        }}
      >
        <Link to={"/detail"}>
          <div className="relative">
            <div>
              <img
                src={`${item.image}`}
                alt="product image"
                className={
                  hoveredProduct === item.id ? "opacity-0" : "opacity-100"
                }
              />
              <img
                src={`${item.imageHover}`}
                className="absolute top-0"
                alt="hyperx cloud earbud"
                style={{
                  opacity: hoveredProduct === item.id ? 1 : 0,
                  transition: "opacity 0.15s ease 0s",
                }}
              />
            </div>
            <div
              className={`${
                hoveredProduct === item.id
                  ? "absolute top-0 w-full h-full bg-gray-800 opacity-20 z-10 rounded-xl"
                  : "hidden"
              }`}
            ></div>
            <div className="absolute top-2 right-2 w-full h-full max-w-10 max-h-10">
              <img src={`${item.brandLogo}`} alt="brand logo" />
            </div>
          </div>
          <div className="mt-1 px-3">
            <p className="text-sm mb-1 h-11">{item.productName}</p>
            <div className="flex items-center gap-x-2">
              <div className="flex justify-center items-center text-white h-6 rounded-lg bg-red-600">
                {item.discount ? (
                  <span className="px-[2px] text-xs font-bold">
                    {item.discount}
                  </span>
                ) : null}
              </div>
              <span className="font-semibold">{item.displayPrice}</span>
              <div className="flex items-center">
                <span className="text-xs text-slate-400 line-through">
                  {item.fullPrice}
                </span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center relative px-1 h-4 rounded bg-red-100">
                <p className="custom-coupon px-0.5 text-[10px] font-bold text-red-600">
                  {item.discountCoupon}
                </p>
              </div>
              {item.fastDelivery ? (
                <div className="flex items-center px-1 ml-2 h-4 rounded bg-orange-50">
                  <div className="w-5 h-5">
                    <img src={fastDeliveryLogo} alt="fast delivery logo" />
                  </div>
                  <p className="text-[10px] font-bold text-amber-400">
                    ส่งทันใจ
                  </p>
                </div>
              ) : null}
              {item.freeShipping && (
                <div className="flex items-center px-1 ml-2 h-4 rounded bg-sky-50">
                  <div className="w-5 h-5">
                    <img src={freeShipping} alt="free shipping logo" />
                  </div>
                  <p className="text-[10px] font-bold text-blue-300">ส่งฟรี</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductItem;
