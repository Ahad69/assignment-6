import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout";
import Cards from "@/components/cards/cards";
import Sliders from "@/components/slider/slider";
import Category from "@/components/categorySection/category";

export default function Home({ myParts, category }) {
  return (
    <>
      <Head>
        <title>My PC Center</title>
        <meta name="description" content="Assignment 6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Sliders />

        <div className="sm:w-[1280px] m-auto">
          <br />
          <br />
          <h1 className="text-center text-4xl text-cyan-900">
            Our Featured Products
          </h1>
          <p className="text-center">Choose best parts for your PC</p>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 overflow-hidden ">
            <Cards parts={myParts} />
          </div>
        </div>

        <Category category={category} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/all");
  const categories = await fetch("http://localhost:5000/all-category");
  const data = await res.json();
  const category = await categories.json();

  return {
    props: {
      myParts: data.data,
      category,
    },
    revalidate: 60,
  };
};
