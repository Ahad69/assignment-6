import Layout from "@/components/layout/layout";
import ReviewsInput from "@/components/reviewInput";
import MyReviews from "@/components/reviews";
import { addToCart, removeOne } from "@/redux/cartSlice/cartSlice";
import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({ myParts }) => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="sm:w-[1280px] m-auto ">
        <div className="flex flex-col sm:justify-between sm:flex-row ">
          <div className="bg-red-400 sm:w-[440px] flex justify-end">
            <Image
              width={440}
              height={250}
              alt="image1"
              className=""
              src={myParts?.Image?.[0]}
            />
          </div>
          <div className="bg-white sm:w-[840px] py-5 sm:px-10 px-4">
            <h1 className="text-3xl">{myParts?.ProductName}</h1>
            <small className="text-sm">
              Category : {myParts?.Category}{" "}
            </small>{" "}
            <br />
            <small className="text-sm">Status : {myParts?.Status} </small>
            {myParts && (
              <h1 className="text-lg">
                <small>Key Features</small> : <br />
                {Object?.entries(myParts?.KeyFeatures[0]).map(
                  ([key, value]) => (
                    <li key={key}>
                      <small>{key}</small> :{" "}
                      <strong className="text-sm">{value}</strong>
                    </li>
                  )
                )}
              </h1>
            )}
            <br />
            <small className="text-sm flex">
              Ratings :
              <Rate disabled defaultValue={myParts?.AverageRating} />{" "}
            </small>
            <br />
            <h1 className="text-red-600 text-2xl font-bold">
              ${myParts?.Price}
            </h1>
            <div className="flex">
              {" "}
              <button
                className="text-white bg-green-600 px-2"
                onClick={() => dispatch(addToCart(myParts))}
              >
                Add To Cart
              </button>
              {/* <button
                className="text-white bg-cyan-600 px-2 ml-4"
                onClick={() => dispatch(removeOne(myParts))}
              >
                Remove
              </button> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-white sm:p-10 p-4">
          <h1 className="text-2xl font-bold">Description</h1>
          <br />
          <p>{myParts?.Description}</p>
        </div>
        <br />

        <br />
        <div className="bg-white sm:p-10 p-4">
          <h1 className="text-2xl font-bold">Reviews</h1>
          <br />
          <div className="flex justify-between items-center">
            <div className="text-2xl">
              {myParts?.Reviews?.length ? (
                <>
                  {" "}
                  <Rate
                    className="sm:text-4xl"
                    disabled
                    defaultValue={myParts?.AverageRating}
                  />
                  <br className="block sm:hidden" />
                  (Reviews - {myParts?.Reviews?.length})
                </>
              ) : (
                "No Review Yet"
              )}
            </div>
            <ReviewsInput id={myParts?._id} />
          </div>
          <br />
          <br />
          <MyReviews reviews={myParts?.Reviews} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/all`);
  const data = await res.json();

  const paths = data?.data?.map((a) => ({
    params: { id: a._id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/signle-pc/${params.id}`);
  const data = await res.json();

  return {
    props: {
      myParts: data,
    },
    revalidate: 60,
  };
};
