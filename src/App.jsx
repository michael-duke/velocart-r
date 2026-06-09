import { Routes, Route } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import CheckoutLayout from "@/layouts/CheckoutLayout";
import HomePage from "@/pages/HomePage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrdersPage from "@/pages/OrdersPage";
import TrackingPage from "@/pages/TrackingPage";

function App() {
  return (
    <Routes>
      {/* 🛒 MAIN STORE ROUTES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Route>

      {/* 💳 CHECKOUT ROUTES */}
      <Route element={<CheckoutLayout />}>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
