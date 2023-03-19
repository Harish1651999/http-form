import React, { useState } from "react";
import Modal from "../UI/Modal";

const JobCreationForm = (props) => {
  const [showForm, setShowForm] = useState(true);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="flex justify-between items-center mb-5">
        <h4 className="text-xl">Create a job</h4>
        <p className="text-base font-semibold">
          {showForm ? "Step 1" : "Step 2"}
        </p>
      </div>
      <form onSubmit={formSubmitHandler}>
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
              />
              <p className="text-xs absolute -bottom-5 text-red">
                * Please enter the job title
              </p>
            </div>
            <div className="mb-8 relative">
              <label className="text-sm font-medium block mb-1">
                Company name<i className="text-red">*</i>
              </label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-2"
                placeholder="ex. Google"
              />
              <p className="text-xs absolute -bottom-5 text-red">
                * Please enter the company name
              </p>
            </div>
            <div className="mb-8 relative">
              <label className="text-sm font-medium block mb-1">
                Industry<i className="text-red">*</i>
              </label>
              <input
                type="text"
                className="border rounded-md w-full py-2 px-2"
                placeholder="ex. Information Technology"
              />
              <p className="text-xs absolute -bottom-5 text-red">
                * Please enter the industry
              </p>
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
                />
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="Maximum"
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
                />
                <input
                  type="text"
                  className="border rounded-md w-full py-2 px-2"
                  placeholder="Maximum"
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
              />
            </div>
            <div className="mb-8">
              <label className="text-sm font-medium block mb-3">
                Apply type
              </label>
              <div className="flex items-center">
                <div className="flex items-center">
                  <input type="radio" id="quickApply" value="Quick apply" />
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
                    value="External apply"
                  />
                  <label
                    className="text-grey text-sm cursor-pointer ml-1"
                    htmlFor="externalApply"
                  >
                    External apply
                  </label>
                </div>
              </div>
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
