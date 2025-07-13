import { useState, useEffect } from "react";
import frostgrave from "../assets/frostgrave.json";
// import { filterSchool } from "./filterSchool";
import { SpellCard } from "./spellCard";

export const Spellbook = () => {
  const [spellBook, setSpellBook] = useState({
    soldiers: [],
    schools: [],
    spells: [],
  });
  const defaultSpellBook = frostgrave;

  useEffect(() => {
    setSpellBook(frostgrave);
  }, []);

  const handleSchoolSelection = (name) => {
    if (name === "") {
      setSpellBook(defaultSpellBook);
    } else {
      const selected = frostgrave.schools.find((s) => s.name === name);
      if (selected) {
        setSpellBook(filterSchool(selected.id));
      }
    }
  };

  const filterSchool = (schoolId) => {
    return {
      soldiers: frostgrave.soldiers,
      schools: frostgrave.schools, // Keep the full list of schools
      spells: frostgrave.spells.filter((spell) => spell.school === schoolId),
    };
  };

  return (
    <div className="flex flex-col">
      <div>
        <h2>Filter Tools</h2>
        <select onChange={(e) => handleSchoolSelection(e.target.value)}>
          <option value="">All Schools</option>
          {spellBook.schools.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2">
        {spellBook.spells.map((item, index) => (
          <div key={index}>
            <SpellCard spell={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
