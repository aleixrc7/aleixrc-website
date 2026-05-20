import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <Header />
      <main className="app-shell__main">{children}</main>
      <Footer />
    </div>
  );
}
