import React from "react";
import { ProfessionalSkillItem } from "./ProfessionalSkill.style";

type ProfessionalSkillProps = {
  skill: string;
};

const ProfessionalSkill = ({ skill }: ProfessionalSkillProps) => {
  return <ProfessionalSkillItem>{skill}</ProfessionalSkillItem>;
};

export default ProfessionalSkill;
