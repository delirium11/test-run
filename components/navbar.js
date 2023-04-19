import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faMedium, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {

    return (

        <div>

            <div className="logo_mobile_container">

                <Link href="/"><img className='logo_mobile' 
                    src="/images/logo_long.png" alt="logo_long"/></Link>

            </div>

            <div className="navbar">
        
                <div>

                    <Link href="/"><img className="logo_desktop" 
                        src="/images/logo_long.png" alt="logo_long"/></Link>

                </div>

                <div>

                    <li><button><Link href="/checker">CHECKER</Link></button></li>
                    
                    <li><button><Link href="/mint">MINT</Link></button></li>

                    <button><a 
                        target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter}/></a></button>

                    <button><a 
                        target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faMedium}/></a></button>

                    <button><a 
                        target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faSailboat}/></a></button>

                    <button><a>CONNECT</a></button>

                </div>

            </div>

        </div>

    )

}
