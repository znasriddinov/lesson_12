import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

// imgs
import rightMin from "../assets/imgs/right-min.png";
import photo2 from "../assets/imgs/photo2.png";
import photo30 from "../assets/imgs/photo30.png";
import photo31 from "../assets/imgs/photo31.png";
import photo32 from "../assets/imgs/photo32.png";
import photo33 from "../assets/imgs/photo33.png";
import photo34 from "../assets/imgs/photo34.png";
import photo35 from "../assets/imgs/photo35.png";
import photo36 from "../assets/imgs/photo36.png";
import photo37 from "../assets/imgs/photo37.png";
import photo38 from "../assets/imgs/photo38.png";
import photo8 from "../assets/imgs/photo8.png";
import photo9 from "../assets/imgs/photo9.png";
import photo10 from "../assets/imgs/photo10.png";
import left from "../assets/imgs/left.png";
import right from "../assets/imgs/right.png";
import photo11 from "../assets/imgs/photo11.png";
import photo12 from "../assets/imgs/photo12.png";
import photo13 from "../assets/imgs/photo13.png";
import photo14 from "../assets/imgs/photo14.png";
import cross from "../assets/imgs/cross.png";
import arrow from "../assets/imgs/arrow.png";
import photo28 from "../assets/imgs/photo28.png";
import photo29 from "../assets/imgs/photo29.png";
import photo28clone from "../assets/imgs/photo28-2.png";
import map from "../assets/imgs/map.png";

// Components
import CarouselPage from "../components/CarouselPage";
import CarouselPage2 from "../components/CarouselPage2";
import MarqueePage from "../components/MarqueePage";
import CarouselPage3 from "../components/CarouselPage3";
import CarouselPage4 from "../components/CarouselPage4";
import Dropdown1 from "../components/Dropdown1";

const Catalog = ({ isOpen, closeModal }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [openModal, setOpenModal] = useState(false);

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

      <main>
        <div className="px-3 mt-[25px] hidden max-md:flex items-center justify-between max-sm:hidden">
          <h2>Популярные категории</h2>

          <select className="w-[236px] px-[15px]">
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Реанимация
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Хирургия
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Офтальмология
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Лабораторная диагностика
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Акушерство и Гинекология
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Гистология
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Косметология
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Оториноларингология
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Рентгенология и томография
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Стерилизация
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Физиотерапия и реабилитация
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Функциональная диагностика
              <img src={rightMin} alt="rightMin" />
            </option>
            <option
              value=""
              className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer"
            >
              Эндоскопия
              <img src={rightMin} alt="rightMin" />
            </option>
          </select>
        </div>

        <div className="flex justify-between container mt-5">
          <aside className="w-[320px] border rounded-[10px] px-5 py-[16px] h-[635px] max-md:hidden">
            <h3 className="font-medium leading-5 mb-[15px]">Направления</h3>
            <hr />
            <ul className="mt-5">
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Реанимация
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Хирургия
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Офтальмология
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Лабораторная диагностика
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Акушерство и Гинекология
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Гистология
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Косметология
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Оториноларингология
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Рентгенология и томография
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Стерилизация
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Физиотерапия и реабилитация
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Функциональная диагностика
                <img src={rightMin} alt="rightMin" />
              </li>
              <li className="text-sm font-normal leading-5 mb-[13px] flex items-center justify-between cursor-pointer">
                Эндоскопия
                <img src={rightMin} alt="rightMin" />
              </li>
            </ul>
          </aside>

          <div className="container grid grid-cols-3 grid-rows-2 gap-2.5 max-md:pl-0 max-sm:grid-cols-2">
            <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5">
              <img
                className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[78px]"
                src={photo30}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                Ветеринарное оборудование
              </h4>
            </div>
            <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5">
              <img
                className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[89px]"
                src={photo31}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                Анестезиология
              </h4>
            </div>
            <div className="w-[320px] h-[618px] max-sm:h-[318px] max-md:w-[236px] max-sm:w-[168px] border rounded-[10px] mb-2.5 max-sm:mt-[-86px]">
              <img
                className="mx-auto max-sm:w-[245px] max-sm:h-[273px]"
                src={photo2}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                Хирургические инструменты
              </h4>
            </div>
            <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5 mt-[-324px] max-sm:mt-[-86px]">
              <img
                className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[82px]"
                src={photo32}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                Физиотерапевтическое оборудование
              </h4>
            </div>
            <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5 mt-[-324px] max-sm:mt-[-176px] max-sm:ml-[196px]">
              <img
                className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[87px]"
                src={photo33}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3 w-[248px] max-sm:w-full">
                Стоматологическое оборудование
              </h4>
            </div>
            <div className="flex gap-2.5 max-sm:block">
              <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5 ml-[-376px] max-md:ml-[-236px] max-sm:ml-0">
                <img
                  className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[97px]"
                  src={photo35}
                  alt=""
                />
                <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                  Оборудование для медицинской метрологии
                </h4>
              </div>
              <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5 ml-[46px] max-md:ml-0">
                <img
                  className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[122px]"
                  src={photo36}
                  alt=""
                />
                <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                  Оборудование для мониторинга пациента
                </h4>
              </div>
            </div>
            <div className="w-[320px] h-[618px] max-sm:h-[318px] max-md:w-[236px] max-sm:w-[168px] border rounded-[10px] mb-2.5 mt-[-640px] max-sm:mt-[-336px]">
              <img
                className="mx-auto py-[79px] max-sm:py-[26px] max-sm:w-[81px] max-sm:h-[219px]"
                src={photo34}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3 w-[248px] max-sm:w-full">
                Проктологическое оборудование
              </h4>
            </div>
            <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5 mt-[-324px] max-sm:mt-0">
              <img
                className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-20"
                src={photo37}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                Оборудование для радиационной терапии
              </h4>
            </div>
            <div className="w-[320px] h-[304px] max-md:w-[236px] max-sm:h-[154px] max-sm:w-[168px] border rounded-[10px] mb-2.5 mt-[-324px] max-sm:mt-[-170px]">
              <img
                className="mx-auto py-[17px] max-sm:py-[15px] max-sm:w-[123px]"
                src={photo38}
                alt=""
              />
              <h4 className="px-[25px] py-[31px] max-sm:py-2 font-medium leading-5 max-sm:text-xs max-sm:leading-3">
                Педиатрическое оборудование
              </h4>
            </div>
          </div>
        </div>

        <section className="mt-[150px]">
          <div className="container">
            <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:-leading-6">
              Комплексное оснащение кабинетов
            </h2>

            <div className="grid grid-cols-3 mt-[43px]">
              <div className="rounded-[10px] border w-[430px] max-md:w-[236px] max-sm:h-[154px] h-[579px] max-md:h-[423px]">
                <img className="max-md:h-[376px]" src={photo8} alt="photo8" />
                <h4 className="pt-4 px-[25px] text-base font-medium leading-5 max-md:pt-[15px] max-md:px-[15px]">
                  Экспресс лаборатория
                </h4>
              </div>
              <div className="rounded-[10px] border w-[430px] max-md:w-[236px] max-sm:h-[154px] h-[579px] max-md:h-[423px] max-sm:hidden">
                <img className="max-md:h-[376px]" src={photo9} alt="photo9" />
                <h4 className="pt-4 px-[25px] text-base font-medium leading-5 max-md:pt-[15px] max-md:px-[15px]">
                  Лазерная терапия
                </h4>
              </div>
              <div className="rounded-[10px] border w-[430px] max-md:w-[236px] max-sm:h-[154px] h-[579px] max-md:h-[423px] max-sm:hidden">
                <img className="max-md:h-[376px]" src={photo10} alt="photo10" />
                <h4 className="pt-4 px-[25px] text-base font-medium leading-5 max-md:pt-[15px] max-md:px-[15px]">
                  Операционный блок
                </h4>
              </div>
            </div>

            <div className="flex items-center justify-between max-md:justify-end max-md:mt-[25px]">
              <div className="flex items-center gap-2.5 mt-10 max-md:hidden">
                <button className="bg-white p-3 rounded-[50px] border">
                  <img src={left} alt="left" />
                </button>
                <button className="bg-white p-3 rounded-[50px] border">
                  <img src={right} alt="right" />
                </button>
              </div>

              <div className="flex items-center gap-2.5 max-sm:justify-center max-sm:pt-[300px]">
                <button className="rounded-[50px] py-[11px] px-[30px] border text-[#088269] border-[#088269] text-sm font-semibold leading-5 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  Бесплатная консультация
                </button>
                <button className="rounded-[50px] py-[11px] px-[30px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="container">
            <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:-leading-6">
              Почему выбирают нас?
            </h2>

            <div className="grid grid-cols-4 justify-center mt-10 max-md:mt-[30px] max-sm:grid-cols-2">
              <div className="w-[320px] max-sm:w-[168px] max-sm:h-[154px] max-md:w-[175px] h-[320px] max-md:h-[175px] border flex flex-col items-center justify-center rounded-[10px] max-sm:mb-2.5">
                <img className=" mx-auto" src={photo11} alt="photo" />
                <h4 className="mt-[42px] font-medium leading-5 text-center">
                  Быстрая доставка
                </h4>
              </div>
              <div className="w-[320px] max-sm:w-[168px] max-sm:h-[154px] max-md:w-[175px] h-[320px] max-md:h-[175px] border flex flex-col items-center justify-center rounded-[10px] max-sm:mb-2.5">
                <img className=" mx-auto" src={photo12} alt="photo" />
                <h4 className="mt-[31px] font-medium leading-5 text-center w-[148px]">
                  Весь товар сертифицирован
                </h4>
              </div>
              <div className="w-[320px] max-sm:w-[168px] max-sm:h-[154px] max-md:w-[175px] h-[320px] max-md:h-[175px] border flex flex-col items-center justify-center rounded-[10px] max-sm:mb-2.5">
                <img className=" mx-auto" src={photo13} alt="photo" />
                <h4 className="mt-10 font-medium leading-5 text-center w-[148px]">
                  Гибкая система скидок
                </h4>
              </div>
              <div className="w-[320px] max-sm:w-[168px] max-sm:h-[154px] max-md:w-[175px] h-[320px] max-md:h-[175px] border flex flex-col items-center justify-center rounded-[10px] max-sm:mb-2.5">
                <img className=" mx-auto" src={photo14} alt="photo" />
                <h4 className="mt-[45px] font-medium leading-5 text-center">
                  Лет на рынке
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="container flex gap-[88px] max-md:block">
            <div className="w-[242px]">
              <div className="max-md:flex max-sm:flex max-sm:justify-between">
                <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:leading-6">
                  Каталог товаров
                </h2>

                <div className="hidden max-md:flex ml-[255px] gap-2.5 max-sm:ml-[100px]">
                  <button className="rounded-[50px] py-[11px] px-[30px] border text-[#088269] border-[#088269] text-sm font-semibold leading-5 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                    Бесплатная консультация
                  </button>
                  <button className="rounded-[50px] py-[11px] px-[30px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                    <NavLink to="/Catalog">Все товары</NavLink>
                  </button>
                </div>
              </div>

              <div className="mt-10 max-md:flex max-md:gap-[15px]">
                <h4 className="text-base font-medium leading-5 text-[#202020] opacity-[50%] mb-2.5 cursor-pointer">
                  Хиты продаж
                </h4>
                <h4 className="text-base font-medium leading-5 text-[#202020] opacity-[50%] mb-2.5 cursor-pointer">
                  Новинки
                </h4>
                <h4 className="text-base font-medium leading-5 text-[#202020] opacity-[50%] mb-2.5 cursor-pointer">
                  Акции
                </h4>
              </div>
            </div>

            <CarouselPage2 />
          </div>

          <div className="container">
            <div className="flex gap-2.5 justify-end">
              <button className="rounded-[50px] py-[11px] px-[30px] border text-[#088269] border-[#088269] text-sm font-semibold leading-5 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                Бесплатная консультация
              </button>
              <NavLink to="/Catalog">
                <button className="rounded-[50px] py-[11px] px-[30px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  Все товары
                </button>
              </NavLink>
            </div>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="bg-[#E5E4ED]">
            <div className="container">
              <div className="flex items-center justify-between py-[100px] max-md:py-[37px]">
                <h3 className="text-3xl font-medium leading-9 max-md:text-xl max-md:leading-6">
                  Наши клиенты
                </h3>
                <h2 className="text-5xl font-medium leading-[52.8px] max-md:text-4xl max-md:leading-9">
                  БОЛЕЕ <span className="text-[#088269]">5000</span> <br />
                  УСПЕШНЫХ ПРОЕКТОВ
                </h2>
              </div>

              <MarqueePage />
            </div>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="container flex gap-[110px] max-md:block">
            <div>
              <div className="max-md:flex justify-between items-center">
                <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:leading-6">
                  Бренды
                </h2>

                <button className="hidden max-sm:hidden max-md:block rounded-[50px] py-[11px] px-[30px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  Сертификаты
                </button>
              </div>

              <h4 className="text-base font-medium leading-5 text-[#202020] opacity-[50%] mb-2.5 cursor-pointer mt-10 max-md:mt-2.5">
                Эксклюзивные поставщики
              </h4>
            </div>

            <CarouselPage3 />

            <button className="max-sm:mx-auto hidden max-sm:block rounded-[50px] py-[11px] px-[30px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
              Сертификаты
            </button>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="bg-[#088269]">
            <div className="container flex justify-between py-[100px] max-sm:block">
              <h2 className="text-3xl font-medium leading-9 text-[#F8F7F3]">
                Информация о компании
              </h2>
              <div className="w-[650px] max-sm:w-[345px]">
                <hr className="text-[#F8F7F3]" />
                <div>
                  <div className="mt-[25px] flex items-center justify-between">
                    <h3 className="text-lg font-semibold leading-6 text-[#F8F7F3]">
                      О компании
                    </h3>
                    <img
                      className="bg-[#F8F7F3] rounded-[50px] p-1.5"
                      src={cross}
                      alt="cross"
                    />
                  </div>
                  <p className="text-base font-medium leading-5 text-[#F8F7F3] opacity-[80%] mt-5">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
                <label className="flex items-center gap-[5px] mt-10">
                  <h4 className="text-sm font-semibold leading-5 text-left text-[#F8F7F3]">
                    Подробнее
                  </h4>
                  <img src={arrow} alt="arrow" />
                </label>
                <hr className="text-[#F8F7F3] mt-[22px]" />
                <Dropdown1 />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="container flex gap-[135px] max-md:block">
            <div className="max-md:flex justify-between items-center">
              <h2 className="text-3xl font-medium leading-9 w-[195px] max-md:w-full">
                Новости компании
              </h2>

              <button className="hidden max-md:block rounded-[50px] py-[11px] px-[30px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                Все новости
              </button>
            </div>

            <CarouselPage4 />
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="container flex items-center gap-2.5 justify-center max-sm:block">
            <img
              className="max-md:hidden max-sm:hidden"
              src={photo28}
              alt="photo28"
            />
            <img
              className="hidden max-md:block max-sm:hidden"
              src={photo28clone}
              alt=""
            />

            <div className="p-10 border rounded-[10px] h-[612px] max-md:p-5 max-md:w-[359px] max-md:h-[503px]">
              <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:leading-6">
                Остались вопросы?
              </h2>
              <p className="text-base font-medium leading-5 text-[#7A7687] mt-[25px] max-md:mt-5 max-md:text-sm max-md:leading-4 max-sm:w-[305px] max-sm:mt-[14px]">
                Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте
                свои координаты и наш менеджер перезвонит вам через 10 минут
              </p>

              <form>
                <div className="border-b mt-10 max-md:mt-[30px] mb-[25px] max-md:mb-5">
                  <input
                    className="text-sm font-normal leading-5 text-[#7A7687] w-full pb-[11px]"
                    type="text"
                    required
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="border-b mb-[25px]">
                  <input
                    className="text-sm font-normal leading-5 text-[#7A7687] w-full pb-[11px]"
                    type="number"
                    required
                    placeholder="Ваш телефон"
                  />
                </div>
                <div className="border-b mb-[25px]">
                  <input
                    className="text-sm font-normal leading-5 text-[#7A7687] w-full pb-[11px]"
                    type="email"
                    required
                    placeholder="Ваш email"
                  />
                </div>
                <div className="border-b">
                  <textarea
                    placeholder="Ваш вопрос"
                    cols="81"
                    rows="2"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center gap-[30px] mt-10 max-md:block max-md:mt-[30px]">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-sm font-semibold leading-5 text-[#F8F7F3] bg-[#088269] border-1 py-[11px] px-[30px] rounded-[50px] hover:text-[#088269] hover:border-[#088269] hover:bg-white transition-all duration-500"
                  >
                    Отправить
                  </button>
                  <p className="text-xs font-medium leading-4 w-[406px] max-md:text-[10px] max-md:w-[319px]">
                    Нажимая «Отправить», я соглашаюсь c обработкой персональных
                    данных на условиях
                    <span className="text-[#088269]">
                      Политики конфиденциальности.
                    </span>
                  </p>
                </div>
              </form>
            </div>

            <img className="hidden max-sm:block mt-2.5" src={map} alt="map" />
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="bg-[#E5E4ED]">
            <div className="container bg-my2 bg-no-repeat left-[53.65px] max-md:left-[13px] top-[91.83px] h-[276px] max-md:h-[197px]">
              <div className="ml-[725px] py-[35px] max-md:ml-[389px] max-sm:ml-0">
                <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:leading-6 max-md:w-[full]">
                  Подпишитесь и будьте в курсе!
                </h2>
                <p className="text-base font-medium leading-5 text-[#7A7687] mt-2 max-md:leading-4">
                  Акции, скидки, распродажи ждут!
                </p>
                <form className="mt-[45px] max-md:mt-[30px]">
                  <label className="flex items-center">
                    <input
                      className="relative py-[11px] px-[25px] rounded-[50px] w-[389px] text-sm font-normal leading-5 text-[#7A7687] max-md:py-2"
                      type="email"
                      placeholder="Введите email"
                      required
                    />
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="absolute left-[1114px] max-md:left-[630px] max-sm:ml-[-352px] text-sm font-semibold leading-5 text-[#F8F7F3] bg-[#088269] border-1 py-[11px] px-[30px] rounded-[50px] hover:text-[#088269] hover:border-[#088269] hover:bg-white transition-all duration-500 max-md:px-5 max-md:py-2"
                    >
                      Подписаться
                    </button>
                  </label>
                  <label className="flex items-center gap-2.5 mt-5 cursor-pointer">
                    <input className="w-[20px] h-[20px]" type="checkbox" />
                    <p className="max-md:text-[10px] max-md:leading-4">
                      Я даю согласие на обработку своих персональных данных.
                    </p>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Catalog;
