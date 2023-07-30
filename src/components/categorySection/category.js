import React from "react";
import { BsKeyboard, BsMotherboard } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { CgSmartphoneRam } from "react-icons/cg";
import { BiLogoUnity } from "react-icons/bi";
import { MdStorage } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const Category = ({ category }) => {
  return (
    <div className="w-[350px] sm:w-[800px] m-auto mb-5">
      <br />
      <br />
      <h1 className="text-center text-4xl text-cyan-900">
        Our Featured Categories
      </h1>
      <p className="text-center">Choose best parts for your PC</p>
      <br />
      <div className="flex flex-wrap justify-center gap-5">
        {category.map((a) => (
          <Link
            key={a?.id}
            href={`/${a?.value}`}
            className="w-[180px] border hover:border-cyan-900  grayscale hover:grayscale-0  hover:text-cyan-900 cursor-pointer"
          >
            <Image
              width={150}
              height={100}
              alt=""
              src={a.image}
              className="w-[150px] m-auto h-[100px]  "
            />
            <h1 className=" text-center font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
              {a.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
