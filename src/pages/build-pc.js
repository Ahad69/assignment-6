import BuilderPage from "@/components/buildSection";
import Layout from "@/components/layout/layout";
import { message } from "antd";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const BuildPc = () => {
  const { builders } = useSelector((state) => state.builderState);
  const getTotalPrice = (data) => {
    let totalPrice = 0;

    Object.values(data).forEach((categoryArray) => {
      categoryArray.forEach((item) => {
        if (item?.Price) {
          totalPrice += item?.Price;
        }
      });
    });

    return totalPrice;
  };

  const totalPrice = getTotalPrice(builders);
  const categoryCount = Object.keys(builders).length;
  console.log(categoryCount);
  return (
    <Layout>
      <div className="sm:w-[1200px] m-auto bg-white">
        <div className="flex sm:justify-between items-center ">
          <Image
            width={200}
            height={80}
            alt="logo"
            className="w-[200px]"
            src="/logo.png"
          />
          <div className="w-[180px] border text-center h-[80px] text-black rounded">
            Parts Selected : {categoryCount}
            <br />
            Total Price : ${totalPrice} <br />
            {categoryCount > 5 ? (
              <button
                className="bg-green-500 text-white  px-2"
                onClick={() =>
                  message.open({
                    type: "success",
                    content: "Successfully Added All Part To Build A PC",
                  })
                }
              >
                Complete Build
              </button>
            ) : (
              <button className="bg-gray-600 px-2 text-gray-300">
                Complete Build
              </button>
            )}
          </div>
        </div>
        <hr />
        <div>
          <BuilderPage builderData={builders} />
        </div>
      </div>
    </Layout>
  );
};

export default BuildPc;
