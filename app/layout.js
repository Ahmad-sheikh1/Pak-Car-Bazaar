import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import ChatBoat from "./component/ChatBoat/ChatBoat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pakcarbazar",
  description: "Empowered with knowledge and confidence, you're now ready to find your perfect used car in Pakistan! Remember, a well-informed buyer is a happy buyer. Stay ahead of the game with Pak Car Bazar, your trusted companion in the world of pre-owned vehicles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatBoat/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
