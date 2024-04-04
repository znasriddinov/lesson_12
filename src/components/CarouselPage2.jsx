import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Modal } from "flowbite-react";
import { NavLink } from "react-router-dom";

// imgs
import comparison2 from "../assets/imgs/comparison2.png";
import like from "../assets/imgs/like.png";
import photo15 from "../assets/imgs/photo15.png";
import photo16 from "../assets/imgs/photo16.png";
import photo17 from "../assets/imgs/photo17.png";
import star from "../assets/imgs/star.png";
import emptyStar from "../assets/imgs/empty-star.png";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Carousel>
      <div>
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

        <div className="grid grid-cols-3 gap-2.5">
          <div
            onClick={() => setOpenModal(true)}
            className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] cursor-pointer"
          >
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
              className="mx-auto mt-5 max-md:w-[124px]"
              src={photo15}
              alt="photo15"
            />
            <hr />
            <div className="mt-5">
              <h3 className="text-lg font-semibold leading-6 text-left">
                Анализатор мочи <br /> MIND UA-66
              </h3>
              <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
                Артикул: 213134 <br /> В наличии
              </p>
              <h4 className="text-lg font-semibold leading-6 text-left mt-[30px]">
                300 000 руб.
              </h4>
              <button className="text-sm font-semibold leading-5 text-[#088269] border w-full py-[11px] rounded-[50px] mt-[15px]">
                Добавить в корзину
              </button>
            </div>
          </div>

          <div
            onClick={() => setOpenModal(true)}
            className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] cursor-pointer max-sm:hidden"
          >
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
            <hr />
            <div className="mt-5">
              <h3 className="text-lg font-semibold leading-6 text-left">
                Анализатор мочи <br /> MIND UA-66
              </h3>
              <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
                Артикул: 213134 <br /> В наличии
              </p>
              <h4 className="text-lg font-semibold leading-6 text-left mt-[30px]">
                300 000 руб.
              </h4>
              <button className="text-sm font-semibold leading-5 text-[#088269] border w-full py-[11px] rounded-[50px] mt-[15px]">
                Добавить в корзину
              </button>
            </div>
          </div>

          <div
            onClick={() => setOpenModal(true)}
            className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] cursor-pointer max-sm:hidden"
          >
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
              src={photo17}
              alt="photo15"
            />
            <hr />
            <div className="mt-5">
              <h3 className="text-lg font-semibold leading-6 text-left">
                Анализатор мочи <br /> MIND UA-66
              </h3>
              <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
                Артикул: 213134 <br /> В наличии
              </p>
              <h4 className="text-lg font-semibold leading-6 text-left mt-[30px]">
                300 000 руб.
              </h4>
              <button className="text-sm font-semibold leading-5 text-[#088269] border w-full py-[11px] rounded-[50px] mt-[15px]">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-sm:flex gap-2.5">
        <div
          onClick={() => setOpenModal(true)}
          className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] cursor-pointer"
        >
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
            src={photo15}
            alt="photo15"
          />
          <hr />
          <div className="mt-5">
            <h3 className="text-lg font-semibold leading-6 text-left">
              Анализатор мочи <br /> MIND UA-66
            </h3>
            <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
              Артикул: 213134 <br /> В наличии
            </p>
            <h4 className="text-lg font-semibold leading-6 text-left mt-[30px]">
              300 000 руб.
            </h4>
            <button className="text-sm font-semibold leading-5 text-[#088269] border w-full py-[11px] rounded-[50px] mt-[15px]">
              Добавить в корзину
            </button>
          </div>
        </div>

        <div className="w-[320px] max-md:w-[236px] px-3 border py-[15px] rounded-[10px] cursor-pointer hidden max-sm:block">
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
          <hr />
          <div className="mt-5">
            <h3 className="text-lg font-semibold leading-6 text-left">
              Анализатор мочи <br /> MIND UA-66
            </h3>
            <p className="text-xs font-normal leading-4 text-[#7A7687] mt-2.5 text-left">
              Артикул: 213134 <br /> В наличии
            </p>
            <h4 className="text-lg font-semibold leading-6 text-left mt-[30px]">
              300 000 руб.
            </h4>
            <button className="text-sm font-semibold leading-5 text-[#088269] border w-full py-[11px] rounded-[50px] mt-[15px]">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default App;
