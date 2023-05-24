import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import DashboardLayout from "./pages/dashboard/dashboardLayout";
import Home from "./pages/home";
import Team from "./pages/dashboard/team";
import Users from "./pages/dashboard/users";
import Invoices from "./pages/dashboard/invoices";
import Roles from "./pages/dashboard/roles";
import Bar from "./pages/dashboard/bar";
import Form from "./pages/dashboard/form";
import Line from "./pages/dashboard/line";
import Pie from "./pages/dashboard/pie";
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
        <Route path="/dashboard/team" element={<Team />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/roles" element={<Roles />} />
        <Route path="/dashboard/invoices" element={<Invoices />} />
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
