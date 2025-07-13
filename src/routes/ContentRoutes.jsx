import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Wizard } from "../components/Wizard";
import { Main } from "../components/Main";
import { Spellbook } from "../components/Spellbook";
import { SoldierReference } from "../components/warband/SoldierReference";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/wizard" element={<Wizard />} />
      <Route path="/spellbook" element={<Spellbook />} />
      <Route path="/soldiers" element={<SoldierReference />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
