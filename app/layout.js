import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "A sua contabiliade",
  description: "Monte seu plano contábil agora!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${montserrat.className} scrollbar scrollbar-thumb-secundary-blue`}
      >
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
