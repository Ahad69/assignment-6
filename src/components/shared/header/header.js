import Image from "next/image";
import React from "react";
import { SlLogin } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { Badge, Input } from "antd";
import style from "./header.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const { Search } = Input;
import { useSelector } from "react-redux";

const Header = () => {
  const onSearch = (value) => console.log(value);
  const { data: session } = useSession();
  const { cart } = useSelector((state) => state.cart);

  const totalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <div className="w-full">
      <div className="sm:w-[1280px] m-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            width={200}
            height={70}
            className="w-[250px] sm:w-[150px] h-[70px]"
            src={"/logo.png"}
            alt="logo"
          />
        </Link>
        <Search
          className="w-[400px] hidden sm:block"
          placeholder="Search..."
          onSearch={onSearch}
          size="large"
          enterButton
        />
        <div className="flex justify-between items-center w-[400px]">
          <Link href={"/login"} className="hidden sm:block">
            <div className="flex justify-between items-center w-[120px] p-1">
              {session ? (
                <>
                  <img className="w-12 rounded-full" src={session.user.image} />
                  <div className="ml-1">
                    <h1 className="font-bold">
                      {session?.user?.name?.split(" ")[0]}
                    </h1>
                    <p className="text-xs" onClick={() => signOut()}>
                      Log Out
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <SlLogin className="text-2xl" />
                  <div>
                    <h1 className="font-bold">Account</h1>
                    <p className="text-xs">Login/Register</p>
                  </div>
                </>
              )}
            </div>
          </Link>
          <div className="ml-20 sm:ml-0">
            <Link href={"/build-pc"}>
              <button className={style.buildPC}>PC Builder</button>
            </Link>
          </div>

          <Badge
            size="small"
            count={totalQuantity}
            showZero
            className="cursor-pointer hidden sm:block"
          >
            <BsCart2 className="text-2xl" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
