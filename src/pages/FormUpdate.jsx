import { useState, useEffect, useSyncExternalStore } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { editContact, getContacts } from "../Api/contactApi"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const FormUpdate = () => {
    const { store, dispatch } = useGlobalReducer() // me traigo store y dispatch

    const [updateContact, setUpdateContact] = useState({})

    const { id } = useParams()//sacamos el id del linck
    const contact = store.contacts.find(contact => String(contact.id) == id)// deja == por que uno de los dos es string, String() .
    console.log(contact);

    const navigate = useNavigate(); // para tener una estancia del hook de useNavigate


    console.log(updateContact);

    const getContactApi = async () => { // creo un metododonde saco la informacion de la api y la meto en el global reducer
        const dataApi = await getContacts();// es un array que viene del return de la api
        dispatch({//disparo la accion
            type: "add-contacts",// lo mismo que tenemos en el js, como condicion 
            payload: dataApi,//valor que le asigno
        })
    }
    

    useEffect(() => {
        getContactApi()
    }, [])// para que se ejecute una sola vez al ejecutar la pagina
    useEffect(() => { setUpdateContact(contact) }, [contact])//setea update de contact cada vez que contact sufre un cambio.


    const handleChange = (e) => {
        setUpdateContact(prev => ({ ...prev, [e.target.name]: e.target.value }));// guardar en el estado + los datos segun name: contenido.
    }
    const handleSubmitUpdate = async (e) => {
        e.preventDefault()//evitar que reinicie la pagina
        if (!updateContact.name.trim() ||
            !updateContact.email.trim() ||
            !updateContact.phone.trim() ||
            !updateContact.address.trim()
        ) return;
        await editContact(id, updateContact);
        console.log(updateContact);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmitUpdate} className="container w-50 rounded-2 my-5 p-3" style={{ backgroundColor: "rgba(184, 47, 47, 1)" }}>
            <h2 className="text-center mb-5">Introduce los datos para crear el contacto</h2>
            <div className="mb-3">
                <label htmlhtmlFor="name" name="name" className="form-label">
                    Nombre contacto
                </label>
                <input type="text" className="form-control" onChange={(e) => handleChange(e)} name="name" value={updateContact.name ?? ""} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control" name="email" onChange={(e) => handleChange(e)} value={updateContact.email ?? ""} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                    Telefono
                </label>
                <input type="text" className="form-control" name="phone" onChange={(e) => handleChange(e)} value={updateContact.phone ?? ""} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">
                    Dirección
                </label>
                <input type="text" name="address" className="form-control" onChange={(e) => handleChange(e)} value={updateContact.address ?? ""} />
            </div>
            <div className="d-flex justify-content-between gap-2">
                <Link to={"/"}>
                    <button type="submit" className="btn btn-danger">Cancelar</button>
                </Link>
                <button type="submit" className="btn btn-warning">✏️ Edit</button>

            </div>
        </form>
    )
}
//El operador ?? se llama nullish coalescing y está diseñado para sólo considerar null o undefined como "no existe", a diferencia de || que trata también 0, "", false como "falsy"


// 3 o mas estado useReducer, si no useState.