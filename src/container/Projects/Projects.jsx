import React from "react";
import { Link } from "react-router-dom";
import pic3 from "../../../src/pictures/img3.jpeg";
import pic5 from "../../../src/pictures/img5.jpeg";
import pic4 from "../../../src/pictures/img4.jpeg";
import pic2 from "../../../src/pictures/img2.jpeg";
import { Footer2,Header } from "../../components";

const Projects = () => {
  return (
    <div >
    <section>
      <Header/>
    </section>
      <div
        style={{ backgroundImage: `url(${pic3})` }}
        className=" min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
      >
        <div className=" bg-black  absolute inset-0  h-[350px] md:h-[400px]  lg:h-[500px]     opacity-70">
          <div className=" pt-[40%] md:pt-[20%] lg:pt-[15%] sl:pt-[10%] text-center">
            <h2 className=" text-white lg:text-[7rem] text-[3rem] md:text-[5rem] font-bold">
              {" "}
              Projects
            </h2>
          </div>
        </div>
      </div>
       <section className="bg-[#f2f2f2]">
         <div className=" py-10  ">
        <div className=" pt-20 px-6 ">
        <div className="  grid  md:grid-cols-2  gap-6   sl:px-0  m-auto  ">
          <Link to="/ProjectPost1">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic3}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px] "
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost1">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic4}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px] "
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost1">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic5}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px] "
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost1">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic2}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px] "
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost1">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic5}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px] "
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/ProjectPost1">
            <div className="relative ">
              <div className="  ">
                <img
                  src={pic3}
                  alt=""
                  className=" w-full h-[250px] lg:h-[500px] "
                />
                <div className=" flex justify-center">
                  <div className=" absolute  top-[30%]  z-10]  text-center  bg-black opacity-70  hover:bg-white text-white cursor-pointer hover:text-black py-2 px-2  lg:pr-3 sl:px-10 sl:py-4  rounded-md">
                    <h2 className=" text-xl  lg:text-3xl sl:text-4xl pl-4 pt-6 pb-1 font-semibold">
                      The Petronas Twin Towers
                    </h2>
                    <p className=" text-[0.8rem] lg:text-[0.9rem] pl-6  pt-2">
                      HIGH LINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      </div>
       </section>
      <section>
        <Footer2/>
      </section>
    </div>
  );
};

export default Projects;
