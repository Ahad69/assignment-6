import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import { Checkbox } from "antd";
import Cards from "@/components/cards/cards";
import style from "../../styles/category.module.css";
import { useRouter } from "next/router";

const CheckboxGroup = Checkbox.Group;
const options = [
  { label: "Stock In", value: "true" },
  { label: "Stock Out", value: "false" },
];

const BuilderCategory = ({ myParts }) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");

  const handleCheckboxChange = (checkedValues) => {
    router.push(
      `/build-pc/${
        router?.query?.category?.split("&")[0]
      }&sort=${checkedValues}`
    );
    setSelectedValue(checkedValues.length === 1 ? checkedValues[0] : "");
  };

  return (
    <Layout>
      <div className={style.container}>
        <div className="bg-white w-11/12 sm:w-[300px] sm:m-0 m-auto">
          <div className="p-2">
            <h1 className="text-lg font-bold">Stock</h1>
            <hr />

            <CheckboxGroup
              options={options}
              value={selectedValue}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="sm:w-[1000px]">
          <div className="bg-white mb-5 h-[40px] flex justify-between items-center px-2">
            <p className="font-bold">
              {router?.query?.category?.split("&")[0]}
            </p>
            <p className="">
              Showing Items - <b>{myParts?.length}</b>{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 overflow-hidden pb-10">
            <Cards parts={myParts} params={router?.asPath?.split("/")[1]} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuilderCategory;

export async function getServerSideProps({ params }) {
  const sort = params?.category?.split("&")[1];

  const res = await fetch(
    `http://localhost:5000/category?cat=${params.category}&stock=${sort}`
  );
  const posts = await res.json();

  return {
    props: { myParts: posts },
  };
}
