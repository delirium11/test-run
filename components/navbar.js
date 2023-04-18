import Link from "next/link";

export default function Navbar() {

    return (

        <nav className="navbar">

            <Link href="/">HOME</Link>
            <Link href="/checker">CHECKER</Link> 

        </nav>

    )

}