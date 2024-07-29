import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import Contacts from "./Pages/Contacts/Contacts";
import ReportPage from "./Pages/Report/ReportPage";
import PolicyPage from "./Pages/PolicyPage/PolicyPage";
import Carrer from "./Pages/Carrer/Carrer";
import CarriersMetrics from "./Pages/Carrer/CarriersMetrics";
import CarrerWebView from "./Pages/Carrer/CarrerWebView";
import GlobalCarrers from "./Pages/GlobalCarrers/GlobalCarrers";
import History from "./Pages/HistoryMainTable/History";
import TaskCreation from "./Pages/TaskCreation/TaskCreation";
import TaskReportAdmin from "./Pages/TaskCreation/TaskReportAdmin";
import PolicyMonthWise from "./Pages/TaskCreation/PolicyMonthWise";
import AgenetPolicyDetails from "./Pages/TaskCreation/AgenetPolicyDetails";

const App = () => {
  const location = useLocation();
  const userData = useSelector((state) => state.loginUser);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname != "/") {
      if (userId) {
      } else {
        navigate("/");
      }
    }
  }, [location.pathname]);
  return (
    <>
      <Routes>
        {!userId && <Route element={<Login />} path="/" />}
        <Route element={<Layout />}>
          <Route path="/contact-details" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/policy-ledger-performance" element={<PolicyPage />} />
          <Route path="/carrier" element={<Carrer />} />
          <Route path="/carrier-metrics" element={<CarriersMetrics />} />
          <Route path="/carrer-website" element={<CarrerWebView />} />
          <Route path="/global-communication" element={<GlobalCarrers />} />
          <Route path="/history" element={<History />} />
          <Route path="/task-creation-agent" element={<TaskCreation />} />
          <Route path="/task-report-admin" element={<TaskReportAdmin />} />
          <Route path="/policy-report-admin" element={<PolicyMonthWise />} />
          <Route path="/agent-policy-detail-admin" element={<AgenetPolicyDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
