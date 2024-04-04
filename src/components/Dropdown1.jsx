import React from "react";
import { Dropdown } from "flowbite-react";

// imgs
import plus from "../assets/imgs/plus.png";

const Dropdown1 = () => {
  return (
    <div>
      <div>
        <div className="mb-[21px] max-sm:mb-[15px] flex items-center justify-between py-[25px]">
          <h4 className="text-lg font-semibold leading-6 text-[#F8F7F3]">
            Преимущества сотрудников
          </h4>
          <Dropdown
            label=""
            className="w-[660px] max-sm:w-[345px] max-sm:ml-[-160px] ml-[-40px]"
            dismissOnClick={false}
            renderTrigger={() => (
              <span>
                <img
                  className="border border-[#F8F7F3] rounded-[50px] p-1.5 cursor-pointer"
                  src={plus}
                  alt="plus"
                />
              </span>
            )}
          >
            <Dropdown.Item>
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </Dropdown.Item>
          </Dropdown>
        </div>
        <hr className="text-[#F8F7F3]" />
        <div className="mb-[21px] max-sm:mb-[15px] flex items-center justify-between py-[25px]">
          <h4 className="text-lg font-semibold leading-6 text-[#F8F7F3]">
            Достижения компании
          </h4>
          <Dropdown
            label=""
            className="w-[660px] max-sm:w-[345px] max-sm:ml-[-160px] ml-[-40px]"
            dismissOnClick={false}
            renderTrigger={() => (
              <span>
                <img
                  className="border border-[#F8F7F3] rounded-[50px] p-1.5 cursor-pointer"
                  src={plus}
                  alt="plus"
                />
              </span>
            )}
          >
            <Dropdown.Item>
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </Dropdown.Item>
          </Dropdown>
        </div>
        <hr className="text-[#F8F7F3]" />
        <div className="mb-[21px] max-sm:mb-[15px] flex items-center justify-between py-[25px]">
          <h4 className="text-lg font-semibold leading-6 text-[#F8F7F3]">
            Карьерный рост
          </h4>
          <Dropdown
            label=""
            className="w-[660px] max-sm:w-[345px] max-sm:ml-[-160px] ml-[-40px]"
            dismissOnClick={false}
            renderTrigger={() => (
              <span>
                <img
                  className="border border-[#F8F7F3] rounded-[50px] p-1.5 cursor-pointer"
                  src={plus}
                  alt="plus"
                />
              </span>
            )}
          >
            <Dropdown.Item>
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Dropdown1;
