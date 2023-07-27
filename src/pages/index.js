import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout";
import Cards from "@/components/cards/cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ myParts }) {
  return (
    <>
      <Head>
        <title>My PC Center</title>
        <meta name="description" content="Assignment 6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" />
        <Cards parts={myParts} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/");
  const data = await res.json();

  return {
    props: {
      myParts: data.data,
    },
    revalidate: 60,
  };
};
