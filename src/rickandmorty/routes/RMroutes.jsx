import { Navigate, Route, Routes } from "react-router-dom";
import { AlienPage, HumanPage, AllCharactersPage } from "../";
import { Navbar, Footer } from "../../ui"

export const RMroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="characters" element={<AllCharactersPage />} />
        <Route path="human" element={<HumanPage />} />
        <Route path="alien" element={<AlienPage />} />
        <Route path="/" element={<Navigate to="/characters" />} />
      </Routes>
      <Footer />
    </>
  );
}
