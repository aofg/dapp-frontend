"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export function NextUI({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
