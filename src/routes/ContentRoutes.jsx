import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Resume } from "../components/Resume/Resume";
import { Projects } from "../components/Projects/Projects";
import { Catastrophic } from "../components/CatastrophicFailure/Catastrophic";
import { WebDev } from "../components/WebDev/WebDev";
import { Landing } from "../components/Landing/Landing";
import { Dopamine } from "../components/DopamineMenu/Dopamine";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebDev />} />
      <Route path="/webdev" element={<WebDev />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dopamine" element={<Dopamine />} />
      <Route path="/catastrophic" element={<Catastrophic />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
