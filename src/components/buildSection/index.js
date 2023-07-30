import { removeBuilder } from "@/redux/buildPartsSlice/buildSlice";
import { Rate } from "antd";
import Link from "next/link";
import React from "react";
import { BiLogoUnity } from "react-icons/bi";
import { BsKeyboard, BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { CiMonitor } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { MdStorage } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import Image from "next/image";

const BuilderPage = ({ builderData }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between border mb-5 items-center m-2 p-2 ">
        <div className=" text-center">
          <GiProcessor className="text-[100px] m-auto " />
          <h1>
            Processor<span className="text-red-600">*</span>
          </h1>

          {builderData.Processor ? (
            <button
              className="sm:hidden block m-auto mt-2"
              onClick={() => dispatch(removeBuilder("Processor"))}
            >
              <ImCross className="text-red-400" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className=" sm:w-[300px] p-1">
          {builderData.Processor
            ? builderData.Processor.map((a) => (
                <div
                  key={a._id}
                  className="flex flex-col  sm:flex-row sm:justify-between border"
                >
                  <img className="w-24 m-auto sm:m-0" src={a.Image?.[0]} />

                  <div>
                    <h1 className="sm:text-base text-xs">
                      {a.ProductName.slice(0, 20)}
                    </h1>
                    <Rate
                      disabled
                      defaultValue={a?.AverageRating}
                      value={a?.AverageRating}
                    />
                    <h1>${a.Price}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>
        {builderData.Processor ? (
          <button
            className="hidden sm:block"
            onClick={() => dispatch(removeBuilder("Processor"))}
          >
            <ImCross className="text-red-400" />
          </button>
        ) : (
          <Link
            href={"/build-pc/Processor"}
            className="text-white bg-green-400 h-[40px] px-2 rounded font-bold flex items-center"
          >
            Select
          </Link>
        )}
      </div>

      <div className="flex justify-between border mb-5 items-center m-2 p-2">
        <div className=" text-center">
          <BsMotherboard className="text-[100px] m-auto p-2" />
          <h1>
            Motherboard<span className="text-red-600">*</span>
          </h1>

          {builderData.Motherboard ? (
            <button
              className="sm:hidden block m-auto mt-2"
              onClick={() => dispatch(removeBuilder("Motherboard"))}
            >
              <ImCross className="text-red-400" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className=" sm:w-[300px] p-1">
          {builderData.Motherboard
            ? builderData.Motherboard.map((a) => (
                <div
                  key={a._id}
                  className="flex flex-col  sm:flex-row sm:justify-between border"
                >
                  <img className="w-24 m-auto sm:m-0" src={a.Image?.[0]} />

                  <div>
                    <h1 className="sm:text-base text-xs">
                      {a.ProductName.slice(0, 20)}
                    </h1>
                    <Rate
                      disabled
                      defaultValue={a?.AverageRating}
                      value={a?.AverageRating}
                    />
                    <h1>${a.Price}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>
        {builderData.Motherboard ? (
          <button
            className="hidden sm:block"
            onClick={() => dispatch(removeBuilder("Motherboard"))}
          >
            <ImCross className="text-red-400" />
          </button>
        ) : (
          <Link
            href={"/build-pc/Motherboard"}
            className="text-white bg-green-400 h-[40px] px-2 rounded font-bold flex items-center"
          >
            Select
          </Link>
        )}
      </div>
      <div className="flex justify-between border mb-5 items-center m-2 p-2">
        <div className=" text-center">
          <CgSmartphoneRam className="text-[100px] m-auto" />
          <h1>
            RAM<span className="text-red-600">*</span>
          </h1>
          {builderData.RAM ? (
            <button
              className="sm:hidden block m-auto mt-2"
              onClick={() => dispatch(removeBuilder("RAM"))}
            >
              <ImCross className="text-red-400" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className=" sm:w-[300px] p-1">
          {builderData.RAM
            ? builderData.RAM.map((a) => (
                <div
                  key={a._id}
                  className="flex flex-col  sm:flex-row sm:justify-between border"
                >
                  <img className="w-24 m-auto sm:m-0" src={a.Image?.[0]} />

                  <div>
                    <h1 className="sm:text-base text-xs">
                      {a.ProductName.slice(0, 20)}
                    </h1>
                    <Rate
                      disabled
                      defaultValue={a?.AverageRating}
                      value={a?.AverageRating}
                    />
                    <h1>${a.Price}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>

        {builderData.RAM ? (
          <button
            className="hidden sm:block"
            onClick={() => dispatch(removeBuilder("RAM"))}
          >
            <ImCross className="text-red-400" />
          </button>
        ) : (
          <Link
            href={"/build-pc/RAM"}
            className="text-white bg-green-400 h-[40px] px-2 rounded font-bold flex items-center"
          >
            Select
          </Link>
        )}
      </div>
      <div className="flex justify-between border mb-5 items-center m-2 p-2">
        <div className=" text-center">
          <BiLogoUnity className="text-[100px] m-auto" />
          <h1>
            {" "}
            Power Supply<span className="text-red-600">*</span>
          </h1>{" "}
          {builderData.PowerSupplyUnit ? (
            <button
              className="sm:hidden block m-auto mt-2"
              onClick={() => dispatch(removeBuilder("PowerSupplyUnit"))}
            >
              <ImCross className="text-red-400" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className=" sm:w-[300px] p-1">
          {builderData.PowerSupplyUnit
            ? builderData.PowerSupplyUnit.map((a) => (
                <div
                  key={a._id}
                  className="flex flex-col  sm:flex-row sm:justify-between border"
                >
                  <img className="w-24 m-auto sm:m-0" src={a.Image?.[0]} />

                  <div>
                    <h1 className="sm:text-base text-xs">
                      {a.ProductName.slice(0, 20)}
                    </h1>
                    <Rate
                      disabled
                      defaultValue={a?.AverageRating}
                      value={a?.AverageRating}
                    />
                    <h1>${a.Price}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>

        {builderData.PowerSupplyUnit ? (
          <button
            className="hidden sm:block"
            onClick={() => dispatch(removeBuilder("PowerSupplyUnit"))}
          >
            <ImCross className="text-red-400" />
          </button>
        ) : (
          <Link
            href={"/build-pc/PowerSupplyUnit"}
            className="text-white bg-green-400 h-[40px] px-2 rounded font-bold flex items-center"
          >
            Select
          </Link>
        )}
      </div>
      <div className="flex justify-between border mb-5 items-center m-2 p-2">
        <div className="text-center">
          <MdStorage className="text-[100px] m-auto" />
          <h1>
            Storage Device<span className="text-red-600">*</span>
          </h1>
          {builderData.StorageDevice ? (
            <button
              className="sm:hidden block m-auto mt-2"
              onClick={() => dispatch(removeBuilder("StorageDevice"))}
            >
              <ImCross className="text-red-400" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className=" sm:w-[300px] p-1">
          {builderData.StorageDevice
            ? builderData.StorageDevice.map((a) => (
                <div
                  key={a._id}
                  className="flex flex-col  sm:flex-row sm:justify-between border"
                >
                  <img className="w-24 m-auto sm:m-0" src={a.Image?.[0]} />

                  <div>
                    <h1 className="sm:text-base text-xs">
                      {a.ProductName.slice(0, 20)}
                    </h1>
                    <Rate
                      disabled
                      defaultValue={a?.AverageRating}
                      value={a?.AverageRating}
                    />
                    <h1>${a.Price}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>
        {builderData.StorageDevice ? (
          <button
            className="hidden sm:block"
            onClick={() => dispatch(removeBuilder("StorageDevice"))}
          >
            <ImCross className="text-red-400" />
          </button>
        ) : (
          <Link
            href={"/build-pc/StorageDevice"}
            className="text-white bg-green-400 h-[40px] px-2 rounded font-bold flex items-center"
          >
            Select
          </Link>
        )}
      </div>
      <div className="flex justify-between border mb-5 items-center m-2 p-2">
        <div className=" text-center">
          <CiMonitor className="text-[100px] m-auto" />
          <h1>
            Monitor<span className="text-red-600">*</span>
          </h1>
          {builderData.Monitor ? (
            <button
              className="sm:hidden block m-auto mt-2"
              onClick={() => dispatch(removeBuilder("Monitor"))}
            >
              <ImCross className="text-red-400" />
            </button>
          ) : (
            ""
          )}
        </div>{" "}
        <div className=" sm:w-[300px] p-1">
          {builderData.Monitor
            ? builderData.Monitor.map((a) => (
                <div
                  key={a._id}
                  className="flex flex-col  sm:flex-row sm:justify-between border"
                >
                  <Image
                    width={24}
                    height={50}
                    alt=""
                    className="w-24 m-auto sm:m-0"
                    src={a.Image?.[0]}
                  />

                  <div>
                    <h1 className="sm:text-base text-xs">
                      {a.ProductName.slice(0, 20)}
                    </h1>
                    <Rate
                      disabled
                      defaultValue={a?.AverageRating}
                      value={a?.AverageRating}
                    />
                    <h1>${a.Price}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>
        {builderData.Monitor ? (
          <button
            className="hidden sm:block"
            onClick={() => dispatch(removeBuilder("Monitor"))}
          >
            <ImCross className="text-red-400" />
          </button>
        ) : (
          <Link
            href={"/build-pc/Monitor"}
            className="text-white bg-green-400 h-[40px] px-2 rounded font-bold flex items-center"
          >
            Select
          </Link>
        )}
      </div>
    </div>
  );
};

export default BuilderPage;
