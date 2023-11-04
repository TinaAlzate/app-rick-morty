import { Navigate, Route, Routes } from "react-router-dom";
import { AlienPage, HumanPage, AllCharactersPage, DetailsCharacter, NotFound } from "../";
import { Navbar, Footer } from "../../ui"

export const RMroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="characters" element={<AllCharactersPage />} />
        <Route path="human" element={<HumanPage />} />
        <Route path="alien" element={<AlienPage />} />
        <Route path='details-character/:id' element={<DetailsCharacter />} />
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
