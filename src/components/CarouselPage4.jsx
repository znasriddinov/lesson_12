import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// imgs
import photo25 from "../assets/imgs/photo25.png";
import photo26 from "../assets/imgs/photo26.png";
import photo27 from "../assets/imgs/photo27.png";

const App = () => {
  return (
    <div>
      <Carousel className="max-md:mt-[30px]">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="w-[320px] max-md:w-[236px] border pb-[15px] rounded-[10px] max-sm:w-[236px]">
            <img className="mx-auto" src={photo25} alt="photo22" />
            <h4 className="text-xs font-normal leading-4 text-left px-3 text-[#7A7687] mt-5">
              07.11.2022
            </h4>
            <h3 className="text-lg px-3 font-semibold leading-6 mt-[5px] text-left">
              Название новости
            </h3>
            <p className="text-base font-medium leading-5 text-left px-3 mt-[15px] text-[#7A7687]">
              Допускает внедрение поэтапного и развития общества.
            </p>
          </div>

          <div className="w-[320px] max-md:w-[236px] border pb-[15px] rounded-[10px] max-sm:hidden max-sm:w-[236px]">
            <img className="mx-auto" src={photo26} alt="photo15" />
            <h4 className="text-xs font-normal leading-4 text-left px-3 text-[#7A7687] mt-5">
              07.11.2022
            </h4>
            <h3 className="text-lg px-3 font-semibold leading-6 mt-[5px] text-left">
              Название новости
            </h3>
            <p className="text-base font-medium leading-5 text-left px-3 mt-[15px] text-[#7A7687]">
              Допускает внедрение поэтапного и развития общества.
            </p>
          </div>

          <div className="w-[320px] max-md:w-[236px] border pb-[15px] rounded-[10px] max-sm:hidden max-sm:w-[236px]">
            <img className="mx-auto" src={photo27} alt="photo15" />
            <h4 className="text-xs font-normal leading-4 text-left px-3 text-[#7A7687] mt-5">
              07.11.2022
            </h4>
            <h3 className="text-lg px-3 font-semibold leading-6 mt-[5px] text-left">
              Название новости
            </h3>
            <p className="text-base font-medium leading-5 text-left px-3 mt-[15px] text-[#7A7687]">
              Допускает внедрение поэтапного и развития общества.
            </p>
          </div>
        </div>

        <div>
          <div className="w-[320px] max-md:w-[236px] border pb-[15px] rounded-[10px]">
            <img
              className="mx-auto w-[320px] h-[320px] rounded-t-[10px]"
              src="https://s3-alpha-sig.figma.com/img/104b/442a/48b2eec91524857712b5efd185d80cf5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjZugZAinrZRd~JiF8HgrBaryHA-zBzttGxADqLMdnKNbw7dwh5~U7KyipiDlEdn9bDMiS77pt2UTDk58H-nGQDMI6Mrbb4TvGrOjDGoY8TXvLH56OyfpnX0oKq-~yd1BRekJANc3QtuTB7qWSyrpnTXvjyLYc-HKUXDoF9g3JtQEvXSHpX8bsQeo0BRY9ejf7cH7KpmNiOD-zwbgx64BioKPv8b4wMIaGLntmLR1bgsPR8vG5iAtr5ONpu9zv8t0FF4LYc3X3egEIPOLD3WJm1Z5X7nqJCjmPjSmxc6yflsSmYk3Vlkl5FazEAriZdgk9AgU8ZfP9vv9MYK-w1u9w__"
              alt="photo15"
            />
            <h4 className="text-xs font-normal leading-4 text-left px-3 text-[#7A7687] mt-5">
              07.11.202
            </h4>
            <h3 className="text-lg font-semibold leading-6 mt-[5px] text-left px-3">
              Название новости
            </h3>
            <p className="text-base font-medium leading-5 text-left px-3 mt-[15px] text-[#7A7687]">
              Допускает внедрение поэтапного и развития общества.
            </p>
          </div>
        </div>
      </Carousel>

      <button className="text-sm font-semibold leading-5 mt-10 text-[#F8F7F3] bg-[#088269] border-1 py-[11px] px-[30px] rounded-[50px] ml-[920px] max-sm:ml-[111px] max-md:ml-[605px] max-md: hover:text-[#088269] hover:border-[#088269] hover:bg-white transition-all duration-500">
        Все новости
      </button>
    </div>
  );
};
export default App;
