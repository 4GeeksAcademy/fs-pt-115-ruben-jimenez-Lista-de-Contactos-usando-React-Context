

import { Card } from "../components/Card.jsx";
import { useEffect } from "react";
import { getContacts } from "../Api/contactApi.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

	const{store, dispatch} = useGlobalReducer()//estructura para el  storeReducer()

	const getContactApi =async () =>{ // creo un metododonde saco la informacion de la api y la meto en el global reducer
		const dataApi =await getContacts();// es un array que viene del return de la api
		dispatch({//disparo la accion
			type: "add-contacts",// lo mismo que tenemos en el js, como condicion 
			payload: dataApi,//valor que le asigno
		})
	}
 
  useEffect(()=>{getContactApi()
  },[])// para que se ejecute una sola vez

	return (
		<div className="row">
			{
				store.contacts.map(contact =>(
					<Card key={contact.id} contact={contact} getContactApi={getContactApi} />
				))	
			}
			
		</div>
	);
}; 