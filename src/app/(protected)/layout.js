import React from "react";
import Header from "@/partials/Header";

export default function ProtectedLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
