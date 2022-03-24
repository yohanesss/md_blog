import React from "react";
import Expertise from "../components/About/Expertise";
import ProfessionalSkill from "../components/About/ProfessionalSkill";
import WorkExperienceItem from "../components/About/WorkExperienceItem";
import { Heading, SectionContainer } from "../components/Util.style";
import {
  devExpertises,
  START_WORK_YEAR,
  workExperiences,
  devProfessionalSkills,
} from "../constants/devInfo";

const About = () => {
  const workingDuration = new Date().getFullYear() - START_WORK_YEAR;

  const expertises = devExpertises.map((expertise) => (
    <Expertise key={expertise.heading} {...expertise} />
  ));

  const experiences = workExperiences.map((experience) => (
    <WorkExperienceItem
      key={experience.companyName + experience.role}
      {...experience}
    />
  ));

  const professionalSkills = devProfessionalSkills.map((skill) => (
    <ProfessionalSkill key={skill} skill={skill} />
  ));

  return (
    <>
      <SectionContainer>
        <Heading borderBottom>Introduction</Heading>
        <p>
          {" "}
          My name is Yohanes, Nice to meet You! I'm a Software engineer mostly
          write code in JavaScript (ES6/Node.Js) and React. I have great passion
          in web development.
        </p>
        <p>
          I have {workingDuration}+ years of experience in writing code for
          building website, webservice, and mobile apps. Currently working as
          Front-end engineer at{" "}
          <a href="https://harperfloors.com" target="_blank" rel="noreferrer">
            Harper Floors
          </a>
          .
        </p>
      </SectionContainer>
      <SectionContainer>
        <Heading borderBottom>Expertise</Heading>
        {expertises}
      </SectionContainer>
      <SectionContainer>
        <Heading borderBottom>Working Experience</Heading>
        {experiences}
      </SectionContainer>
      <SectionContainer>
        <Heading borderBottom>Professional Skills</Heading>
        {professionalSkills}
      </SectionContainer>
    </>
  );
};

export default About;
