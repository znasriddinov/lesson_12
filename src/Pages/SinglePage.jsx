import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

// imgs
import comparison2 from "../assets/imgs/comparison2.png";
import like from "../assets/imgs/like.png";
import photo15 from "../assets/imgs/photo15.png";
import photo16 from "../assets/imgs/photo16.png";
import photo17 from "../assets/imgs/photo17.png";
import star from "../assets/imgs/star.png";
import emptyStar from "../assets/imgs/empty-star.png";

const SinglePage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

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

      <div className="w-[1312px] h-[484px] mx-auto mt-[20vh] rounded-[10px]">
        <div className="flex gap-[60px] items-center">
          <div className="w-[760px] max-md:w-[236px] h-[424px] rounded-[10px] max-sm:hidden">
            <div className="flex items-center justify-between">
              <button className="bg-[#E1EFE6] rounded-[50px] py-1 px-2.5 border-1 border-[#088269] text-[#088269] text-sm font-semibold leading-5">
                Новинка
              </button>
              <div className="flex items-center gap-2.5">
                <img src={comparison2} alt="comparison2" />
                <img src={like} alt="like" />
              </div>
            </div>
            <img
              className="mx-auto mt-5 max-md:w-[]"
              src={photo16}
              alt="photo15"
            />
          </div>
          <div>
            <h3 className="text-3xl font-medium leading-9">
              Анализатор мочи MIND UA-66
            </h3>
            <div className="flex gap-1 mt-2.5">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={emptyStar} alt="emptyStar" />
            </div>
            <ul className="mt-[15px]">
              <li className="text-xs font-normal leading-4 text-[#7A7687] mb-[5px]">
                Категория: Лабораторное оборудование
              </li>
              <li className="text-xs font-normal leading-4 text-[#7A7687] mb-[5px]">
                Производитель: Lorem
              </li>
              <li className="text-xs font-normal leading-4 text-[#7A7687] mb-[5px]">
                Артикул: 213134
              </li>
              <li className="text-xs font-normal leading-4 text-[#7A7687] mb-[5px]">
                В наличии
              </li>
            </ul>
            <h4 className="text-lg font-semibold leading-6 mt-[15px]">
              300 000 руб.
            </h4>
            <div className="flex items-center gap-2.5 mt-5">
              <button className="border-1 rounded-[50px] py-[11px] px-4 text-sm font-semibold leading-5">
                - 1 +
              </button>
              <button className="border-1 rounded-[50px] py-[11px] px-[30px] text-[#088269] text-sm font-semibold leading-5">
                Задать вопрос
              </button>
              <button className="border-1 rounded-[50px] py-[11px] px-[39px] text-white bg-[#088269] text-sm font-semibold leading-5">
                Добавить в корзину
              </button>
            </div>
            <hr className="mt-[25px]" />
            <h4 className="font-medium leading-5 mt-[13px]">О товаре</h4>
            <p className="text-xs font-medium leading-4 mt-[15px] w-[441px] opacity-[80%]">
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
