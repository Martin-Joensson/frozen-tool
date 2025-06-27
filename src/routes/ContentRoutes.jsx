import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Wizard } from "../components/Wizard";
import { Main } from "../components/Main";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/wizard" element={<Wizard />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
