import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-15 w-full">{children}</main>
      {/* <Footer /> go here later */}
    </div>
  );
}
