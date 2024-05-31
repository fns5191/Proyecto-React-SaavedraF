import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col text-center">
                    <h1 className="fw-bold">ERROR 404</h1>
                    <p>No se ha encontrado ningún resultado</p>
                    <p className="my-5"><Link to={"/"} className="btn bg-black text-white">Regresar al Home </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;