import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// imgs
import photo22 from "../assets/imgs/photo22.png";
import photo23 from "../assets/imgs/photo23.png";
import photo24 from "../assets/imgs/photo24.png";

const App = () => {
  return (
    <Carousel>
      <div className="grid grid-cols-3">
        <div className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px]">
          <img
            className="mx-auto w-[217px] h-[102px] my-[47px]"
            src={photo22}
            alt="photo22"
          />
          <hr />
          <h3 className="text-lg font-semibold leading-6 mt-4 text-left">
            НМИЦ онкологии им. Н.Н. Блохина
          </h3>
        </div>

        <div className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] max-sm:hidden">
          <img
            className="mx-auto w-[166px] h-[111px] my-[43px]"
            src={photo23}
            alt="photo15"
          />
          <hr />
          <h3 className="text-lg font-semibold leading-6 mt-4 text-left">
            НМИЦ онкологии им. Н.Н. Блохина
          </h3>
        </div>

        <div className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] max-sm:hidden">
          <img
            className="mx-auto w-[197px] h-15 my-[56px]"
            src={photo24}
            alt="photo15"
          />
          <hr />
          <h3 className="text-lg font-semibold leading-6 mt-4 text-left">
            НМИЦ онкологии им. Н.Н. Блохина
          </h3>
        </div>
      </div>

      <div className="max-sm:flex gap-2.5">
        <div className="w-[320px] max-sm:w-[236px] px-3 border py-[15px] rounded-[10px]">
          <img className="mx-auto py-[47px]" src={photo22} alt="photo15" />
          <hr />
          <h3 className="text-lg font-semibold leading-6 mt-4 text-left">
            НМИЦ онкологии им. Н.Н. Блохина
          </h3>
        </div>

        <div className="w-[320px] max-sm:w-[236px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] hidden max-sm:block">
          <img
            className="mx-auto w-[166px] h-[111px] my-[43px]"
            src={photo23}
            alt="photo15"
          />
          <hr />
          <h3 className="text-lg font-semibold leading-6 mt-4 text-left">
            НМИЦ онкологии им. Н.Н. Блохина
          </h3>
        </div>
      </div>
    </Carousel>
  );
};
export default App;
