import React from 'react';
import { ENCOMENDA_CREATE, ENCOMENDA_EDIT, ENCOMENDA_GET, ENCOMENDA_DELETE } from './api';

export const EncomendaContext = React.createContext();


export function EncomendaStorage({ children }) {
    const [data, setData] = React.useState(null);

    async function encomendaCreate(body) {
        const { url, options } = ENCOMENDA_CREATE(body);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Erro ao salvar encomenda!');
    }

    async function encomendaEdit(body) {
        const { url, options } = ENCOMENDA_EDIT(body);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Erro ao salvar encomenda!');
    }

    async function encomendaGet(body) {
        const { url, options } = ENCOMENDA_GET(body);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Erro ao salvar encomenda!');
    }


    async function encomendaDelete(body) {
        const { url, options } = ENCOMENDA_DELETE(body);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Erro ao salvar encomenda!');
    }

    return (
        <EncomendaContext.Provider value={{ encomendaCreate, encomendaEdit, encomendaGet, encomendaDelete, data }}>
            {children}
        </EncomendaContext.Provider>
    );
}