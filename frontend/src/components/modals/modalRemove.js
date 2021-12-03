import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { EncomendaContext } from '../../api/context'

const ModalRemove = observer(({ encomenda }) => {

    const { data, encomendaGet, encomendaDelete } = React.useContext(EncomendaContext);

    const [reload, setReload] = React.useState(0)

    const [show, setShow] = useState(false)
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }

    useEffect(() => {
        function fetchEncomenda() {
            if (data && reload > 0) {
                encomendaGet(data.id)
            }
        }
        fetchEncomenda();
    }, [reload]);

    const handleDelete = () => {
        encomendaDelete(encomenda.id)
        setShow(false)
        setReload(reload + 1)
        window.location.reload();
    }


    return (
        <>
            <Button onClick={handleShow}> </Button>
            <Modal className='modalWarning' show={show} onHide={handleClose} animation={false} centered>

                <Modal.Header>
                    <Modal.Title>Aviso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Deseja realmente excluir esta encomenda?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" style={{ backgroundColor: '#ff0000', borderColor: '#fff' }} onClick={handleDelete}>Excluir</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
})

export default ModalRemove