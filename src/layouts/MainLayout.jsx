import { Outlet } from "react-router";
import Header from "@/components/ui/Header/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-15 w-full">
        <Outlet />
      </main>
      {/* <Footer /> go here later */}
    </div>
  );
}
