import { useState } from "react";
import top3BadgeProduct from "../assets/images/top3-rank-badge.png";
import badgeProduct from "../assets/images/other-rank-badge.png";
import { Link } from "react-router-dom";

const BestSellerItem = ({ item }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseOverImage = (index) => {
    setHoveredImage(index);
  };

  const handleMouseOutImage = () => {
    setHoveredImage(null);
  };

  return (
    <>
      <div className="shrink-0 w-[200px] mr-4">
        <Link to={"/"}>
          <div className="flex flex-col gap-y-6">
            <div
              className="relative"
              onMouseOver={() => handleMouseOverImage(item.id)}
              onMouseOut={handleMouseOutImage}
            >
              <div className="product-image-container">
                <div>
                  <img
                    src={`${item.image}`}
                    className={
                      hoveredImage === item.id ? "opacity-0" : "opacity-100"
                    }
                    alt="hyperx cloud earbud"
                  />
                  <img
                    src={`${item.imageHover}`}
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
                      className="w-full"
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
                      className="w-full"
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
              <p className="text-sm h-12 text-center">{item.productName}</p>
              <div className="flex justify-center items-center gap-x-2 px-4">
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
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BestSellerItem;
