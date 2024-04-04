import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "flowbite-react";

// imgs
import header from "../assets/imgs/header2.png";
import left from "../assets/imgs/left.png";
import right from "../assets/imgs/right.png";

const CarouselPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Modal
        className="w-[500px] h-[467px] mx-auto mt-[20vh] rounded-[10px]"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="py-4 border-none">Запросить цену</Modal.Header>
        <Modal.Body className="px-5">
          <form>
            <div className="flex items-center gap-2.5">
              <label className="w-[217px]">
                <input
                  className="border-b mb-[25px] pb-[11px] w-full"
                  type="text"
                  placeholder="Ваше имя*"
                />
              </label>
              <label className="w-[217px]">
                <input
                  className="border-b mb-[25px] pb-[11px] w-full"
                  type="tel"
                  placeholder="Ваш телефон*"
                />
              </label>
            </div>
            <label className="w-full">
              <input
                className="border-b mb-[25px] pb-[11px] w-full"
                type="email"
                placeholder="Ваш email*"
              />
            </label>
            <label className="w-full">
              <input
                className="border-b mb-[25px] pb-[11px] w-full"
                type="text"
                placeholder="Название вашей организации*"
              />
            </label>
            <label className="w-full">
              <textarea
                className="border-b mb-[25px] w-full"
                type="text"
                placeholder="Ваше сообщение"
              />
            </label>
            <div className="flex items-center justify-between">
              <label className="w-full flex items-center justify-between mb-[25px]">
                <button className="rounded-[50px] py-[11px] px-[30px] border bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  Отправить
                </button>
              </label>
              <p className="text-xs font-medium leading-4">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях <br />
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="container py-8 px-[60px] bg-[#E5E4ED] rounded-[10px] relative h-[346px] bg-my bg-no-repeat bg-right max-md:py-6 max-md:px-[30px] max-md:rounded-[7px] max-md:h-[264px] max-sm:bg-none max-sm:px-5 max-sm:py-4 max-sm:h-[410px]">
            <h1 className="text-5xl font-medium leading-[52.8px] max-md:text-4xl max-md:leading-9">
              Заголовок баннера <br /> в пару строк
            </h1>
            <p className="text-base font-medium leading-5 text-[#7A7687] w-[359px] mt-[25px] max-md:text-sm max-md:leading-4 max-md:mt-[30px] max-md:w-[267px] max-sm:mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="flex justify-start items-center gap-[15px] mt-[65px] max-md:mt-11 max-md:gap-2.5 max-sm:mt-[23px]">
              <button
                onClick={() => setOpenModal(true)}
                className="rounded-[50px] py-[11px] px-[30px] border bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4"
              >
                Запросить цену
              </button>
              <NavLink to="Catalog">
                <button className="rounded-[50px] py-[11px] px-[30px] border-1 text-[#088269] border-[#088269] text-sm font-semibold leading-5  max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  В каталог
                </button>
              </NavLink>
            </div>
            <div className="absolute flex items-center gap-2.5 top-[272px] left-[1290px] max-sm:hidden">
              <button className="bg-white p-3 rounded-[50px]">
                <img src={left} alt="left" />
              </button>
              <button className="bg-white p-3 rounded-[50px]">
                <img src={right} alt="right" />
              </button>
            </div>
            <img
              className="hidden header-block w-[345px] mt-6"
              src={header}
              alt="header"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="container py-8 px-[60px] bg-[#E5E4ED] rounded-[10px] relative h-[346px] bg-my bg-no-repeat bg-right max-md:py-6 max-md:px-[30px] max-md:rounded-[7px] max-md:h-[264px] max-sm:bg-none max-sm:px-5 max-sm:py-4 max-sm:h-[410px]">
            <h1 className="text-5xl font-medium leading-[52.8px] max-md:text-4xl max-md:leading-9">
              Заголовок баннера <br /> в пару строк
            </h1>
            <p className="text-base font-medium leading-5 text-[#7A7687] w-[359px] mt-[25px] max-md:text-sm max-md:leading-4 max-md:mt-[30px] max-md:w-[267px] max-sm:mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="flex justify-start items-center gap-[15px] mt-[65px] max-md:mt-11 max-md:gap-2.5 max-sm:mt-[23px]">
              <button
                onClick={() => setOpenModal(true)}
                className="rounded-[50px] py-[11px] px-[30px] border bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4"
              >
                Запросить цену
              </button>
              <NavLink to="Catalog">
                <button className="rounded-[50px] py-[11px] px-[30px] border-1 text-[#088269] border-[#088269] text-sm font-semibold leading-5  max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4">
                  В каталог
                </button>
              </NavLink>
            </div>
            <div className="absolute flex items-center gap-2.5 top-[272px] left-[1290px] max-sm:hidden">
              <button className="bg-white p-3 rounded-[50px]">
                <img src={left} alt="left" />
              </button>
              <button className="bg-white p-3 rounded-[50px]">
                <img src={right} alt="right" />
              </button>
            </div>
            <img
              className="hidden header-block w-[345px] mt-6"
              src={header}
              alt="header"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
