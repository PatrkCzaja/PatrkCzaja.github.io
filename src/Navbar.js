import { Link, useMatch, useResolvedPath } from "react-router-dom"
import image from '../src/images/dmc.png';
import './styles.css';

export default function Navbar() {
    return ( 
    <nav className="nav">
        <Link to="/" className="site-title">
            <img src={image} width={170} height={70} alt="logo strony" />
        </Link>
        <ul>
            <CustomLink to="/"> O nas </CustomLink>
            <CustomLink to="/offer"> Oferta </CustomLink>
            <CustomLink to="/pricing"> Wycena </CustomLink> 
            <CustomLink to="/contact"> Kontakt </CustomLink> 
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}