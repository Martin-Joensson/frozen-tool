import frostgrave from "../assets/frostgrave.json";

export const checkSchool = (schoolId) => {
  let obj = frostgrave.schools.find((o) => o.id === schoolId);
  return obj.name;
};
