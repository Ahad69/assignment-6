import { Dropdown, Menu } from "antd";
import React from "react";

const Navbar = () => {
  const onClick = ({ key }) => {
    console.log(key);
    // router.push(`/services/${key}`);
  };

  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Categories", "sub1", [
      getItem("CPU/Processor", "CPU/Processor"),
      getItem("Motherboard", "Motherboard"),
      getItem("RAM", "RAM"),
      getItem("Power Supply Unit", "Power Supply Unit"),
      getItem("Storage Device", "Storage Device"),
      getItem("Monitor", "Monitor"),
      getItem("Others", "Others"),
    ]),
  ];

  return (
    <div className="shadow-lg shadow-blue-800/20  z-50 mb-3">
      <ul className="w-[1280px] m-auto  h-[50px]  font-bold">
        <Menu
          theme={"white"}
          className="bg-white"
          onClick={onClick}
          style={{
            width: 256,
          }}
          mode="inline"
          items={items}
        />
      </ul>
    </div>
  );
};

export default Navbar;
