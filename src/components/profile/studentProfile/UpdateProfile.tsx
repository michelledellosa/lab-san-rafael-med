"use client";
import React from "react";
import ProfileBgImg from "../../../../public/assets/img/bg/course-slider.png";
import UserIcon from "../../../../public/assets/img/icon/user-icon.png";
import Image from "next/image";
import UserProfileUpdate from "@/form/profile-update-form";
import RestPasswordForm from "@/form/user-reset-from";

const UpdateProfile = () => {
  return (
    <>
      <div className="student-profile-enroll">
        <ul className="nav mb-50" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="profileA-tab"
              data-bs-toggle="tab"
              data-bs-target="#profileA"
              type="button"
              role="tab"
              aria-controls="profileA"
              aria-selected="true"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="password-tab"
              data-bs-toggle="tab"
              data-bs-target="#password"
              type="button"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              Change Password
            </button>
          </li>
        </ul>
        <div className="tab-content mt-30" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="profileA"
            role="tabpanel"
            aria-labelledby="profileA-tab"
          >
            <div className="student-profile-settings">
              <div className="student-profile-setting-img mb-40">
                <div
                  className="student-profile-setting-cover-img"
                  style={{ backgroundImage: `url(${ProfileBgImg.src})` }}
                ></div>
                <div className="student-profile-setting-author-img upload-profile-pic">
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={UserIcon}
                    alt="img not found"
                  />

                </div>
              </div>
              <UserProfileUpdate />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <RestPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
