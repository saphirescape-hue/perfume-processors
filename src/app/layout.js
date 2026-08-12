import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MeshBackground from "@/components/MeshBackground";
import MaintenancePage from "@/components/MaintenancePage";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const isMaintenanceMode =
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

export const metadata = isMaintenanceMode
  ? {
      title: "Perfume Processors | Under Maintenance",
      description:
        "Our website is currently undergoing scheduled maintenance. We'll be back shortly.",
    }
  : {
      title: "Perfume Processors | Premium Textile Manufacturing",
      description:
        "Explore our sleek textile manufacturing website showcasing three decades of excellence. Discover our capabilities, sustainability initiatives, and global partnerships. Join us in creating a better future with innovative practices and high-quality fabrics.",
      keywords: [
        "textile manufacturing",
        "sustainable textiles",
        "Perfume Processors",
        "fabric manufacturing",
        "Jetpur Gujarat",
      ],
    };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        {isMaintenanceMode ? (
          <MaintenancePage />
        ) : (
          <>
            <MeshBackground />
            <ScrollProgress />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
