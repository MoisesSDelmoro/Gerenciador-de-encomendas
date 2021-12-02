export const API_URL = 'http://localhost:5000';


// Funcao Cadastrar encomenda
export function ENCOMENDA_CREATE(body) {
  return {
    url: API_URL + '/encomenda/inserir',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

// Funcao listar os dados do encomenda
export function ENCOMENDA_GET(id) {
  var URLL = ''
  if (id){
    URLL = API_URL + `/encomenda/listar/${id}`
  }
  else {
    URLL = API_URL + '/encomenda/listar'
  }

  return {
    url: URLL,
    options: {
      method: 'GET'
    },
  };
}

// Funcao editar encomenda
export function ENCOMENDA_EDIT(body) {
  return {
    url: API_URL + '/encomenda/atualizar',
    options: {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

// Funcao deletar encomenda
export function ENCOMENDA_DELETE(id) {
  return {
    url: API_URL + `/encomenda/excluir/${id}`,
    options: {
      method: 'DELETE'
    },
  };
}