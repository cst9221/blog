"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type sessionProps = {
    children: React.ReactNode
};
export default function NextAuthSessionProvider({ children }: sessionProps) {
    return <SessionProvider>{children}</SessionProvider>
}