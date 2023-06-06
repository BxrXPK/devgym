import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Dashboard from "@/components/dashboard/Dashboard";
import { AuthProvider } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <Navbar/> */}
          <Dashboard />
          {/* {children}
        <Footer/> */}
        </AuthProvider>
      </body>
    </html>
  );
}