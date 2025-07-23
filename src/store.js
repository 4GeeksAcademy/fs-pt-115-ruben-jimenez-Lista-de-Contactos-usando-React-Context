export const initialStore = () => {
  return {//estados
    contacts: [],//array de toros los contactos, estos son objetos 1
  

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "add-contacts":
      return {
        ...store,
        contacts: action.payload//array de toros los contactos, estos son objetos 1
      }
    
    default:
      throw Error('Unknown action.');
      }
  }
