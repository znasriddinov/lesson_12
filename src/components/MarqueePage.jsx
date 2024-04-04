import Marquee from "react-fast-marquee";

// imgs
import photo18 from "../assets/imgs/photo18.png";
import photo19 from "../assets/imgs/photo19.png";
import photo20 from "../assets/imgs/photo20.png";
import photo21 from "../assets/imgs/photo21.png";

const MarqueePage = () => {
  return (
    <div>
      <Marquee className="flex pb-[100px] max-md:pb-[50px]">
        <div className="w-[320px] bg-white rounded-[10px] ml-2.5">
          <img className="mx-auto py-[46px]" src={photo18} alt="photo18" />
          <hr />
          <h4 className="py-5 px-[25px] w-[246px]">
            НМИЦ онкологии им. Н.Н. Блохина
          </h4>
        </div>
        <div className="w-[320px] bg-white rounded-[10px] ml-2.5">
          <img className="mx-auto py-[58px]" src={photo19} alt="photo19" />
          <hr />
          <h4 className="py-5 px-[25px] w-[246px]">
            НМИЦ онкологии им. Н.Н. Блохина
          </h4>
        </div>
        <div className="w-[320px] bg-white rounded-[10px] ml-2.5">
          <img className="mx-auto py-[25px]" src={photo20} alt="photo20" />
          <hr />
          <h4 className="py-5 px-[25px] w-[246px]">
            НМИЦ онкологии им. Н.Н. Блохина
          </h4>
        </div>
        <div className="w-[320px] bg-white rounded-[10px] ml-2.5">
          <img className="mx-auto py-[45px]" src={photo21} alt="photo21" />
          <hr />
          <h4 className="py-5 px-[25px] w-[246px]">
            НМИЦ онкологии им. Н.Н. Блохина
          </h4>
        </div>
        <div className="w-[320px] bg-white rounded-[10px] ml-2.5">
          <img className="mx-auto py-[58px]" src={photo19} alt="photo18" />
          <hr />
          <h4 className="py-5 px-[25px] w-[246px]">
            НМИЦ онкологии им. Н.Н. Блохина
          </h4>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
