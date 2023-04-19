import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faMedium, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {

    return (

        <header className="navbar">

            <div>
                
                <Link href="/"><img className="logo_long" 
                    src="/images/logo_long.png" alt="logo_long"/></Link>

                <Link href="/"><img className="logo_short" 
                    src="/images/logo_short.png" alt="logo_short"/></Link>

            </div>

            <div>

                <li><button><Link href="/application">APPLICATION</Link></button></li>

                <button><a  
                    target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/></a></button>

                <button><a 
                    target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faMedium}/></a></button>

                <button><a>CONNECT</a></button>

            </div>

        </header>

    )

}
