import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f3]">
      <Header />

      <main className="flex-1 pt-15">{children}</main>
      {/* <Footer /> go here later */}
    </div>
  );
}
