import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// imgs
import comparison2 from "../assets/imgs/comparison2.png";
import like from "../assets/imgs/like.png";
import photo15 from "../assets/imgs/photo15.png";
import cross from "../assets/imgs/cross.png";

const Basket = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [openModal, setOpenModal] = useState(false);

  const deleteList = () => {
    const list = document.getElementById("list");

    list.style.display = "none";
  };

  const deleteList2 = () => {
    const list2 = document.getElementById("list2");

    list2.style.display = "none";
  };

  const deleteList3 = () => {
    const list3 = document.getElementById("list3");

    list3.style.display = "none";
  };

  return (
    <div>
      <div className="container mt-5" style={{ display: "flex" }}>
        {location.pathname === "/" ? null : (
          <Link to="/" className="text-[#7A7687] max-sm:hidden">
            Главная
          </Link>
        )}
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <div className="max-sm:hidden" key={index}>
              {last ? (
                <span key={to}>&nbsp;&gt; {value}</span>
              ) : (
                <span key={to}>
                  &nbsp;&gt; <Link to={to}>{value}</Link>
                </span>
              )}
            </div>
          );
        })}
      </div>

      <main className="flex justify-center gap-2.5 mt-5 mb-[150px] max-md:block">
        <section>
          <div>
            <div className="container">
              <div
                id="list"
                className="w-[980px] max-md:w-[482px] max-sm:w-[345px] max-sm:mx-auto px-3 border rounded-[10px] flex items-start gap-[25px] max-md:gap-5 py-5"
              >
                <div className="w-[320px] max-sm:w-[151px]">
                  <button className="bg-[#E1EFE6] rounded-[50px] py-1 px-2.5 border-1 border-[#088269] text-[#088269] text-sm font-semibold leading-5">
                    Новинка
                  </button>
                  <img
                    className="mx-auto max-md:w-[124px] max-sm:w-[100px]"
                    src={photo15}
                    alt="photo15"
                  />
                </div>
                <div className="flex gap-[205px] items-start max-md:block">
                  <div>
                    <h3 className="text-lg font-semibold leading-6 max-md:text-base max-md:leading-5">
                      Анализатор мочи <br /> MIND UA-66
                    </h3>
                    <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
                      Артикул: 213134 <br /> В наличии
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold leading-6 max-md:text-base max-md:leading-5">
                      300 000 руб.
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-end items-center gap-2.5">
                    <img src={comparison2} alt="comparison2" />
                    <img src={like} alt="like" />
                    <img
                      className="cursor-pointer"
                      onClick={deleteList}
                      src={cross}
                      alt="cross"
                    />
                  </div>
                </div>
              </div>
              <div
                id="list2"
                className="w-[980px] max-md:w-[482px] max-sm:w-[345px] max-sm:mx-auto px-3 border rounded-[10px] flex items-start gap-[25px] max-md:gap-5 py-5 mt-2.5"
              >
                <div className="w-[320px] max-sm:w-[151px]">
                  <button className="bg-[#E1EFE6] rounded-[50px] py-1 px-2.5 border-1 border-[#088269] text-[#088269] text-sm font-semibold leading-5">
                    Новинка
                  </button>
                  <img
                    className="mx-auto max-md:w-[124px] max-sm:w-[100px]"
                    src={photo15}
                    alt="photo15"
                  />
                </div>
                <div className="flex gap-[205px] items-start max-md:block">
                  <div>
                    <h3 className="text-lg font-semibold leading-6 max-md:text-base max-md:leading-5">
                      Анализатор мочи <br /> MIND UA-66
                    </h3>
                    <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
                      Артикул: 213134 <br /> В наличии
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold leading-6 max-md:text-base max-md:leading-5">
                      300 000 руб.
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-end items-center gap-2.5">
                    <img src={comparison2} alt="comparison2" />
                    <img src={like} alt="like" />
                    <img
                      className="cursor-pointer"
                      onClick={deleteList2}
                      src={cross}
                      alt="cross"
                    />
                  </div>
                </div>
              </div>
              <div
                id="list3"
                className="w-[980px] max-md:w-[482px] max-sm:w-[345px] max-sm:mx-auto px-3 border rounded-[10px] flex items-start gap-[25px] max-md:gap-5 py-5 mt-2.5"
              >
                <div className="w-[320px] max-sm:w-[151px]">
                  <button className="bg-[#E1EFE6] rounded-[50px] py-1 px-2.5 border-1 border-[#088269] text-[#088269] text-sm font-semibold leading-5">
                    Новинка
                  </button>
                  <img
                    className="mx-auto max-md:w-[124px] max-sm:w-[100px]"
                    src={photo15}
                    alt="photo15"
                  />
                </div>
                <div className="flex gap-[205px] items-start max-md:block">
                  <div>
                    <h3 className="text-lg font-semibold leading-6 max-md:text-base max-md:leading-5">
                      Анализатор мочи <br /> MIND UA-66
                    </h3>
                    <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
                      Артикул: 213134 <br /> В наличии
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold leading-6 max-md:text-base max-md:leading-5">
                      300 000 руб.
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-end items-center gap-2.5">
                    <img
                      className="w-5 h-5"
                      src={comparison2}
                      alt="comparison2"
                    />
                    <img className="w-5 h-5" src={like} alt="like" />
                    <img
                      className="cursor-pointer w-5 h-5"
                      onClick={deleteList3}
                      src={cross}
                      alt="cross"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="border rounded-[10px] w-[320px] max-md:w-[236px] h-[237px] max-md:h-[212px] py-[15px] max-sm:w-full max-sm:mt-2.5">
          <div className="container">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold leading-5">Итого</h3>
              <h4 className="text-sm font-semibold leading-5">900.000 руб.</h4>
            </div>
            <hr className="mt-[15px]" />
            <div className="flex justify-between items-center mt-[15px]">
              <h3 className="max-md:text-[10px] leading-3">Товары (3 шт)</h3>
              <h4 className="max-md:text-[10px] leading-3">900.000 руб.</h4>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h3 className="max-md:text-[10px] leading-3">Скидка</h3>
              <h4 className="max-md:text-[10px] leading-3">0 руб.</h4>
            </div>
            <button className="w-full mt-3 rounded-[50px] py-[11px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 max-md:text-[10px] max-md:leading-3 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs ">
              Оформить заказ
            </button>
            <button className="w-full mt-2.5 rounded-[50px] py-[11px] border-1 text-sm font-semibold leading-5 max-md:text-[10px] max-md:leading-3  max-md:py-2 max-md:px-5 max-md:text-xs">
              Задать вопрос
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Basket;
