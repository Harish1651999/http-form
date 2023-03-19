import React from "react";

const CreatedJob = () => {
  const data = [
    {
      img: "/assets/images/netflix.png",
      jobtitle: "UX UI Designer",
      companyName: "Great Vibes - Information Technology",
      companyLocation: "Chennai, Tamilnadu, India (In-office)",
      timing: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "Experience (1 - 2 years)",
      salary: "INR (₹) 30,000 - 50,000 / Month",
      noOfEmp: "51-200 employees",
    },
    {
      img: "/assets/images/netflix.png",
      jobtitle: "UX UI Designer",
      companyName: "Great Vibes - Information Technology",
      companyLocation: "Chennai, Tamilnadu, India (In-office)",
      timing: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "Experience (1 - 2 years)",
      salary: "INR (₹) 30,000 - 50,000 / Month",
      noOfEmp: "51-200 employees",
    },
    {
      img: "/assets/images/netflix.png",
      jobtitle: "UX UI Designer",
      companyName: "Great Vibes - Information Technology",
      companyLocation: "Chennai, Tamilnadu, India (In-office)",
      timing: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "Experience (1 - 2 years)",
      salary: "INR (₹) 30,000 - 50,000 / Month",
      noOfEmp: "51-200 employees",
    },
    {
      img: "/assets/images/netflix.png",
      jobtitle: "UX UI Designer",
      companyName: "Great Vibes - Information Technology",
      companyLocation: "Chennai, Tamilnadu, India (In-office)",
      timing: "Part-Time (9.00 am - 5.00 pm IST)",
      experience: "Experience (1 - 2 years)",
      salary: "INR (₹) 30,000 - 50,000 / Month",
      noOfEmp: "51-200 employees",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {data.map((data) => (
        <div className="flex bg-white rounded-md border py-4 px-5 mt-5">
          <div className="imgDiv mr-3">
            <img
              className="w-12 h-12 rounded object-cover"
              src={data.img}
              alt="Netflix"
            />
          </div>
          <div className="contentDiv">
            <h4 className="text-2xl">{data.jobtitle}</h4>
            <p className="font-medium">{data.companyName}</p>
            <p className="text-sm text-grey mb-5">{data.companyLocation}</p>
            <p className="mb-1">{data.timing}</p>
            <p className="mb-1">{data.experience}</p>
            <p className="mb-1">{data.salary}</p>
            <p className="mb-4">{data.noOfEmp}</p>
            <div className="text-left">
              <button className="bg-primary text-white text-sm px-4 py-2 rounded-md mr-3">
                Apply Now
              </button>
              <button className="text-primary border-primary text-sm px-4 py-2 rounded-md">
                External Apply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatedJob;
