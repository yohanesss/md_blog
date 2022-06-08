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
          My name is Yohanes, Nice to meet You! I&apos;m a Software Engineer
          mostly write code in JavaScript (ES6/Typescript) and React.
        </p>
        <p>
          I have {workingDuration}+ years of experience in writing code for
          building website and mobile apps. Currently working as Frontend
          Engineer at{" "}
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
      <SectionContainer>
        <Heading borderBottom>Latest Works</Heading>
        <p
          style={{
            boxSizing: "border-box",
            margin: 0,
            minWidth: 0,
            fontSize: "16px",
            fontFamily: "Karla,sans-serif",
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          Please visit{" "}
          <a href="https://yoh.netlify.app">my latest works here.</a>
        </p>
      </SectionContainer>
    </>
  );
};

export default About;
