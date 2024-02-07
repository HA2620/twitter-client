import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className} >
    <GoogleOAuthProvider clientId="404903219917-um4re238g4hh2fk26najccqr47fargnr.apps.googleusercontent.com">
      <Component {...pageProps} />
      <Toaster></Toaster>
    </GoogleOAuthProvider>
  </div>
}