// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/faq" element={<FAQ />} />
      {/* <Route path="/product" element={<FAQ />} />
      <Route path="/payment" element={<FAQ />} />
      <Route path="/user-dashboard" element={<FAQ />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
