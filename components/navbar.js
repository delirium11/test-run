import Link from "next/link";

function Navbar() {

    return (
        <div>
            
            <nav>

                <Link href="/">HOME</Link>
                <Link href="/checker">CHECKER</Link>
                
            </nav>

        </div>
    );
}

export default Navbar;
