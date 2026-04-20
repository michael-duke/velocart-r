import { Outlet } from "react-router";
import CheckoutHeader from "@/components/ui/Checkout/CheckoutHeader";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CheckoutHeader />

      <main className="flex-1 pt-15">
        <Outlet />
      </main>
      {/* <Footer /> go here later */}
    </div>
  );
}
