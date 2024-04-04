import React from "react";
import { NavLink } from "react-router-dom";

// imgs
import arrow from "../assets/imgs/arrow.png";
import logo from "../assets/imgs/footer-logo.png";
import vk from "../assets/imgs/vk.png";
import telegram from "../assets/imgs/telegram.png";
import whatsapp from "../assets/imgs/whatsapp.png";
import mastercard from "../assets/imgs/mastercard.png";
import visa from "../assets/imgs/visa.png";
import mir from "../assets/imgs/mir.png";

const Footer = () => {
  return (
    <footer className="bg-[#088269] h-[647px] max-sm:h-[1060px] max-md:h-[750px]">
      <div className="container px-[65px]">
        <div className="pt-10 flex gap-[120px] max-md:gap-[48px] max-sm:block">
          <div className="w-[210px] max-md:w-[145px]">
            <h3 className="text-sm font-semibold leading-5 text-[#F8F7F3] mb-[15px] max-md:text-xs max-md:leading-4">
              Покупателям
            </h3>
            <hr className="text-[#F8F7F3] w-[210px]" />
            <div className="flex gap-[60px] max-md:gap-5 max-sm:block">
              <ul className="mt-[15px]">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  О компании
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Сертификаты
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Вакансии
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Гарантии
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Услуги
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Акции
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Доставка
                </li>
              </ul>
              <ul className="mt-[15px]">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Оплата
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Возврат
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  FAQ
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Лизинг
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Отзывы
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Блог
                </li>
              </ul>
            </div>
          </div>

          <hr className="hidden max-sm:block mt-2.5 text-[#F8F7F3]" />

          <div className="w-[650px] max-md:w-[365px] max-sm:mt-5">
            <h3 className="text-sm font-semibold leading-5 text-[#F8F7F3] mb-[15px] max-md:text-xs max-md:leading-4">
              Каталог
            </h3>
            <hr className="text-[#F8F7F3] w-[650px] max-md:w-[395px]" />
            <div className="grid grid-cols-3 gap-[60px] max-md:gap-5 max-sm:hidden max-md:grid-cols-2">
              <ul className="mt-[15px] w-[185px] max-md:hidden">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Реанимация
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Хирургия
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Офтальмология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Лабораторная диагностика
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Акушерство и Гинекология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Гистология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Косметология
                </li>
              </ul>
              <ul className="mt-[15px] w-[205px] max-md:hidden">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Орториноларингология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Рентгенология и томография
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Стрерилизация
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Физиотерапия и реабилитация
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Функциональная диагностика
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Эндоскопия
                </li>
              </ul>
              <ul className="mt-[15px] w-[129px] max-md:hidden">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Новинки
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Распродажи
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Кабинеты под ключ
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Скачать каталог
                </li>
              </ul>

              <ul className="mt-[15px] w-[169px] hidden max-md:block">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Реанимация
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Хирургия
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Офтальмология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Лабораторная диагностика
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Акушерство и Гинекология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Гистология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Косметология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Орториноларингология
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Рентгенология и томография
                </li>
              </ul>
              <ul className="mt-[15px] w-[176px] hidden max-md:block">
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Стрерилизация
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Физиотерапия и реабилитация
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Функциональная диагностика
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Эндоскопия
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Новинки
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Распродажи
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Кабинеты под ключ
                </li>
                <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-2 max-md:text-xs max-md:leading-4">
                  Скачать каталог
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[210px] max-md:w-[121px] max-sm:mt-5">
            <h3 className="text-sm font-semibold leading-5 text-[#F8F7F3] mb-[15px] max-md:text-xs max-md:leading-4">
              Контакты
            </h3>
            <hr className="text-[#F8F7F3] w-[210px] max-sm:w-[395px]" />
            <h4 className="text-sm font-semibold leading-5 text-[#F8F7F3] mt-[15px] max-md:mt-2.5 max-sm:hidden">
              Адрес:
            </h4>
            <p className="text-sm font-normal leading-5 text-[#F8F7F3] mt-[5px] max-md:mt-0.5 max-sm:hidden">
              г. Москва, ул. Московская, д. 35
            </p>

            <label className="max-sm:hidden flex items-center gap-2 text-sm font-semibold leading-5 text-[#F8F7F3] mt-[25px] max-md:mt-5 max-md:text-xs max-md:leading-4">
              Карта проезда <img src={arrow} alt="arrow" />
            </label>
            <ul className="mt-[15px] max-md:mt-5 max-sm:hidden">
              <li className="text-sm font-normal leading-5 text-[#F8F7F3] mb-[25px] max-md:mb-5">
                График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                выходной
              </li>
              <li className="text-sm font-normal leading-5 text-[#F8F7F3]">
                +7 000-000-00-00 <br /> +7 495-000-00-00 <br /> 8 800-000-00-00
                <br />
                info@mail.ru
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-[60px] max-md:mt-[47px] text-[#E5E2EE] max-sm:hidden" />

        <div className="grid grid-cols-5 pt-[15px] max-md:pt-2.5 max-sm:grid-cols-1 max-sm:mt-[30px]">
          <div className="max-sm:hidden">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <h6 className="text-xs font-normal leading-4 text-[#E5E2EE] mt-2.5">
              ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»
            </h6>
          </div>
          <div>
            <h4 className="text-sm font-semibold leading-5 text-[#F8F7F3]">
              Мы в соцсетях
            </h4>
            <div className="mt-2.5 flex items-center gap-2.5">
              <a href="https://vk.com/feed" target="_blank">
                <img src={vk} alt="vk" />
              </a>
              <a href="https://web.telegram.org/a/" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="https://www.whatsapp.com/?lang=ru_RU" target="_blank">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
          <div className="max-md:hidden max-sm:hidden">
            <ul>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2">
                Партнерская программа
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2">
                Оптовые продажи
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2">
                Реквизиты
              </li>
            </ul>
          </div>
          <div className="max-md:hidden max-sm:hidden">
            <ul>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2">
                Политика конфиденциальности
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2">
                Условия соглашения
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2">
                Карта сайта
              </li>
            </ul>
          </div>

          <div className="hidden max-md:block max-sm:mt-[30px]">
            <ul>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2 max-md:mb-[5px]">
                Партнерская программа
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2 max-md:mb-[5px]">
                Оптовые продажи
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2 max-md:mb-[5px]">
                Реквизиты
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2 max-md:mb-[5px] max-sm:mt-[30px]">
                Политика конфиденциальности
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2 max-md:mb-[5px]">
                Условия соглашения
              </li>
              <li className="text-sm font-normal leading-5 text-[#E5E2EE] mb-2 max-md:mb-[5px]">
                Карта сайта
              </li>
            </ul>
          </div>

          <div className="max-sm:mt-[30px]">
            <h4 className="text-sm font-semibold leading-5 text-[#F8F7F3]">
              Способы оплаты
            </h4>
            <div className="mt-2.5 grid grid-cols-3 max-md:grid-cols-2 items-center gap-2.5 max-sm:flex max-sm:gap-4">
              <a href="https://www.mastercard.uz/ru-uz.html" target="_blank">
                <img src={mastercard} alt="mastercard" />
              </a>
              <a href="https://cis.visa.com/" target="_blank">
                <img src={visa} alt="visa" />
              </a>
              <a href="https://pay.mironline.ru/help/" target="_blank">
                <img src={mir} alt="mir" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-[60px] max-sm:mt-[50px] max-sm:block">
          <h3 className="text-xs font-normal leading-4 text-[#F8F7F3] max-md:text-[10px] max-md:leading-3">
            © 2022 Медоборудование <br /> Все права защищены
          </h3>
          <p className="text-xs font-normal leading-4 text-[#F8F7F3] opacity-[60%] max-md:text-[10px] max-md:leading-3 max-md:w-[534px] max-sm:mt-[15px] max-sm:w-[306px]">
            Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
