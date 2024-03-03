import './global.css';
import { Web3Provider } from "@/contexts/web3";
import { config } from "@/contexts/web3/config";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";
import { cookieToInitialState } from "wagmi";
import { NextUI } from "@/contexts/nextui";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html className="aofg bg-background text-foreground">
      <body>
        <Web3Provider initialState={initialState}>
          <NextUI>{children}</NextUI>
        </Web3Provider>
      </body>
    </html>
  );
}
