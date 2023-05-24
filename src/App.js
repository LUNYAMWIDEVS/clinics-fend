import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import DashboardLayout from "./pages/dashboard/dashboardLayout";
import Home from "./pages/home";
import Patients from "./pages/dashboard/patients/patients";
import Users from "./pages/dashboard/users/users";
import PatientRecords from "./pages/dashboard/patient-records/patientRecords";
import Roles from "./pages/dashboard/roles/roles";
import Bar from "./pages/dashboard/bar";
import Form from "./pages/dashboard/form";
import Line from "./pages/dashboard/line";
import Pie from "./pages/dashboard/pie/pieChart";
import FAQ from "./pages/dashboard/faq";
import Geography from "./pages/dashboard/geography";
import Calendar from "./pages/dashboard/calendar/calendar";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />} >
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard/patients" element={<Patients />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/roles" element={<Roles />} />
        <Route path="/dashboard/patient_records" element={<PatientRecords />} />
        <Route path="/dashboard/form" element={<Form />} />
        <Route path="/dashboard/bar" element={<Bar />} />
        <Route path="/dashboard/pie" element={<Pie />} />
        <Route path="/dashboard/line" element={<Line />} />
        <Route path="/dashboard/faq" element={<FAQ />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/geography" element={<Geography />} />
      </Route>

    </Routes>
  )
}

export default App;
