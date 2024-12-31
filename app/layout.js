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
      <body className=" text-brand-black px-4 lg:px-20 md:max-w-3xl lg:max-w-5xl md:mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
