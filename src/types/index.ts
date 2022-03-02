export type Skill = {
  percent: number;
  name: string;
  logo: string;
};

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy?: string;
  year: number;
  awards?: Awards[];
  logo: string;
};

export type Awards = {
  description: string;
  year: number;
  month?: string;
};

export type Certifications = {
  name: string;
  logo: string;
  issuer: string;
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logo: string;
};
