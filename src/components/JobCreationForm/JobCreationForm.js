import React, { useState } from "react";
import { service } from "../../service";
import Modal from "../UI/Modal";
import { useForm } from "react-hook-form";

const JobCreationForm = (props) => {
  const [showForm, setShowForm] = useState(true);

  const [errorvalidation, setErrorValidation] = useState({
    jobTitle: false,
    companyName: false,
    industry: false,
    ratioBtn: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const saveHandler = async (data) => {
    console.log(data);
    if (showForm) {
      if (data?.jobTitle && data?.companyName && data?.industry) {
        setShowForm(false);
      } else {
        let errormessage = errorvalidation;
        if (!data?.jobTitle) {
          errormessage = { ...errormessage, ["jobTitle"]: true };
        } else {
          errormessage = { ...errormessage, ["jobTitle"]: false };
        }
        if (!data?.companyName) {
          errormessage = { ...errormessage, ["companyName"]: true };
        } else {
          errormessage = { ...errormessage, ["companyName"]: false };
        }
        if (!data?.industry) {
          errormessage = { ...errormessage, ["industry"]: true };
        } else {
          errormessage = { ...errormessage, ["industry"]: false };
        }
        setErrorValidation(errormessage);
      }
    } else {
      if (watch("isExternalApply") || watch("isQuickApply")) {
        await service.post("/createJob", {
          ...data,
          ["isExternalApply"]: data?.isExternalApply ? true : false,
          ["isQuickApply"]: data?.isQuickApply ? true : false,
        });
        props.onClose();
      } else {
        setErrorValidation({ ...errorvalidation, ["ratioBtn"]: true });
      }
    }
    // service.post("/createJob",);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="flex justify-between items-center mb-5">
        <h4 className="text-xl">Create a job</h4>
        <p className="text-base font-semibold">
          {showForm ? "Step 1" : "Step 2"}
        </p>
      </div>
      <form onSubmit={handleSubmit(saveHandler)}>
        {showForm && (
          <>
            <div className="mb-8 relative">
              <label className="text-sm font-medium block mb-1">
                Job title<i className="text-red">*</i>
              </label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-2"
                placeholder="ex. UX UI Designer"
                {...register("jobTitle")}
              />
              {errorvalidation?.jobTitle && (
                <p className="text-xs absolute -bottom-5 text-red">
                  * Please enter the job title
                </p>
              )}
            </div>
            <div className="mb-8 relative">
              <label className="text-sm font-medium block mb-1">
                Company name<i className="text-red">*</i>
              </label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-2"
                placeholder="ex. Google"
                {...register("companyName")}
              />
              {errorvalidation?.companyName && (
                <p className="text-xs absolute -bottom-5 text-red">
                  * Please enter the company name
                </p>
              )}
            </div>
            <div className="mb-8 relative">
              <label className="text-sm font-medium block mb-1">
                Industry<i className="text-red">*</i>
              </label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-2"
                placeholder="ex. Information Technology"
                {...register("industry")}
              />
              {errorvalidation?.industry && (
                <p className="text-xs absolute -bottom-5 text-red">
                  * Please enter the industry
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
              <div className="mb-6">
                <label className="text-sm font-medium block mb-1">
                  Location
                </label>
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="ex. Chennai"
                  {...register("location")}
                />
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium block mb-1">
                  Remote type
                </label>
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="ex. In-office"
                  {...register("remoteType")}
                />
              </div>
            </div>
          </>
        )}
        {!showForm && (
          <>
            <div className="mb-6">
              <label className="text-sm font-medium block mb-1">
                Experience
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="Minimum"
                  {...register("experienceMin")}
                />
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="Maximum"
                  {...register("experienceMax")}
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="text-sm font-medium block mb-1">Salary</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="Minimum"
                  {...register("salaryMin")}
                />
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="Maximum"
                  {...register("salaryMax")}
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="text-sm font-medium block mb-1">
                Total employee
              </label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-2"
                placeholder="ex. 100"
                {...register("totalEmployee")}
              />
            </div>

            <div className="mb-8 position-relative">
              <label className="text-sm font-medium block mb-3">
                Apply type
              </label>
              <div className="flex items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="quickApply"
                    // value="Quick apply"
                    //  {...register("isQuickApply")}
                    value={watch("isQuickApply")}
                    onClick={(e) => {
                      console.log(e);
                      setValue("isQuickApply", !e.target.value);
                    }}
                  />
                  <label
                    className="text-grey text-sm cursor-pointer ml-1"
                    htmlFor="quickApply"
                  >
                    Quick apply
                  </label>
                </div>
                <div className="ml-5 flex items-center">
                  <input
                    type="radio"
                    id="externalApply"
                    value={watch("isExternalApply")}
                    // {...register("isExternalApply")}
                    onChange={(e) => {
                      setValue("isExternalApply", !e.target.value);
                    }}
                  />
                  <label
                    className="text-grey text-sm cursor-pointer ml-1"
                    htmlFor="externalApply"
                  >
                    External apply
                  </label>
                </div>
              </div>
              {errorvalidation?.ratioBtn && (
                <p className="text-xs absolute text-red">
                  * Please select one apply type
                </p>
              )}
            </div>
          </>
        )}
        <button className="bg-primary text-white text-sm px-4 py-2 rounded-md block ml-auto mt-7">
          {showForm ? "Next" : "Save"}
        </button>
      </form>
    </Modal>
  );
};

export default JobCreationForm;
