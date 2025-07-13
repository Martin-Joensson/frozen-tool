import frostgrave from "../assets/frostgrave.json";

export const filterSchool = (selectedSchool) => {
  return frostgrave.spells.filter((school) => school.name == selectedSchool);
};
