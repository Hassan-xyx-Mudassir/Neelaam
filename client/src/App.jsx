// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer/Footer";

import Profile from "./components/Profile"
import DashboardLayout from "./pages/Dashboard"
import Listing from "./components/Listing"
import Bidding from "./components/Bidding"
import DashboardMain  from "./components/DashboardMain";
import Logout from "./components/Logout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/product" element={<FAQ />} />
      <Route path="/payment" element={<FAQ />} />
      <Route path="/user-dashboard" element={<FAQ />} /> */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardMain />} />
          <Route path="/dashboard/listing" element={<Listing />} />
          <Route path="/dashboard/bidding" element={<Bidding />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
