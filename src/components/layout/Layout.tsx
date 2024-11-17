import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}