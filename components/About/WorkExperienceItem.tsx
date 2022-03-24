import moment from "moment";
import React from "react";
import formats from "../../constants/format";
import {
  WorkExperienceCompany,
  WorkExperienceDescription,
  WorkExperienceDuration,
  WorkExperienceInfoContainer,
  WorkExperienceItemContainer,
  WorkExperienceTitle,
} from "./WorkExperience.style";

type WorkExperienceItemProps = {
  description: string;
  companyName: string;
  role: string;
  start: string;
  end: string;
  isPresent: boolean;
};

const WorkExperienceItem = ({
  companyName,
  description,
  end,
  isPresent,
  role,
  start,
}: WorkExperienceItemProps) => {
  return (
    <WorkExperienceItemContainer>
      <WorkExperienceDuration>
        <p>
          {moment(start).format(formats.WORK_EXPERIENCE_DATE)} -{" "}
          {isPresent
            ? "Present"
            : moment(end).format(formats.WORK_EXPERIENCE_DATE)}
        </p>
      </WorkExperienceDuration>
      <WorkExperienceInfoContainer>
        <WorkExperienceCompany>{companyName}</WorkExperienceCompany>
        <WorkExperienceTitle>{role}</WorkExperienceTitle>
        <WorkExperienceDescription>{description}</WorkExperienceDescription>
      </WorkExperienceInfoContainer>
    </WorkExperienceItemContainer>
  );
};

export default WorkExperienceItem;
