"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
  session: any;
}
const Provider = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
