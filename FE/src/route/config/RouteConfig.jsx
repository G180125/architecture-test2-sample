import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Loader from "../../components/loader/Loader";
const Home = lazy(() => import("../../pages/home/Home"));
const About = lazy(() => import("../../pages/about/About"));
const Dashboard = lazy(() => import("../../pages/dashboard/Dashboard"));
const Statistic = lazy(() => import("../../pages/statistic/Statistic"));
const Login = lazy(() => import("../../pages/login/Login"));
const Logout = lazy(() => import("../../pages/logout/Logout"));
const NotFound = lazy(() => import("../../pages/not_found/NotFound"));

const RouteConfig = () => {
  return (
    <Suspense fallback={<Loader className="w-8 h-8" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/statistic/*"
          element={
            <ProtectedRoute>
              <Statistic />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default RouteConfig;
