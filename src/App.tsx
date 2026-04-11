import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RealWeddings from "./pages/RealWeddings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/real-weddings" element={<RealWeddings />} />
    </Routes>
  );
}

export default App;