import Image from "next/image";
import React from "react";
import { SlLogin } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { Badge, Input } from "antd";
import style from "./header.module.css";
const { Search } = Input;

const Header = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="w-full">
      <div className="w-[1280px] m-auto flex justify-between items-center">
        <Image
          width={200}
          height={70}
          className="w-[150px] h-[70px]"
          src={"/logo.png"}
          alt="logo"
        />
        <Search
          className="w-[400px]"
          placeholder="Search..."
          onSearch={onSearch}
          size="large"
          enterButton
        />
        <div className="flex justify-between items-center w-[400px]">
          <div className="flex justify-between items-center w-[120px] p-1">
            <SlLogin className="text-2xl" />
            <div>
              <h1 className="font-bold">Account</h1>
              <p className="text-xs">Login/Register</p>
            </div>
          </div>
          <div>
            <button className={style.buildPC}>PC Builder</button>
          </div>

          <Badge size="small" count={0} showZero>
            <BsCart2 className="text-2xl" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
