import Script from "next/script";
import { Navbar, Brandline, AutoScrollbar } from "../components";

import "../styles/globals.css";
import BrandCard from "@/components/BrandCard";

const App = ({ Component, pageProps }) => (
  <div>
    <Brandline />
    <Navbar />

    <Component {...pageProps} />

    <AutoScrollbar />
    <BrandCard />

    <Script
      src="https://kit.fontawesome.com/32523335c6.js"
      crossorigin="anonymous"
    />
  </div>
);

export default App;
