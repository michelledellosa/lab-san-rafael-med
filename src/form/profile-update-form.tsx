
import NiceSelect from "@/components/common/NiceSelect";
import React from "react";

const UserProfileUpdate = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const genderData = [
        { id: 1, option: "female" },
        { id: 2, option: "male" },
    ]
    const selectHandler = () => { }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-from-input mb-20">
                            <label htmlFor="FirstName">First Name</label>
                            <input
                                id="FirstName"
                                type="text"
                                placeholder="First Name"
                                defaultValue={"Jhonathon"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-from-input mb-20">
                            <label htmlFor="LastName">Last Name</label>
                            <input
                                id="LastName"
                                type="text"
                                placeholder="Last Name"
                                defaultValue={"Smith"}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-from-input mb-20">
                            <label htmlFor="Email">Email</label>
                            <input
                                id="Email"
                                type="email"
                                placeholder="Email"
                                readOnly
                                defaultValue={"jhonathonsmith@gamil.com"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-from-input mb-20">
                            <label htmlFor="Phone">Phone </label>
                            <input
                                id="Phone"
                                type="text"
                                placeholder="Phone"
                                defaultValue={"+8852416352"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-from-input gender-option mb-20">
                            <label htmlFor="Occupation"> Select Gender </label>
                            <NiceSelect
                                options={genderData}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                className=""
                            />
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="cont-btn mb-20  mt-10">
                            <button type="submit" className="c-btn">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default UserProfileUpdate;
