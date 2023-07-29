import { Collapse, Dropdown, Menu } from "antd";
import React from "react";
import style from "./nav.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const menu = [
    { key: 1, name: "Processor", value: "Processor" },
    { key: 2, name: "Motherboard", value: "Motherboard" },
    { key: 3, name: "RAM", value: "RAM" },
    { key: 4, name: "Power Supply Unit", value: "PowerSupplyUnit" },
    { key: 5, name: "Storage Device", value: "StorageDevice" },
    { key: 6, name: "Monitor", value: "Monitor" },
    { key: 7, name: "Others", value: "Others" },
  ];

  const onSelectMenu = (value) => {
    console.log(value);

    router.push(`/${value}`);
  };

  return (
    <div className="shadow-lg shadow-blue-800/20  z-50 mb-3">
      <ul className="sm:w-[1280px] m-auto  h-[50px]  font-bold flex items-center">
        <div className={style.dropdown}>
          <span>Categories</span>
          <ul class={style.dropdownContent}>
            {menu.map((a) => (
              <li
                className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                onClick={() => onSelectMenu(a.value)}
                key={a.key}
              >
                {a.name}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
