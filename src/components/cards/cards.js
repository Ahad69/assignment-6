import { Card } from "antd";
import React from "react";
import RatingStar from "../rating/ratingStar";
import Image from "next/image";

const Cards = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((a) => (
        <Card
          key={a._id}
          hoverable
          className="w-[300px] m-auto "
          cover={
            <Image
              alt=""
              height={150}
              width={550}
              className="p-5  hover:scale-110 overflow-hidden   ease-in duration-300 h-[200px] "
              src={a.Image?.[0]}
            />
          }
        >
          <h1 className="mb-2 text-xl">{a.ProductName.slice(0, 40)}</h1>
          <div className="flex justify-between items-center">
            <p>{a.Category}</p>
            <RatingStar rating={4} size={"large"} />
          </div>
          <br />
          <b className="text-orange-600 text-xl">${a.Price}</b>
        </Card>
      ))}
    </>
  );
};

export default Cards;
