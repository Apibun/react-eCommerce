import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import gamingImg from "./assets/gaming.png";
import gamimgIcon from "./assets/gaming-icon.png";
import categoryItems from "./data/category.json";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import bestSeller from "./assets/best-seller.png";
import bestSellerProductItems from "./data/bestSellerProduct.json";
import top3BadgeProduct from "./assets/top3-rank-badge.png";
import badgeProduct from "./assets/other-rank-badge.png";
import brandLogoItems from "./data/brandLogo.json";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import fastDeliveryLogo from "./assets/sameday.png";
import freeShipping from "./assets/free-shipping.png";
import productItems from "./data/product.json";
import "./App.css";

const App = () => {
  const [progressCategory, setProgressCategory] = useState(0);
  const scrollCategory = useRef(null);
  const [progressProduct, setProgressProduct] = useState(0);
  const scrollProduct = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    let maxProgressCategory =
      scrollCategory.current.scrollWidth - scrollCategory.current.clientWidth;
    const handleScrollCategory = () => {
      if (scrollCategory.current) {
        setProgressCategory(
          (scrollCategory.current.scrollLeft / maxProgressCategory).toFixed(6) *
            100
        );
      }
    };

    let maxProgressProduct =
      scrollProduct.current.scrollWidth - scrollProduct.current.clientWidth;
    const handleScrollProduct = () => {
      if (scrollProduct.current) {
        setProgressProduct(
          (scrollProduct.current.scrollLeft / maxProgressProduct).toFixed(6) *
            100
        );
      }
    };

    if (scrollCategory.current) {
      scrollCategory.current.addEventListener("scroll", handleScrollCategory);
    }

    if (scrollProduct.current) {
      scrollProduct.current.addEventListener("scroll", handleScrollProduct);
    }

    return () => {
      if (scrollCategory.current) {
        scrollCategory.current.removeEventListener(
          "scroll",
          handleScrollCategory
        );
      }

      if (scrollProduct.current) {
        scrollProduct.current.removeEventListener(
          "scroll",
          handleScrollProduct
        );
      }
    };
  }, []);

  const plusProgressCategoryBar = () => {
    scrollCategory.current.scrollLeft += 200;
  };

  const minusProgressCategoryBar = () => {
    scrollCategory.current.scrollLeft -= 200;
  };

  const plusProgressProductBar = () => {
    scrollProduct.current.scrollLeft += 200;
  };

  const minusProgressProductBar = () => {
    scrollProduct.current.scrollLeft -= 200;
  };

  const handleMouseOverImage = (index) => {
    setHoveredImage(index);
  };

  const handleMouseOutImage = () => {
    setHoveredImage(null);
  };

  const handleMouseOverProduct = (index) => {
    setHoveredProduct(index);
  };

  const handleMouseOutProduct = () => {
    setHoveredProduct(null);
  };

  return (
    <>
      <Header />
      <div>
        <div
          className="container mx-auto"
          style={{ height: "180px", minHeight: "180px" }}
        >
          <div
            className="flex flex-col rounded-xl"
            style={{
              backgroundImage: `linear-gradient(89.96deg, #161C24 0.03%, rgba(22, 28, 36, 0) 58.44%), url(${gamingImg})`,
              backgroundSize: "cover",
              height: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mt-2 ml-4 w-full">
              <div className="mt-2 mb-5">
                <nav className="text-white">
                  <ol className="flex items-center">
                    <li>
                      <a href="#" className="text-sm">
                        หน้าแรก
                      </a>
                    </li>
                    <li>
                      <div
                        className="w-1 h-1 rounded-full bg-white"
                        style={{ margin: "0 14px" }}
                      ></div>
                    </li>
                    <li>
                      <a href="#" className="text-sm">
                        เกมมิ่ง
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="flex" style={{ columnGap: "16px" }}>
              <div className="gaming-icon-container flex justify-center items-center bg-blue-600 rounded-r-xl">
                <img src={gamimgIcon} className="gaming-icon" alt="Gaming" />
              </div>
              <div style={{ maxWidth: "640px" }}>
                <div
                  className="font-bold text-3xl text-white"
                  style={{ lineHeight: "48px" }}
                >
                  เกมมิ่ง
                </div>
                <p
                  className="text-white text-sm"
                  style={{ lineHeight: "22px" }}
                >
                  เกมมิ่งเกียร์ Gaming Gear แบรนด์ดังชั้นนำ เอาใจเกมเมอร์
                  ทั้งเมาส์เกมมิ่ง หูฟังเกมมิ่ง ลำโพงเกมมิ่ง คีย์บอร์ดเกมมิ่ง
                  โต๊ะและเก้าอี้เกมมิ่ง ดีไซน์สุดเท่ เอาใจทั้งสายเกมคอม PC
                  อุปกรณ์สตรีมเกม และเกมคอนโซล
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <div className="relative">
          <div
            ref={scrollCategory}
            className="flex gap-x-2 overflow-auto scroll-smooth"
          >
            {categoryItems.map((item) => (
              <a key={item.id}>
                <div className="gaimg-category flex flex-col justify-end relative">
                  <div className="gaming-category-img absolute">
                    <img
                      src={`/src/assets/${item.image}`}
                      alt="gaming headphone"
                    />
                  </div>
                  <div className="gaimg-category-text-container flex justify-end items-center px-3">
                    <div className="gaming-category-text">
                      <p
                        className="text-sm font-semibold text-center overflow-hidden"
                        style={{ lineHeight: "22px" }}
                      >
                        {item.categoryName}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {progressCategory > 0 ? (
            <button
              className="btn-left-category flex justify-center items-center absolute top-0 bottom-0 mx-0 my-auto w-10 h-10 p-2 bg-white rounded-full"
              onClick={minusProgressCategoryBar}
            >
              <ChevronLeftRoundedIcon />
            </button>
          ) : null}
          <button
            className="btn-right-category flex justify-center items-center absolute top-0 bottom-0 mx-0 my-auto w-10 h-10 p-2 bg-white rounded-full"
            onClick={plusProgressCategoryBar}
          >
            <ChevronRightRoundedIcon />
          </button>
          <div className="scroll-progress-container mx-auto mb-4">
            <div
              className="scroll-progress relative rounded-3xl mt-4"
              style={{ backgroundColor: "rgb(244, 246, 248)" }}
            >
              <div
                className="scroll w-full"
                style={{ transform: `translateX(${progressCategory}%)` }}
              >
                <div
                  className="h-1 rounded"
                  style={{
                    background: "rgb(15, 99, 233)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-6">
        <div className="flex flex-col">
          <div className="flex justify-center mb-2 w-full">
            <img src={bestSeller} alt="best seller" />
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="flex">
                <button className="btn-tab flex items-center text-sm font-semibold">
                  <span>หูฟังเกมมิ่ง & ลำโพงเกมมิ่ง</span>
                </button>
                <button className="btn-tab flex items-center text-sm font-semibold">
                  <span>คีย์บอร์ดเกมมิ่ง</span>
                </button>
                <button className="btn-tab flex items-center text-sm font-semibold">
                  <span>เมาส์เกมมิ่ง</span>
                </button>
                <button className="btn-tab flex items-center text-sm font-semibold">
                  <span>โต๊ะ & เก้าอี้เกมมิ่ง</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="container mx-auto text-center mt-2 mb-4"
            style={{ maxWidth: "800px" }}
          >
            <p className="text-sm">
              เมาส์เกมมิ่งขายดี เมาส์ Logitech G Pro ตัวดัง และเมาส์ Razer
              DeathAdder เมาส์ดีไซน์เท่ ตลอดจนหูฟังเกมมิ่ง HyperX Cloud III
              ตัดเสียงรบกวนได้กริบ แต่เสียงเกมคมชัดกระหึ่ม
              และคีย์บอร์ดเกมมิ่เกมมิ่ง Mechanical ยอดนิยม
            </p>
          </div>
        </div>
        <div className="relative">
          <div ref={scrollProduct} className="flex overflow-auto scroll-smooth">
            {bestSellerProductItems.map((item) => (
              <div
                className="mr-4 shrink-0"
                style={{ width: "200px" }}
                key={item.id}
              >
                <a href="/">
                  <div className="flex flex-col gap-y-6">
                    <div
                      className="relative"
                      onMouseOver={() => handleMouseOverImage(item.id)}
                      onMouseOut={handleMouseOutImage}
                    >
                      <div className="product-image-container">
                        <div>
                          <img
                            src={`/src/assets/${item.image}`}
                            alt="hyperx cloud earbud"
                            style={{
                              opacity: hoveredImage === item.id ? 0 : 1,
                            }}
                          />
                          <img
                            src={`/src/assets/${item.imageHover}`}
                            className="product-image-hover absolute top-0"
                            alt="hyperx cloud earbud"
                            style={{
                              opacity: hoveredImage === item.id ? 1 : 0,
                            }}
                          />
                        </div>
                      </div>
                      <div className="badge-product absolute left-0 right-0">
                        {item.numProduct <= 3 ? (
                          <div className="top3-badge-product mx-auto">
                            <img
                              src={top3BadgeProduct}
                              style={{ width: "100%" }}
                              alt="badge product"
                            />
                            <span className="absolute mx-auto w-fit inset-0 text-2xl font-bold text-white">
                              {item.numProduct}
                            </span>
                          </div>
                        ) : (
                          <div className="other-badge-product mx-auto">
                            <img
                              src={badgeProduct}
                              style={{ width: "100%" }}
                              alt="badge product"
                            />
                            <span className="absolute mx-auto w-fit inset-0 text-2xl font-bold text-white">
                              {item.numProduct}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="text-sm h-12 text-center">
                        {item.productName}
                      </p>
                      <div className="flex justify-center items-center gap-x-2 px-4">
                        <div className="flex justify-center items-center text-white h-6 rounded-lg bg-red-600">
                          {item.discount ? (
                            <span
                              className="text-xs font-bold"
                              style={{ padding: "0px 2px" }}
                            >
                              {item.discount}
                            </span>
                          ) : null}
                        </div>
                        <span className="font-semibold">
                          {item.displayPrice}
                        </span>
                        <div className="flex items-center">
                          <span
                            className="text-xs font-normal line-through"
                            style={{ color: "rgb(145, 158, 171)" }}
                          >
                            {item.fullPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {progressProduct > 0 ? (
            <button
              className="btn-left-product flex justify-center items-center absolute -left-4 w-10 h-10 p-2 bg-white rounded-full"
              onClick={minusProgressProductBar}
            >
              <ChevronLeftRoundedIcon />
            </button>
          ) : null}
          <button
            className="btn-right-product flex justify-center items-center absolute -right-4 w-10 h-10 p-2 bg-white rounded-full"
            onClick={plusProgressProductBar}
          >
            <ChevronRightRoundedIcon />
          </button>
          <div className="scroll-progress-container mx-auto mb-4">
            <div
              className="scroll-progress relative rounded-3xl mt-4"
              style={{ backgroundColor: "rgb(244, 246, 248)" }}
            >
              <div
                className="scroll w-full"
                style={{ transform: `translateX(${progressProduct}%)` }}
              >
                <div
                  className="h-1 rounded"
                  style={{
                    background: "rgb(15, 99, 233)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="flex mb-2">
            <p className="m-0 text-2xl font-bold">แบรนด์ฮิต</p>
          </div>
          <div className="relative">
            <div className="flex justify-center">
              {brandLogoItems.map((item) => (
                <div className="flex mr-4" key={item.id}>
                  <a href="/">
                    <div className="brand-logo flex">
                      <img src={`/src/assets/${item.imgLogo}`} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex mb-6">
          <div className="flex items-center">
            <p className="m-0 mr-1">สินค้าทั้งหมดใน</p>
            <p className="m-0 font-bold">“เกมมิ่ง”</p>
            <p className="m-0 ml-2 pt-1 text-xs" style={{ color: "#616161" }}>
              (2016 รายการ)
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div
              className="flex items-center justify-center"
              style={{
                height: "36px",
              }}
            >
              <button className="filter-product flex items-center rounded-lg px-4 py-2">
                <div></div>
                <p className="ml-2 text-sm font-bold">ตัวกรองทั้งหมด</p>
              </button>
              <button className="filter-product flex items-center rounded-lg px-3 py-2 ml-2 text-sm font-bold">
                ช่วงราคา
                <ExpandMoreRoundedIcon />
              </button>
              <button className="filter-product flex items-center rounded-lg px-3 py-2 ml-2 text-sm font-bold">
                แบรนด์
                <ExpandMoreRoundedIcon />
              </button>
              <button className="filter-product flex items-center rounded-lg px-3 py-2 ml-2 text-sm font-bold">
                มีสาย/ไร้สาย
                <ExpandMoreRoundedIcon />
              </button>
              <button className="filter-product flex items-center rounded-lg px-3 py-2 ml-2 text-sm font-bold">
                ไฟRGB
                <ExpandMoreRoundedIcon />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button className="filter-product flex items-center rounded-lg px-4 py-2 text-sm font-bold">
              สินค้าแนะนำ
              <ExpandMoreRoundedIcon />
            </button>
          </div>
        </div>
        <hr
          className="w-full border-0 border-b-2 mb-6"
          style={{ borderColor: "rgba(145, 158, 171, 0.24)" }}
        />
        <div className="flex flex-wrap w-full ml-4 gap-4">
          {productItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col flex-grow-0 flex-shrink-0 bg-white rounded-xl pb-3 box-border"
              onMouseOver={() => handleMouseOverProduct(item.id)}
              onMouseOut={handleMouseOutProduct}
              style={{
                boxShadow:
                  hoveredProduct === item.id
                    ? "0px 12px 24px -4px rgba(15, 99, 233, 0.3)"
                    : "0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
                color: "rgba(22, 28, 36, 1)",
                maxWidth: "240px",
                transition: "box-shadow 0.15s",
              }}
            >
              <a href="/detail">
                <div className="relative">
                  <div>
                    <img
                      src={`/src/assets/${item.image}`}
                      alt="product image"
                      style={{
                        opacity: hoveredProduct === item.id ? 0 : 1,
                      }}
                    />
                    <img
                      src={`/src/assets/${item.imageHover}`}
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
                    <img
                      src={`/src/assets/${item.brandLogo}`}
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div className="mt-1 px-3">
                  <p className="text-sm mb-1 h-11">{item.productName}</p>
                  <p className="font-semibold">฿1,490</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center relative px-1 h-4 rounded bg-red-100">
                      <p
                        className="custom-coupon px-0.5 font-bold"
                        style={{ fontSize: "10px", color: "rgb(227, 31, 38)" }}
                      >
                        {item.discountCoupon}
                      </p>
                    </div>
                    {item.fastDelivery ? (
                      <div className="flex items-center px-1 ml-2 h-4 rounded bg-orange-50">
                        <div className="w-5 h-5">
                          <img
                            src={fastDeliveryLogo}
                            alt="fast delivery logo"
                          />
                        </div>
                        <p
                          className="font-bold"
                          style={{
                            fontSize: "10px",
                            color: "rgb(228, 179, 99)",
                          }}
                        >
                          ส่งทันใจ
                        </p>
                      </div>
                    ) : null}
                    {item.freeShipping && (
                      <div className="flex items-center px-1 ml-2 h-4 rounded bg-sky-50">
                        <div className="w-5 h-5">
                          <img src={freeShipping} alt="free shipping logo" />
                        </div>
                        <p
                          className="font-bold"
                          style={{
                            fontSize: "10px",
                            color: "rgb(144, 194, 231)",
                          }}
                        >
                          ส่งฟรี
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
