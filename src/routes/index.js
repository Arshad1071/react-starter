import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";

const ViewOne = lazy(() => import("../views/ViewOne"));
const ViewTwo = lazy(() => import("../views/ViewTwo"));
const ViewThree = lazy(() => import("../views/ViewThree"));

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ViewOne />} />
          <Route path="viewtwo" element={<ViewTwo />} />
          <Route path="viewthree" element={<ViewThree />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
