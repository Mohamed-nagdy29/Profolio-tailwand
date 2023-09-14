import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

import imag from "./assiant/dev-ed-wave.png";
import ho from "./assiant/design.png";
import co from "./assiant/consulting.png";
import de from "./assiant/code.png";
import img1 from "./assiant/web1.png";
import img2 from "./assiant/web2.png";
import img3 from "./assiant/web3.png";
import img4 from "./assiant/web4.png";
import img5 from "./assiant/web5.png";
import img6 from "./assiant/web6.png";
import { useState } from "react";

const Home = () => {
  const [darakMode, setdarakMode] = useState(false);
  return (
    <>
      <div className={darakMode ? "dark" : ""}>
        <main className="dark:bg-gray-900 bg-slate-400 ">
          <section className="py-10 ">
            <nav className="px-48 flex-col flex top-0 md:flex-row items-center md:t justify-between pb-9  fixed mx-auto left-0 right-0 gap-7">
              <h1 className="font-bold text-[25px] dark:text-stone-600">
                developed
              </h1>
              <ul className="flex items-center ">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setdarakMode(!darakMode)}
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="  bg-gradient-to-r from-cyan-500 to-teal-700 text-white py-4 px-5 ml-4"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl font-bold text-teal-600 py-3">Nagdy</h2>
              <h3 className="text-3xl py-3 font-medium dark:text-amber-700">
                Developer Web
              </h3>
              <p className="leading-8 py-4 mx-auto font-normal text-gray-600 max-w-lg dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                quia tempora! Laudantium natus delectus iure velit corporis?
                Explicabo, ut quos.
              </p>
            </div>
            <div className="text-4xl flex justify-center gap-9 text-gray-700 rounded-full py-4">
              <AiFillFacebook />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative bg-gradient-to-r from-cyan-500 to-teal-700 w-80 h-80 rounded-full py-8 mx-auto">
              <img src={imag} alt="imge" />
            </div>
          </section>
          <section>
            <div className="text-center py-5">
              <h2 className="text-3xl font-medium dark:text-yellow-800">
                Service ! offer
              </h2>
              <p className="py-3 text-gray-500 max-w-lg mx-auto dark:text-yellow-50">
                Lorem ipsum dolor sit amet{" "}
                <span className="text-teal-500">consectetur</span> adipisicing
                elit. Nisi aperiam delectus ipsum architecto illo earum
                explicabo dolorum deleniti dicta mollitia!
              </p>
            </div>
            <div className="lg:flex gap-11 px-48 dark:bg-white">
              <div className=" text-center shadow-xl rounded-xl my-10 flex flex-col items-center">
                <img src={ho} alt="Image" width={100} height={100} />
                <h3 className="py-3 text-2xl font-medium">Beautifal Designs</h3>
                <p className="py-2 max-w-md mx-auto text-gray-800 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  nulla?
                </p>
                <h4 className="py-1 text-teal-400">Design tools</h4>
                <p className="py-1 text-gray-500">Html</p>
                <p className="py-1 text-gray-500">css</p>
                <p className="py-1 text-gray-500">sass</p>
              </div>
              <div className=" text-center shadow-xl rounded-xl my-10 flex flex-col items-center">
                <img src={de} alt="Image" width={100} height={100} />
                <h3 className="py-3 text-2xl font-medium">Beautifal Designs</h3>
                <p className="py-2 max-w-md mx-auto text-gray-800 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  nulla?
                </p>
                <h4 className="py-1 text-teal-400">Design tools</h4>
                <p className="py-1 text-gray-500">Html</p>
                <p className="py-1 text-gray-500">css</p>
                <p className="py-1 text-gray-500">sass</p>
              </div>
              <div className=" text-center shadow-xl rounded-xl my-10 flex flex-col items-center">
                <img src={co} alt="Image" width={100} height={100} />
                <h3 className="py-3 text-2xl font-medium">Beautifal Designs</h3>
                <p className="py-2 max-w-md mx-auto text-gray-800 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  nulla?
                </p>
                <h4 className="py-1 text-teal-400">Design tools</h4>
                <p className="py-1 text-gray-500">Html</p>
                <p className="py-1 text-gray-500">css</p>
                <p className="py-1 text-gray-500">sass</p>
              </div>
            </div>
          </section>

          <section className="py-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold py-5">Portofolio</h2>
              <p className="font-medium text-gray-400 max-w-6xl mx-auto leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora, ullam architecto! Libero, deleniti ipsa accusantium
                provident mollitia numquam nam voluptates, quos accusamus, odio
                ad nisi consequuntur saepe culpa adipisci voluptatibus?
              </p>
            </div>
            <div className="flex flex-col gap-11 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1" width={"100%"} height={"100%"}>
                <img src={img1} alt="" />
              </div>
              <div className="basis-1/3 flex-1" width={"100%"} height={"100%"}>
                <img src={img2} alt="" />
              </div>
              <div className="basis-1/3 flex-1" width={"100%"} height={"100%"}>
                <img src={img3} alt="" />
              </div>
              <div className="basis-1/3 flex-1" width={"100%"} height={"100%"}>
                <img src={img4} alt="" />
              </div>
              <div className="basis-1/3 flex-1" width={"100%"} height={"100%"}>
                <img src={img5} alt="" />
              </div>
              <div className="basis-1/3 flex-1" width={"100%"} height={"100%"}>
                <img src={img6} alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
