import React from "react";
import {
  ExpertiseDescription,
  ExpertiseHeading,
  ExpertiseItemContainer,
} from "./Expertise.style";

type ExpertiseProps = {
  heading: string;
  description: string;
};

const Expertise = ({ description, heading }: ExpertiseProps) => {
  return (
    <ExpertiseItemContainer>
      <ExpertiseHeading>{heading}</ExpertiseHeading>
      <ExpertiseDescription>{description}</ExpertiseDescription>
    </ExpertiseItemContainer>
  );
};

export default Expertise;
