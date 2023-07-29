import { Badge, Card, Rate } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBuilder } from "@/redux/buildPartsSlice/buildSlice";

const Cards = ({ parts, params }) => {
  const dispatch = useDispatch();
  return (
    <>
      {parts?.map((a) => (
        <Badge.Ribbon
          key={a._id}
          text={a?.Status}
          color={a?.Status == "Stock Out" ? "red" : "green"}
        >
          {params ? (
            <Card
              hoverable
              className="w-[300px] m-auto "
              cover={
                <Image
                  alt=""
                  height={150}
                  width={550}
                  className="p-5  hover:scale-110 overflow-hidden   ease-in duration-300 h-[250px] "
                  src={a.Image?.[0]}
                />
              }
            >
              <h1 className="mb-2 text-xl">{a.ProductName.slice(0, 40)}</h1>
              <div className="flex justify-between items-center">
                <p>{a.Category}</p>
                <Rate disabled defaultValue={a?.AverageRating} />
              </div>
              <br />
              <b className="text-orange-600 text-xl">${a.Price}</b>

              <Link
                className="bg-cyan-500 px-2 p-1 ml-16 text-white hover:text-white rounded"
                onClick={() =>
                  dispatch(addToBuilder({ category: a.Category, product: a }))
                }
                href={"/build-pc"}
              >
                Add To Builder{" "}
              </Link>
            </Card>
          ) : (
            <Link href={`/products/${a._id}`}>
              <Card
                hoverable
                className="w-[350px] sm:w-[300px] m-auto "
                cover={
                  <Image
                    alt=""
                    height={150}
                    width={550}
                    className="p-5  hover:scale-110 overflow-hidden   ease-in duration-300 sm:h-[250px] "
                    src={a.Image?.[0]}
                  />
                }
              >
                <h1 className="mb-2 text-xl">{a.ProductName.slice(0, 40)}</h1>
                <div className="flex justify-between items-center">
                  <p>{a.Category}</p>
                  <Rate disabled defaultValue={a?.AverageRating} />
                </div>
                <br />
                <b className="text-orange-600 text-xl">${a.Price}</b>
              </Card>
            </Link>
          )}
        </Badge.Ribbon>
      ))}
    </>
  );
};

export default Cards;
