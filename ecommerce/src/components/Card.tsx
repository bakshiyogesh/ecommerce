import { FC } from "react";
import Data from "../pages/product.json";
const Card: FC = () => {
  console.log(Data);
  return (
    <>
      {Data?.map((element) => {
        return (
          <div className=" relative grid grid-cols-2 ml-3 place-content-center sm:grid-flow-col">
            <div className="border-slate-400 w-1/3 min-h-min pb-2 border mb-2">
              <img className="object-cover" src={element.image} />
            </div>
            <div className="relative grid grid-row-6 pt-4">
              <h5>Price:${element.price}</h5>
              <div>
                <p>Product Details:{element.description.split(";")}</p>
              </div>
              <div className=" grid border border-slate-300 mr-4">
                <h2 className="text-xl">Rating&Reviews</h2>
                <div className="place-content-center">
                  <h2 className="text-lg">{element.rating.rate}★</h2>
                  <h3>{element.rating.count}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Card;
