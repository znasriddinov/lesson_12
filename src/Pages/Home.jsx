import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "flowbite-react";

// Pages
import CarouselPage from "../components/CarouselPage";
import CarouselPage2 from "../components/CarouselPage2";
import MarqueePage from "../components/MarqueePage";
import CarouselPage3 from "../components/CarouselPage3";
import CarouselPage4 from "../components/CarouselPage4";
import Dropdown1 from "../components/Dropdown1";

// imgs
import photo1 from "../assets/imgs/photo1.png";
import photo2 from "../assets/imgs/photo2.png";
import photo3 from "../assets/imgs/photo3.png";
import photo4 from "../assets/imgs/photo4.png";
import photo5 from "../assets/imgs/photo5.png";
import photo6 from "../assets/imgs/photo6.png";
import photo7 from "../assets/imgs/photo7.png";
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
import comparison2 from "../assets/imgs/comparison2.png";
import like from "../assets/imgs/like.png";
import photo15 from "../assets/imgs/photo15.png";
import photo16 from "../assets/imgs/photo16.png";
import photo17 from "../assets/imgs/photo17.png";
import star from "../assets/imgs/star.png";
import emptyStar from "../assets/imgs/empty-star.png";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="mt-[30px]">
        <CarouselPage />
      </header>

      <main>
        <section className="mt-[121px]">
          <Modal
            className="w-[870px] h-[484px] mx-auto mt-[20vh] rounded-[10px]"
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header className="py-0 border-none"></Modal.Header>
            <Modal.Body className="px-3">
              <div className="flex gap-5 items-center">
                <div className="w-[430px] max-md:w-[236px] h-[424px] rounded-[10px] max-sm:hidden">
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
                  <h3 className="text-lg font-semibold leading-6">
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
                  </ul>
                  <h4 className="mt-[15px] text-base font-medium leading-5">
                    Цена по запросу
                  </h4>
                  <p className="mt-[45px] text-xs font-medium leading-4 text-[#202020]">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества.
                  </p>
                  <div className="mt-[25px] flex items-center gap-[119px]">
                    <ul>
                      <li className="text-xs font-medium leading-4 text-[#07745E] border-[#07745E] cursor-pointer mb-1.5 hover:border-b">
                        Оставить отзыв
                      </li>
                      <li className="text-xs font-medium leading-4 text-[#07745E] border-[#07745E] cursor-pointer mb-1.5 hover:border-b">
                        Задать вопрос
                      </li>
                    </ul>
                    <ul>
                      <li className="text-xs font-medium leading-4 text-[#07745E] border-[#07745E] cursor-pointer mb-1.5 hover:border-b">
                        Как оформить заказ
                      </li>
                      <li className="text-xs font-medium leading-4 text-[#07745E] border-[#07745E] cursor-pointer mb-1.5 hover:border-b">
                        Запросить КП
                      </li>
                    </ul>
                  </div>
                  <NavLink to="Catalog/SinglePage">
                    <button className="border-1 border-[#07745E] py-[11px] w-full rounded-[50px] mt-[41px] text-[#088269] text-sm font-semibold leading-5">
                      Больше информации о товаре
                    </button>
                  </NavLink>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>

          <div className="container">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:leading-6">
                Популярные категории
              </h2>
              <button className="max-sm:hidden rounded-[50px] py-[11px] px-[30px] border bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                Все категории
              </button>
            </div>

            <div className="mt-10 grid grid-cols-4 justify-center max-md:grid-cols-3 max-sm:grid-cols-2">
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[154px] max-md:w-[236px] h-[304px] max-md:h-[216px] border px-[25px] max-md:px-[15px] rounded-[10px] mb-2.5"
              >
                <img
                  className="mx-auto max-md:w-[137px] max-md:h-[127px] max-sm:w-[107px] max-sm:h-[95px]"
                  src={photo1}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[248px] max-md:w-[140px] max-md:text-sm max-md:leading-4">
                  Дерматологическое оборудование
                </h3>
              </div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[318px] max-md:w-[236px] h-[618px] max-md:h-[442px] border px-[25px] max-md:px-[15px] rounded-[10px]"
              >
                <img
                  className="mx-auto pt-[23px] max-md:p-0 max-md:w-[329px] max-md:h-[326px] max-sm:w-[250px] max-sm:h-[275px]"
                  src={photo2}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[248px]">
                  Дерматологическое оборудование
                </h3>
              </div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[154px] max-md:w-[236px] h-[304px] max-md:h-[216px] border px-[25px] max-md:px-[15px] rounded-[10px] mb-2.5 max-sm:mt-[-150px]"
              >
                <img
                  className="mx-auto max-md:w-[119px] max-md:h-[136px] max-sm:w-[89px] max-sm:h-[97px]"
                  src={photo3}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[248px]">
                  Оборудование для анастезиологии
                </h3>
              </div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[154px] max-md:w-[236px] h-[304px] max-md:h-[216px] border px-[25px] max-md:px-[15px] rounded-[10px] mb-2.5 max-md:mt-[-215px] max-sm:mt-[30px]"
              >
                <img
                  className="mx-auto pt-6 max-md:w-[125px] max-md:h-[125px] max-md:py-[14px] max-sm:w-[96px] max-sm:h-[96px]"
                  src={photo4}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[184px]">
                  Мебель для медецинских целей
                </h3>
              </div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[154px] max-md:w-[236px] h-[304px] max-md:h-[216px] border px-[25px] max-md:px-[15px] rounded-[10px] mt-[-304px] max-md:mt-2.5 max-sm:mt-[-165px]"
              >
                <img
                  className="mx-auto py-2 max-md:w-[105px] max-md:h-[116px] max-sm:w-[90px] max-sm:h-[100px]"
                  src={photo5}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[248px] max-sm:w-[140px]">
                  Ветеринарное оборудование
                </h3>
              </div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[154px] max-md:w-[236px] h-[304px] max-md:h-[216px] border px-[25px] max-md:px-[15px] rounded-[10px] ml-[355px] max-md:ml-0 mt-[-304px] max-md:mt-[-215px] max-sm:mt-2"
              >
                <img
                  className="mx-auto py-2 max-md:w-[122px] max-md:h-[122px]"
                  src={photo6}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[248px]">
                  Оборудование для анастезиологии
                </h3>
              </div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-[320px] max-sm:w-[168px] cursor-pointer max-sm:h-[154px] max-md:w-[236px] h-[304px] max-md:h-[216px] border px-[25px] rounded-[10px] ml-[355px] mt-[-304px] max-md:ml-0 max-md:mt-[-216px] max-sm:mt-[-155px]"
              >
                <img
                  className="mx-auto py-4 max-md:-[186px] max-md:h-[117px]"
                  src={photo7}
                  alt="photo1"
                />
                <hr className="" />
                <h3 className="font-medium leading-5 w-[248px]">
                  Дерматологическое оборудование
                </h3>
              </div>
            </div>

            <button className="hidden max-sm:block mx-auto mt-4 rounded-[50px] py-[11px] px-[30px] border bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
              Все категории
            </button>
          </div>
        </section>

        <section className="mt-[150px]">
          <div className="container">
            <h2 className="text-3xl font-medium leading-9 max-md:text-xl max-md:-leading-6">
              Комплексное оснащение кабинетов
            </h2>

            <div className="grid grid-cols-3 mt-[43px]">
              <div className="rounded-[10px] border w-[430px] max-md:w-[236px] h-[579px] max-md:h-[423px]">
                <img className="max-md:h-[376px]" src={photo8} alt="photo8" />
                <h4 className="pt-4 px-[25px] text-base font-medium leading-5 max-md:pt-[15px] max-md:px-[15px]">
                  Экспресс лаборатория
                </h4>
              </div>
              <div className="rounded-[10px] border w-[430px] max-md:w-[236px] h-[579px] max-md:h-[423px] max-sm:hidden">
                <img className="max-md:h-[376px]" src={photo9} alt="photo9" />
                <h4 className="pt-4 px-[25px] text-base font-medium leading-5 max-md:pt-[15px] max-md:px-[15px]">
                  Лазерная терапия
                </h4>
              </div>
              <div className="rounded-[10px] border w-[430px] max-md:w-[236px] h-[579px] max-md:h-[423px] max-sm:hidden">
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

              <div className="flex items-center gap-2.5 max-sm:justify-center">
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

export default Home;
