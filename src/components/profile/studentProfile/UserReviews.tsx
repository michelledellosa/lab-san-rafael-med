"use client";
import { bestReviewData } from "@/data/best-review-form";
import GetRatting from "@/hooks/GetRatting";
import { UserReviewType } from "@/interFace/interFace";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UserReviews = () => {
  const [myReviews, setMyReviews] = useState<UserReviewType[]>(bestReviewData);
  const [singleReview, setSingleReview] = useState<Record<string, any>>({});
  const [rating, setRating] = useState<number>(0);
  const [EditActive, setEditActive] = useState<boolean>(false);
  const [updateReview, setUpdateReview] = useState<boolean>(false);
  const [isEditedId, setIsEditedId] = useState<string>("");

  const ratings = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  const handleDeleteReview = (item: UserReviewType) => {
    const remainingReviews = myReviews.filter(
      (itm) => itm._id !== item?._id
    );
    setMyReviews(remainingReviews);
    toast.success("Review Deleted Successfully");
  };

  const handleReviewEdit = (item: UserReviewType) => {
    setEditActive(!EditActive);
    setIsEditedId(item?._id);
    setSingleReview(item);
  };

  const handleResetEdete = () => {
    setEditActive(!EditActive);
    setRating(0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedReviews = myReviews.map((item) =>
      item._id === isEditedId
        ? { ...item, review: event.currentTarget.review.value, rating }
        : item
    );

    setMyReviews(updatedReviews);
    setEditActive(!EditActive);
    setRating(0);
    setUpdateReview(!updateReview);
    toast.success(`Review successfully updated!`);
  };


  return (
    <>
      {myReviews.length ? (
        <div className={`student-profile-reviews ${myReviews.length > 4 ? "scrollbox" : ""}`}>
          {myReviews.map((item) => (
            <div key={item._id} className="student-profile-reviews-item mb-30">
              <div className="student-profile-reviews-course-title">
                <h5>
                  {" "}
                  <Link href={`/shop-details/${item?.productId}`}>
                    {item?.productName
                      ? item?.productName
                      : "Product Name Not Set"}
                  </Link>{" "}
                </h5>
              </div>
              {EditActive && item._id === isEditedId ? (
                <>
                  <form onSubmit={handleSubmit}
                    className="student-profile-reviews-text"
                  >
                    <div className="student-profile-reviews-text-wrap mb-20">
                      {rating === 0 ? (
                        <>
                          <div className="student-profile-review-icon d-flex">
                            {ratings.map((rating) => (
                              <li
                                onClick={() => setRating(rating.id)}
                                key={rating.id}
                              >
                                <span>
                                  <i className="far fa-star"></i>
                                </span>
                              </li>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="student-profile-review-icon">
                            <GetRatting averageRating={rating} />
                          </div>
                        </>
                      )}

                      <div className="student-profile-review-update">
                        <button
                          onClick={() => handleReviewEdit(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>

                    <div className="contact-from-input mb-20">
                      <label htmlFor="Current">Change Review</label>
                      <input
                        id="Current"
                        name="review"
                        type="text"
                        placeholder="Type New Review"
                        defaultValue={item?.review}
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="cont-btn mb-20  mt-10">
                          <button type="submit" className="update-close-btn">
                            Update Review
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="cont-btn mb-20  mt-10">
                          <button
                            onClick={handleResetEdete}
                            className="update-close-btn"
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="student-profile-reviews-text">
                    <div className="student-profile-reviews-text-wrap mb-20">
                      <div className="student-profile-review-icon">
                        <GetRatting averageRating={item?.rating} />
                      </div>
                      <div className="student-profile-review-update d-flex">
                        <button
                          onClick={() => handleReviewEdit(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>
                    <div className="student-profile-review-content">
                      <p>{item?.review}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-center">No Reviews </p>
        </>
      )}
    </>
  );
};

export default UserReviews;
