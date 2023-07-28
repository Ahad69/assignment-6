import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import style from "../styles/category.module.css";
import Cards from "@/components/cards/cards";
import { useRouter } from "next/router";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const Category = ({ myParts }) => {
  const router = useRouter();

  const [value, setValue] = useState(0);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Other", value: "other" },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleCheckboxChange = (checkedValues) => {
    setSelectedValue(checkedValues.length === 1 ? checkedValues[0] : "");
  };

  return (
    <Layout>
      <div className={style.container}>
        <div className="bg-white w-[300px] overflow-hidden">
          <div className="p-2">
            <h1 className="text-lg font-bold">Stock</h1>
            <hr />
            <CheckboxGroup
              options={options}
              value={[selectedValue]}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="w-[1000px]">
          <div className="bg-white mb-5 h-[40px] flex justify-between items-center px-2">
            <p className="font-bold">{router.query.category}</p>
            <p className="">
              Showing Items - <b>{myParts.length}</b>{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 overflow-hidden pb-10">
            <Cards parts={myParts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/`);
  const data = await res.json();

  const paths = data?.data?.map((a) => ({
    params: { category: a.Category.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/category?cat=${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      myParts: data,
    },
    revalidate: 60,
  };
};
