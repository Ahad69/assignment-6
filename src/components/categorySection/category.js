import React from "react";
import { BsKeyboard, BsMotherboard } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { CgSmartphoneRam } from "react-icons/cg";
import { BiLogoUnity } from "react-icons/bi";
import { MdStorage } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import Link from "next/link";

const Category = () => {
  return (
    <div className="w-[350px] sm:w-[700px] m-auto mb-5">
      <br />
      <br />
      <h1 className="text-center text-4xl text-cyan-900">
        Our Featured Categories
      </h1>
      <p className="text-center">Choose best parts for your PC</p>
      <br />
      <div className="flex flex-wrap justify-center gap-5">
        <Link
          href={"/Processor"}
          className="w-[150px] border hover:border-cyan-900  hover:text-cyan-900 cursor-pointer"
        >
          <GiProcessor className="text-[100px] m-auto " />
          <h1 className=" text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
            Processor
          </h1>
        </Link>
        <Link
          href={"/Motherboard"}
          className="w-[150px] border hover:border-cyan-900  hover:text-cyan-900  cursor-pointer"
        >
          <BsMotherboard className="text-[100px] m-auto p-2" />
          <h1 className="text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-900">
            Motherboard
          </h1>
        </Link>
        <Link
          href={"/RAM"}
          className="w-[150px] border hover:border-cyan-900  hover:text-cyan-900 cursor-pointer"
        >
          <CgSmartphoneRam className="text-[100px] m-auto" />
          <h1 className="text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-900">
            RAM
          </h1>
        </Link>
        <Link
          href={"/PowerSupplyUnit"}
          className="w-[150px] border hover:border-cyan-900  hover:text-cyan-900 cursor-pointer"
        >
          <BiLogoUnity className="text-[100px] m-auto" />
          <h1 className="text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-600">
            Power Supply Unit
          </h1>
        </Link>
        <Link
          href={"/StorageDevice"}
          className="w-[150px] border hover:border-cyan-900  hover:text-cyan-900 cursor-pointer"
        >
          <MdStorage className="text-[100px] m-auto" />
          <h1 className="text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
            Storage Device
          </h1>
        </Link>
        <Link
          href={"/Monitor"}
          className="w-[150px] border hover:border-cyan-900  hover:text-cyan-900 cursor-pointer"
        >
          <CiMonitor className="text-[100px] m-auto" />
          <h1 className="text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-900">
            Monitor
          </h1>
        </Link>
        <Link
          href={"/Others"}
          className="w-[150px] border hover:border-cyan-900 hover:text-cyan-900 cursor-pointer"
        >
          <BsKeyboard className="text-[100px] m-auto" />
          <h1 className="text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-600">
            Others
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Category;
