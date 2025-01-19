import ShippingForm from "./ShippingForm";
import Display from "./Display";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainRoutes() {
    return (
        <Router>
          <div className="ml-64 lg:ml-16 p-4 w-full">
            <Routes>
              <Route path="/" element={<ShippingForm />} />
              <Route path="/display" element={<Display />} />
            </Routes>
          </div>
        </Router>
    )
}

export default MainRoutes;
