import React from "react";
import auth from "@/auth";

export default async function Header() {
    const user = await auth.getUser();
    return (
        <header>
            <>{user && <strong>Hello {user?.name || user.email}</strong>}</>

            <div>
                <form action={auth.deleteSession}>
                    <button>Logout</button>
                </form>
            </div>
        </header>
    );
}
