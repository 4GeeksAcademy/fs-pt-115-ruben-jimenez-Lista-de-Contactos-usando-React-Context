

export const getContacts = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/ruben/contacts")
    if (!response.ok) {
        createAgenda();
    }
    const data = await response.json()
    return data.contacts;
}

const createAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/ruben", {
        method: "POST"
    })
}

export const createContact = async (newContact) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/ruben/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
    }

    )
}

export const deleteContact = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ruben/contacts/${id}`,
        { method: "DELETE" });
}

export const editContact = async (id, updateContact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ruben/contacts/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateContact)
        })

}