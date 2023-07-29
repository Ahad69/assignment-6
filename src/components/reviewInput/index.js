import React, { useState } from "react";
import { Input, Modal, Rate, message } from "antd";
import { useSession } from "next-auth/react";
import axios from "axios";
const { TextArea } = Input;

const ReviewsInput = ({ id }) => {
  const { data: session } = useSession();
  const [value, setValue] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = async () => {
    const review = {
      rating: value,
      reviws: reviewText,
      user: session.user,
    };

    try {
      const response = await axios.post(
        `https://assignment-6-backend.vercel.app/review/${id}`,
        review
      );

      message.open({
        type: "success",
        content: "Review Added Successfully",
      });
      setValue(0);
      setReviewText("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {session?.user?.email ? (
        <button
          className="text-white bg-cyan-600 px-5 rounded font-bold"
          onClick={showModal}
        >
          Review Now
        </button>
      ) : (
        <button className="text-gray-400 bg-gray-300 px-5 rounded font-bold">
          Review Now
        </button>
      )}

      <Modal
        title="Review Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        cancelButtonProps={{ hidden: true }}
        onOk={handleOk}
        footer={[
          <button
            key="submit"
            className="bg-red-500 px-2 text-white"
            onClick={handleOk}
          >
            Submit
          </button>,
        ]}
      >
        <Rate
          className="text-orange-500"
          allowHalf
          defaultValue={5}
          onChange={setValue}
          value={value}
        />
        <TextArea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows={4}
        />
      </Modal>
    </div>
  );
};

export default ReviewsInput;
