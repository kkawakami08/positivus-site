import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className=" text-brand-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
