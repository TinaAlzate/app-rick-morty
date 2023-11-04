import { Route, Routes } from "react-router-dom";
import { RMroutes } from "../rickandmorty";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<RMroutes />} />
      </Routes>
    </>
  );
}
