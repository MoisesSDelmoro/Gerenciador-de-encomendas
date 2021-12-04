describe('TESTE DA API - MIDDLEWARE', () => {
    let id1, id2;

    describe('TESTE 1', () => {
        it('POST', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:5000/encomenda/inserir',
                body: {
                    "origem": "Texas Teste",
                    "destino": "NY Teste",
                    "peso": "10 Kg",
                    "data": "04-12-2021"
                }
            }).then(
                (response) => {
                    cy.log(response)
                })
        })

        it('GET1', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:5000/encomenda/listar',
            }).then((response) => {
                id1 = response.body.find(item => item.origem === 'Texas Teste').id
            })
        })

        it('GET BY ID 1', () => {
            cy.request({
                method: 'GET',
                url: `http://localhost:5000/encomenda/listar/${id1}`,
            }).then((response) => {
                cy.log(response)
            })
        })

        it('PUT 1', () => {
            cy.request({
                method: 'PUT',
                url: 'http://localhost:5000/encomenda/atualizar',
                body: {
                    "id": id1,
                    "origem": "Texas EDITADO",
                    "destino": "NY EDITADO",
                    "peso": "10 Kg",
                    "data": "04-12-2021"
                }
            }).then(
                (response) => {
                    console.log(response.status)
                })
        })

        it('DELETE1', () => {
            cy.request({
                method: 'DELETE',
                url: `http://localhost:5000/encomenda/excluir/${id1}`
            })
        })       
    })
    
    describe('TESTE 2', () => {
        it('POST2', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:5000/encomenda/inserir',
                body: {
                    "origem": "Arizona Teste",
                    "destino": "DC Teste",
                    "peso": "10 Kg",
                    "data": "04-12-2021"
                }
            }).then(
                (response) => {
                    cy.log(response)
                })
        })
   
        it('GET2', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:5000/encomenda/listar',
            }).then((response) => {
                id2 = response.body.find(item => item.origem === 'Arizona Teste').id
            })
        })

        
        it('GET BY ID 2', () => {
            cy.request({
                method: 'GET',
                url: `http://localhost:5000/encomenda/listar/${id2}`,
            }).then((response) => {
                cy.log(response)
            })
        })

        it('PUT 2', () => {
            cy.request({
                method: 'PUT',
                url: 'http://localhost:5000/encomenda/atualizar',
                body: {
                    "id": id2,
                    "origem": "Arizona EDITADO",
                    "destino": "DC EDITADO",
                    "peso": "10 Kg",
                    "data": "04-12-2021"
                }
            }).then(
                (response) => {
                    console.log(response.status)
                })
        })

        it('DELETE2', () => {
            cy.request({
                method: 'DELETE',
                url: `http://localhost:5000/encomenda/excluir/${id2}`
            })
        })
    })
})