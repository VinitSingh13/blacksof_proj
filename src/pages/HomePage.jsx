import Form from "../components/Form";
import Navbar from "../components/Navbar";
import oppo from "../image/oppo.png";
import apple from "../image/apple.png";
import boat from "../image/boat.png";
import logo from "../image/logo.png";
import tcs from "../image/tcs.png";
import zepto from "../image/zepto.png";
import lenskart from "../image/lenskart.png";
import wipro from "../image/wipro.png";
import swiggy from "../image/swiggy.png";
import amazon from "../image/amazon.png";

const LOGOS = [
  <img src={oppo} alt="" className="w-20" />,
  <img src={tcs} alt="" className="w-20" />,
  <img src={apple} alt="" className="w-20" />,
  <img src={boat} alt="" className="w-20" />,
  <img src={logo} alt="" className="w-20" />,
  <img src={zepto} alt="" className="w-20" />,
  <img src={lenskart} alt="" className="w-20" />,
  <img src={wipro} alt="" className="w-20" />,
  <img src={swiggy} alt="" className="w-20" />,
  <img src={amazon} alt="" className="w-20" />,
];

const HomePage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center h-1/5">
        <Navbar />
      </div>

      <div className="flex flex-col items-center xl:flex xl:flex-row xl:h-[70%]">
        <div className="flex flex-col flex-1 text-white justify-center text-4xl pl-20 pr-10 leading-snug">
          <p>
            Searching for <span className="font-extrabold">Augmented </span>
            <span className="inline-block font-extrabold xl:block xl:font-extrabold">Development </span>
            <span className="inline-block">Teams To</span>
            <span className="">Steer your product</span>
            <span className="">towards triumph?"</span>
          </p>

          <div className="flex justify-between pt-6">
            <div className="flex flex-col">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs">Client</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">80+</p>
              <p className="text-xs">Projects successfully</p>
              <p className="text-xs">completed</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">60%</p>
              <p className="text-xs">client converted into</p>
              <p className="text-xs">longterm engagement partner</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 h-2/4">
          <Form />
        </div>
      </div>
      <div className="pt-8">
        <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(250px*10)]">
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
