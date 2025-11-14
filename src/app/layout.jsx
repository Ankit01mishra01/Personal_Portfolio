import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { metadataBase, openGraph } from "@/lib/seo";

export const metadata = {
  metadataBase,
  title: {
    default: "Ankit Mishra | Full Stack Developer",
    template: "%s | Ankit Mishra",
  },
  description: "Full Stack Developer (MERN + Next.js). Building modern, scalable, AI-infused web apps.",
  openGraph,
  icons: { icon: "/favicon.svg" }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
