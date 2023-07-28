import { Rate } from "antd";
import React from "react";

const MyReviews = ({ reviews }) => {
  return (
    <div>
      {reviews?.map((a) => (
        <div key={a?.reviws} className="flex border my-5 p-2">
          <div className="w-[100px]">
            <img className="w-12 rounded-full m-auto" src={a?.user?.image} />
            <h1 className=" text-xs sm:text-base text-center">
              {a?.user?.name}
            </h1>
          </div>
          <div className="ml-4 border-l-2 pl-2">
            <Rate className="sm:text-2xl text-xs" value={a?.rating} />

            <p className="sm:text-2xl mt-3">{a?.reviws}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
