import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer - Team Lead "
            subTitle="DGateway Innovations Pvt Ltd - ( Jan 2024 - Present   ) "
            result="Sri Lanka"
            des="Leading a team of software engineers with a focus on fostering a collaborative culture and emphasizing the significance of teamwork, aligning with Google's values."
          />
          <ResumeCard
            title="Associate Software Engineer "
            subTitle="Cloud Parallax Pvt Ltd -  (Jan 2023 - Dec 2023)"
            result="Sri Lanka"
            des="Contributed to a dynamic software development environment, emphasizing the growing demand for highly qualified professionals in Canada."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">June 2022 - December 2022</p>
          <h2 className="text-4xl font-bold">Intern Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Creo360 Pvt Ltd"
            result="Sri Lanka"
            des="Acquired hands-on experience and training in full-stack development, contributing to the dynamic work environment and gaining insights into various sectors of the tech industry."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
