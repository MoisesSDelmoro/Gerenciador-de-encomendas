import React from 'react'
import { EncomendaContext } from '../../api/context'
import { ButtonAcc } from '../button/button'
import { Modal, Button } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { Col, Container, Row } from 'react-bootstrap'
import Input from '../../components/input/input'


const ModalEdit = observer(({ encomenda, origem, destino, peso, date }) => {
    const { encomendaEdit } = React.useContext(EncomendaContext)
    const [show, setShow] = React.useState(false)

    const handleClose = () => { clearInputs(); setShow(false) }
    const handleShow = () => { fillInputs(); setShow(true) }

    async function handleSubmit(event) {
        event.preventDefault();
        var body = {
            id: encomenda.id,
            origem: origem.value,
            destino: destino.value,
            peso: peso.value,
            data: date.value
        }
        encomendaEdit(body)
        handleClose()
        window.location.reload();
    }

    function clearInputs() {
        origem.setValue("")
        destino.setValue("")
        peso.setValue("")
        date.setValue("")
    }

    function fillInputs() {
        origem.setValue(encomenda.origem)
        destino.setValue(encomenda.destino)
        peso.setValue(encomenda.peso)
        date.setValue(encomenda.data)
    }

    return (
        <>
            {
                <>
                    <Button onClick={handleShow}> </Button>
                    <Modal className="modal" show={show} onHide={''} animation={false} centered>
                        <Modal.Header>
                            <Modal.Title style={{ fontWeight: 'bold', color: "#4f4e4e" }}>Editar encomenda {encomenda.id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Input label="Origem" type="text" name="origem" placeholder="Entre com a origem" show={false} {...origem} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Destino" type="text" name="destino" placeholder="Entre com o destino" show={false} {...destino} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Peso" type="text" name="peso" placeholder="Entre com o peso" show={false} {...peso} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Data" type="text" name="data" placeholder="Entre com a data" show={false} {...date} />
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer style={{ justifyContent: "center" }}>
                            <ButtonAcc
                                style={{ width: '80px', height: '35px', fontWeight: 'normal', padding: '0', backgroundColor: '#ff7777' }}
                                onClick={handleClose}
                            >
                                Cancelar
                            </ButtonAcc>
                            <ButtonAcc
                                style={{ width: '80px', height: '35px', fontWeight: 'normal', padding: '0' }}
                                onClick={handleSubmit}
                            >
                                Salvar
                            </ButtonAcc>
                        </Modal.Footer>
                    </Modal>
                </>
            }
        </>
    )
})

export default ModalEdit