import React, { useState } from "react";
import { toast } from "react-toastify";
import { commentData } from "@/data/comment-data";
import { CommentType } from "@/interFace/interFace";
import Link from "next/link";

const UserComments = () => {
  const [myComments, setMyComments] = useState<CommentType[]>(commentData);
  const [isEditActive, setIsEditActive] = useState<boolean>(false);
  const [updateComment, setUpdateComment] = useState<boolean>(false);
  const [isEditComment, setIsEditComment] = useState<string>("");

  const handleDeleteReview = (item: CommentType) => {
    const remainingComments = myComments.filter(
      (itm) => itm._id !== item?._id
    );
    setMyComments(remainingComments);
    toast.success("Comment Deleted");
  }

  const handleActiveEdete = (item: CommentType) => {
    setIsEditActive(!isEditActive);
    setIsEditComment(item?._id);
  };

  const handleResetEdete = () => {
    setIsEditActive(!isEditActive);
  };

  const handleCoomentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedComments = myComments.map((item) =>
      item._id === isEditComment
        ? { ...item, comment: event.currentTarget.comment.value }
        : item
    );

    setMyComments(updatedComments);
    setIsEditActive(!isEditActive);
    setUpdateComment(!updateComment);
    toast.success(`Comment successfully updated!`);
  };


  return (
    <>
      {myComments.length ? (
        <div className={`student-profile-reviews ${myComments.length > 4 ? "scrollbox" : ""}`}>
          {myComments.map((item) => (
            <div key={item._id} className="student-profile-reviews-item mb-30">
              <div className="student-profile-reviews-course-title">
                <h5>
                  {" "}
                  <Link href={`/blog-details/${item?.postId}`}>
                    {item?.title ? item?.title : "Blog Name Not Set"}
                  </Link>{" "}
                </h5>
              </div>
              {isEditActive && item._id === isEditComment ? (
                <>
                  <form onSubmit={handleCoomentSubmit} className="student-profile-reviews-text">
                    <div className="student-profile-reviews-text-wrap mb-20">
                      <div className="student-profile-review-icon">
                        <p>{item?.date}</p>
                      </div>
                      <div className="student-profile-review-update">
                        <button
                          onClick={() => handleActiveEdete(item)}
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
                      <label htmlFor="Current">Update Comment</label>
                      <input
                        id="Current"
                        name="comment"
                        type="text"
                        placeholder="Type New Comment"
                        defaultValue={item?.comment}
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="cont-btn mb-20  mt-10">
                          <button type="submit" className="update-close-btn">
                            Update Comment
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
                        <p>{item?.date}</p>
                      </div>
                      <div className="student-profile-review-update d-flex">
                        <button
                          onClick={() => handleActiveEdete(item)}
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
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-center">No comments </p>
        </>
      )}
    </>
  );
};

export default UserComments;
