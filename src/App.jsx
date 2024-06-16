import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import gamingImg from "./assets/images/gaming.png";
import gamimgIcon from "./assets/images/gaming-icon.png";
import categoryItems from "./data/category.json";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import bestSeller from "./assets/images/best-seller.png";
import bestSellerProductItems from "./data/bestSellerProduct.json";
import BestSellerItem from "./components/BestSellerItem";
import brandLogoItems from "./data/brandLogo.json";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ProductItem from "./components/ProductItem";
import productItems from "./data/product.json";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  const [progressCategory, setProgressCategory] = useState(0);
  const scrollCategory = useRef(null);
  const [progressProduct, setProgressProduct] = useState(0);
  const scrollProduct = useRef(null);

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

  return (
    <>
      <Header />
      <div>
        <div className="container mx-auto h-[180px] min-h-[180px]">
          <div
            className="flex flex-col h-full rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(89.96deg, #161C24 0.03%, rgba(22, 28, 36, 0) 58.44%), url(${gamingImg})`,
            }}
          >
            <div className="mt-2 ml-4 w-full">
              <div className="mt-2 mb-5">
                <nav className="text-white">
                  <ol className="flex items-center">
                    <li>
                      <Link to={"/"}>
                        <p className="text-sm">หน้าแรก</p>
                      </Link>
                    </li>
                    <li>
                      <div className="w-1 h-1 mx-[14px] rounded-full bg-white"></div>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <p className="text-sm">เกมมิ่ง</p>
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="gaming-icon-container flex justify-center items-center bg-blue-600 rounded-r-xl">
                <img src={gamimgIcon} className="gaming-icon" alt="Gaming" />
              </div>
              <div className="max-w-[640px]">
                <div className="font-bold text-3xl leading-[48px] text-white">
                  เกมมิ่ง
                </div>
                <p className="text-white text-sm leading-[22px]">
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
              <Link to={"/"} key={item.id}>
                <div className="gaimg-category flex flex-col justify-end relative">
                  <div className="gaming-category-img absolute">
                    <img
                      src={`/src/assets/images/${item.image}`}
                      alt="gaming headphone"
                    />
                  </div>
                  <div className="gaimg-category-text-container flex justify-end items-center px-3">
                    <div className="gaming-category-text">
                      <p className="text-sm font-semibold leading-[22px] text-center overflow-hidden">
                        {item.categoryName}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
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
            <div className="scroll-progress relative rounded-3xl mt-4 bg-gray-100">
              <div
                className="scroll w-full"
                style={{ transform: `translateX(${progressCategory}%)` }}
              >
                <div className="h-1 rounded bg-blue-600"></div>
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
          <div className="container mx-auto mt-2 mb-4 max-w-[800px] text-center">
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
              <BestSellerItem item={item} key={item.id} />
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
            <div className="scroll-progress relative rounded-3xl mt-4 bg-gray-100">
              <div
                className="scroll w-full"
                style={{ transform: `translateX(${progressProduct}%)` }}
              >
                <div className="h-1 rounded bg-blue-600"></div>
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
                  <Link to={"/"}>
                    <div className="brand-logo flex">
                      <img src={`/src/assets/images/${item.imgLogo}`} />
                    </div>
                  </Link>
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
            <p className="m-0 ml-2 pt-1 text-xs text-zinc-600">(2016 รายการ)</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-9">
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
        <hr className="w-full border-0 border-b-[1px] border-gray-200 mb-6" />
        <div className="flex flex-wrap w-full ml-4 gap-4">
          {productItems.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
