import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faMedium, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {

    return (

        <header className="navbar">

            <Link href="/"><img className="logo" src="/images/logo.png" alt="logo"/></Link>
            
            <nav>

                <ul className="nav_links">

                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/gallery">GALLERY</Link></li>
                    <li><Link href="/shop">SHOP</Link></li>
                    <li><Link href="/mint">MINT</Link></li>
                    <li><Link href="/checker">CHECKER</Link></li>

                </ul>
                
            </nav>

            <div className="socials">

                <button><a href="https://twitter.com/LlamaPixNFT" 
                    target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/></a></button>

                <button><a href="https://opensea.io/collection/llamapix-genesis" 
                    target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSailboat}/></a></button>

                <button><a href="https://medium.com/@llamapix.nft" 
                    target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faMedium}/></a></button>

                <button><a href="https://discord.gg/5QGXZRxEqn" 
                    target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faDiscord}/></a></button>

            </div>

        </header>

    )

}

//<button><a>CONNECT</a></button>