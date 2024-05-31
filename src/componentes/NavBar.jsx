import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black">
                <div className="col">
                    <a className="d-flex p-3 justify-content-start" href="">
                        <img className="rounded-circle" src={logo} alt="Cosas Inneceasrias" width={80} />
                    </a>
                </div>
                <div className="col d-flex p-3 justify-content-center">
                    <ul className="nav d-flex p-2 align-items-center fw-bold">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white" aria-current="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"category/casa"}>Para Casa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"category/viaje"}>Para Viajar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"category/animales"}>Para Animales</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>

        </div>
    )
}

export default NavBar;