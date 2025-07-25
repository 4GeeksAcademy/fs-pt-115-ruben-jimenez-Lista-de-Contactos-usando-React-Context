import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createContact } from "../Api/contactApi"

export const FormCreate = () => {

    const [newContact, setNewContact] = useState({})
    const navigate = useNavigate(); // para tener una estancia del hook de useNavigate

    const handleChange = (e) => {
        setNewContact(prev => ({ ...prev, [e.target.name]: e.target.value }));// guardar en el estado el anterior + los datos segun name: contenido.
    }
    const handleSubmit = async (e) => {
        e.preventDefault()//evitar que reinicie la pagina
        if (!newContact.name.trim() ||
            !newContact.email.trim() ||
            !newContact.phone.trim() ||
            !newContact.address.trim()
        ) return;
        await createContact(newContact);
         navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} className="container w-50 rounded-2 my-5 p-3" style={{ backgroundColor: "rgba(184, 47, 47, 1)" }}>
            <h2 className="text-center mb-5">Introduce los datos para crear el contacto</h2>
            <div className="mb-3">
                <label htmlhtmlFor="name" name="name" className="form-label">
                    Nombre contacto
                </label>
                <input type="text" className="form-control" onChange={(e) => handleChange(e)} name="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control" name="email" onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                    Telefono
                </label>
                <input type="text" className="form-control" name="phone" onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">
                    Dirección
                </label>
                <input type="text" name="address" className="form-control" onChange={(e) => handleChange(e)} />
            </div>
            <div className="d-flex justify-content-between gap-2">
                <Link to={"/"}>
                    <button className="btn btn-secondary">😇Cancelar</button>
                </Link>
                <button type="submit" className="btn btn-danger">😈Crear Contacto</button>

            </div>
        </form>
    )
}