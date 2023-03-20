import React, { useEffect, useState } from "react";
import { service } from "../../service";

const CreatedJob = (props) => {
  const [jobDetails, setJobDetails] = useState([]);

  const getData = async () => {
    try {
      const responcedata = await service.get("/createJob");
      console.log("responcedata", responcedata);
      if (responcedata?.data?.length) {
        setJobDetails(responcedata?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [props?.FormIsShown]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {jobDetails?.map((data) => (
        <div className="flex bg-white rounded-md border py-4 px-5 mt-5">
          <div className="imgDiv mr-3">
            <img
              className="w-12 h-12 rounded object-cover"
              src="/assets/images/netflix.png"
              alt="Netflix"
            />
          </div>
          <div className="contentDiv">
            <h4 className="text-2xl">{data?.jobTitle}</h4>
            <p className="font-medium">{data?.companyName}</p>
            <p className="text-sm text-grey mb-5">{data?.location}</p>
            <p className="mb-1">Part-Time (9.00 am - 5.00 pm IST)</p>
            <p className="mb-1">{`Experience (${data?.experienceMin}  - ${data?.experienceMax} years)`}</p>
            <p className="mb-1">{`INR (₹) ${data?.salaryMin} - ${data?.salaryMax} / Month`}</p>
            <p className="mb-4">{data?.totalEmployee} employees </p>
            <div className="text-left">
              {data?.isQuickApply && (
                <button className="bg-primary text-white text-sm px-4 py-2 rounded-md mr-3">
                  Apply Now
                </button>
              )}
              {data?.isExternalApply && (
                <button className="text-primary border-primary text-sm px-4 py-2 rounded-md">
                  External Apply
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatedJob;
