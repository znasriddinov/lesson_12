import React from "react";
import { Link, useLocation } from "react-router-dom";

// imgs
import photo39 from "../assets/imgs/photo39.png";
import vk from "../assets/imgs/vk.png";
import facebook from "../assets/imgs/facebook.png";
import instagram from "../assets/imgs/instagram.png";
import twitter from "../assets/imgs/twitter.png";
import ok from "../assets/imgs/ok.png";
import edit from "../assets/imgs/edit.png";

const Login = () => {
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

      <section className="mt-[100px] mb-[150px]">
        <div className="container">
          <div className="flex items-center gap-[120px]">
            <img src={photo39} alt="photo39" />

            <div>
              <h3 className="text-3xl font-medium leading-9">
                Константин Константинопольский
              </h3>

              <div className="mt-5 flex items-center gap-[15px]">
                <img src={vk} alt="vk" />
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={ok} alt="ok" />
              </div>

              <div className="mt-10 flex gap-2.5">
                <button className="border rounded-[50px] text-sm font-semibold leading-5 py-[11px] px-5">
                  Изменить персональную информацию
                </button>
                <button className="border rounded-[50px] text-sm font-semibold leading-5 py-[11px] px-5">
                  Изменить пароль
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center ml-[395px] gap-[200px] mt-[74px]">
            <div className="flex gap-2.5 items-start">
              <div>
                <h4 className="font-medium leading-5 mb-[5px]">
                  +7 911 564–86–86
                </h4>
                <p className="font-medium leading-5 text-[#7A7687]">Телефон</p>
              </div>
              <img src={edit} alt="edit" />
            </div>
            <div className="flex gap-2.5 items-start">
              <div>
                <h4 className="font-medium leading-5 mb-[5px]">
                  person@mail.ru
                </h4>
                <p className="font-medium leading-5 text-[#7A7687]">Email</p>
              </div>
              <img src={edit} alt="edit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
