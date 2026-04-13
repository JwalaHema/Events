import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RealWeddings from "./pages/RealWeddings";
import VenuesList from "./pages/VenuesList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/real-weddings" element={<RealWeddings />} />
      <Route path="/venues-list" element={<VenuesList />} />
    </Routes>
  );
}

export default App;