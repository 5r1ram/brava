import Script from "next/script";
import { Navbar, Brandline } from "../components";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <div>
    <Brandline />
    <Navbar />
    <Component {...pageProps} />

    <Script
      src="https://kit.fontawesome.com/32523335c6.js"
      crossorigin="anonymous"
    />
  </div>
);

export default App;
