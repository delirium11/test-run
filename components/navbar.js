import Link from "next/link";

export default function Navbar() {

    return (

        <nav className="navbar">

            <Link href="/">HOME</Link>
            <Link href="/gallery">GALLERY</Link>
            <Link href="/shop">SHOP</Link>
            <Link href="/mint">MINT</Link>
            <Link href="/checker">CHECKER</Link>
            

        </nav>

    )

}