import type { ReactElement } from "react";
import Header from "../header/Header";

type Props = {
    children: ReactElement;
}

export default function Layout({
    children,
}: Props) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}