import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, Modal } from "flowbite-react";

// imgs
import logo from "../assets/imgs/Logo.png";
import search from "../assets/imgs/search.png";
import login from "../assets/imgs/login.png";
import favourites from "../assets/imgs/favourites.png";
import comparison from "../assets/imgs/comparison.png";
import buy from "../assets/imgs/buy.png";
import burger from "../assets/imgs/burger.png";
import location from "../assets/imgs/location.png";
import phone from "../assets/imgs/phone.png";
import phone2 from "../assets/imgs/phone2.png";
import burger2 from "../assets/imgs/burger2.png";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // if (email && password) {
  //   window.location.href = "Login";
  // }

  const handleEmail = (e) => {
    setEmail(e.target.value);

    console.log(e.target.value);

    localStorage.setItem("email", JSON.stringify(e.target.value));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    localStorage.setItem("password", JSON.stringify(e.target.value));
  };

  const windowb = (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      alert("Saved to localStorage");
      window.location.href = "Login";
    } else {
      alert("enter input values!");
    }
  };

  return (
    <div>
      <nav>
        <div className="container">
          <div className="flex justify-between items-center pt-2.5 max-sm:hidden">
            <ul className="flex items-center gap-5 max-md:gap-[10px]">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                    О компании
                  </li>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="">Вакансии</Dropdown.Item>
                  <Dropdown.Item href="">Отзывы</Dropdown.Item>
                  <Dropdown.Item href="">Сертификаты</Dropdown.Item>
                  <Dropdown.Item href="">Партнерские программы</Dropdown.Item>
                  <Dropdown.Item href="">Оптовые продажи</Dropdown.Item>
                  <Dropdown.Item href="">Лизинг</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                Доставка
              </li>
              <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                Оплата
              </li>
              <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                Гарантии
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                    Блог
                  </li>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="">Новости</Dropdown.Item>
                  <Dropdown.Item href="">Статьи</Dropdown.Item>
                  <Dropdown.Item href="">Видео</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
            <ul className="flex items-center gap-[45px] max-md:gap-[25px]">
              <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                info@mail.ru
              </li>
              <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-4 max-md:font-medium max-md:leading-3 max-md:text-[10px]">
                г. Москва, ул. Московская, д. 35
              </li>
            </ul>
          </div>

          <hr className="mt-2.5 max-sm:hidden" />

          <div className="hidden max-sm:flex justify-between mt-2.5">
            <img className="w-[74px] h-[32px]" src={logo} alt="logo" />

            <div className="flex items-center gap-3">
              <img src={phone2} alt="phone2" />
              <img src={burger2} alt="burger2" />
            </div>
          </div>

          <div className="nav__tittle flex mt-6 max-sm:mt-[14px]">
            <NavLink to="/">
              <img
                className="max-md:w-[73px] max-md:h-[30px] max-sm:hidden"
                src={logo}
                alt="logo"
              />
            </NavLink>
            <label className="flex items-center border rounded-[50px] w-[614px] ml-[50px] bg-[#EFEFEF] max-md:w-[403px] max-md:ml-8 max-sm:w-[345px] max-sm:ml-0">
              <select className="py-2.5 px-[15px] rounded-[50px] w-[146px] text-[14px] font-semibold leading-[19.12px] bg-[#EFEFEF] text-[#7A7687] cursor-pointer max-md:py-[6.5px] max-md:w-[85px] max-md:text-xs max-md:leading-4">
                <option value="">Все категории</option>
                <option value="">Реанимация</option>
                <option value="">Хирургия</option>
                <option value="">Офтальмология</option>
                <option value="">Лабораторная диагностика</option>
                <option value="">Акушерство</option>
                <option value="">Гинекология</option>
                <option value="">Гистология</option>
                <option value="">Косметология</option>
                <option value="">Оториноларингология</option>
                <option value="">Рентгенология и томография</option>
                <option value="">Стерилизация</option>
                <option value="">Физиотерапия и реабилитация</option>
                <option value="">Функциональная диагностика</option>
                <option value="">Эндоскопия</option>
                <option value="">Новинки</option>
                <option value="">Распродажи</option>
                <option value="">Кабинеты под ключ</option>
              </select>
              <input
                className="w-[419px] h-full rounded-r-[50px] pl-[15px] max-md:text-xs max-md:font-normal max-md:leading-4 max-md:w-[230px]"
                type="search"
                placeholder="Поиск"
              />
              <img
                className="py-2 rounded-[50px] h-full px-3 max-md:w-[17px] max-md:h-[17px] max-md:px-3"
                src={search}
                alt="search"
              />
            </label>
            <h4 className="ml-[35px] text-xs font-medium leading-4 text-[#7A7687] max-md:hidden max-sm:hidden">
              Пн-Пт с 09:00-19:00 <br />
              Сб-Вс - выходной
            </h4>
            <div className="flex ml-[114px] items-center gap-[25px] max-sm:hidden">
              <NavLink
                onClick={() => setOpenModal(true)}
                className="flex flex-col items-center"
              >
                <img
                  className="max-md:w-[20px] h-[20px]"
                  src={login}
                  alt="login"
                />
                <h4 className="mt-1 text-xs font-medium leading-4 text-[#7A7687] max-md:hidden">
                  Войти
                </h4>
              </NavLink>
              <div className="flex flex-col items-center">
                <img
                  className="max-md:w-[20px] h-[20px]"
                  src={favourites}
                  alt="favourites"
                />
                <h4 className="mt-1 text-xs font-medium leading-4 text-[#7A7687] max-md:hidden">
                  Избранное
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="max-md:w-[20px] h-[20px]"
                  src={comparison}
                  alt="comparison"
                />
                <h4 className="mt-1 text-xs font-medium leading-4 text-[#7A7687] max-md:hidden">
                  Сравнить
                </h4>
              </div>
              <NavLink to="Basket" className="flex flex-col items-center">
                <img className="max-md:w-[20px] h-[20px]" src={buy} alt="buy" />
                <h4 className="mt-1 text-xs font-medium leading-4 text-[#7A7687] max-md:hidden">
                  Корзина
                </h4>
              </NavLink>
            </div>
          </div>

          <hr className="mt-6 max-sm:hidden" />

          <div className="pt-2.5 flex items-center justify-between max-sm:hidden">
            <ul className="flex items-center gap-[25px] max-md:gap-[15px]">
              <Dropdown className="">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <NavLink
                    to="Catalog"
                    className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4 flex items-center gap-[5px]"
                  >
                    <img
                      className="max-md:w-[17px] max-md:h-[17px]"
                      src={burger}
                      alt="burger"
                    />
                    Каталог
                  </NavLink>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-[#E5E2EE]">
                  <Dropdown.Item className="" href="">
                    <div className="px-[22px] py-5 rounded-[5px] w-[278px] ">
                      <ul>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Реанимация
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Хирургия
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Офтальмология
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Лабораторная диагностика
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Акушерство
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Гинекология
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Гистология
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Косметология
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Оториноларингология
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Рентгенология и томография
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Стерилизация
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Физиотерапия и реабилитация
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Функциональная диагностика
                        </li>
                        <li className="text-sm font-normal leading-5 mb-2.5">
                          Эндоскопия
                        </li>
                      </ul>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <NavLink className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4">
                    Производители
                  </NavLink>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="">A. KRÜSS Optronic</Dropdown.Item>
                  <Dropdown.Item href="">AnD</Dropdown.Item>
                  <Dropdown.Item href="">ATAGO</Dropdown.Item>
                  <Dropdown.Item href="">AWARENESS TECHNOLOGY</Dropdown.Item>
                  <Dropdown.Item href="">BEGER</Dropdown.Item>
                  <Dropdown.Item href="">Berrcom</Dropdown.Item>
                  <Dropdown.Item href="">BESTMAN</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavLink className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4">
                Кабинеты под ключ
              </NavLink>
              <NavLink className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4">
                Услуги
              </NavLink>
              <NavLink className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4">
                Акции
              </NavLink>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <NavLink className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4">
                    Покупателям
                  </NavLink>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="">Как сделать заказ</Dropdown.Item>
                  <Dropdown.Item href="">Возврат</Dropdown.Item>
                  <Dropdown.Item href="">Прайс-лист (скачать)</Dropdown.Item>
                  <Dropdown.Item href="">
                    Каталоги оборудования PDF
                  </Dropdown.Item>
                  <Dropdown.Item href="">Оформить претензию</Dropdown.Item>
                  <Dropdown.Item href="">FAQ</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavLink className="text-sm font-semibold leading-5 text-[#202020] max-md:text-xs max-md:leading-4">
                Контакты
              </NavLink>
            </ul>
            <div className="flex items-center gap-[17px] max-md:gap-2.5">
              <label className="flex items-center gap-[3px] text-sm font-semibold leading-5 max-md:text-xs max-md:leading-4">
                Москва
                <img
                  className="max-md:w-[13px] max-md:h-[13px]"
                  src={location}
                  alt="location"
                />
              </label>
              <div className="flex gap-2.5 max-md:hidden">
                <button className="rounded-[50px] border py-[11px] px-5 text-sm font-semibold leading-5">
                  +7(495)000-00-00
                </button>
                <button className="rounded-[50px] border py-[11px] px-5 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300">
                  Заказать звонок
                </button>
              </div>
              <button className="hidden max-md:block bg-[#088269] rounded-[50px] py-2 px-[7px]">
                <img src={phone} alt="phone" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        className="w-[500px] mx-auto mt-[20vh] "
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Регистрация</Modal.Header>
        <Modal.Body className="px-5 mb-3">
          <form className="" onSubmit={handleEmail}>
            <label className="w-full mb-[25px]">
              <input
                className="pb-[11px] w-full border-b"
                type="email"
                placeholder="Ваш email*"
                onChange={handleEmail}
                value={email}
              />
            </label>
            <label className="w-full">
              <input
                className="pb-[11px] w-full border-b"
                type="password"
                placeholder="Пароль*"
                onChange={handlePassword}
                value={password}
              />
            </label>
            <button
              type="submit"
              onClick={windowb}
              className="w-full mt-[30px] rounded-[50px] py-[11px] border-1 bg-[#088269] text-white text-sm font-semibold leading-5 hover:bg-white hover:text-[#088269] hover:border-[#088269] transition-all duration-300 max-md:py-2 max-md:px-5 max-md:text-xs max-md:leading-4"
              // onClick={() => setOpenModal(false)}
            >
              Рассчитать стоимость
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <hr className="mt-2.5 max-sm:mt-3" />
    </div>
  );
};

export default Navbar;
