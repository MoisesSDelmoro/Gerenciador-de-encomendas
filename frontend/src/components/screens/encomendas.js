import '../../App.css';
import { React, useState, useEffect, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { ENCOMENDA_GET } from '../../api/api'
import styles from './encomendas.module.css'
import { EncomendaContext } from '../../api/context'
import { ReactComponent as Edit } from '../../assets/edit.svg'
import { ReactComponent as Delet } from '../../assets/del.svg'
import { OverlayTrigger, Tooltip, Modal } from 'react-bootstrap'
import { Col, Container, Row } from 'react-bootstrap'
import ModalEdit from '../modals/modalEdit'
import ModalRemove from '../modals/modalRemove';
import { ButtonSalvar, ButtonAcc } from '../button/button';
import Input from '../../components/input/input'
import useForm from '../form/useForm'

function Encomendas() {
  const [encomendas, setEncomendas] = useState(null);
  const [flag, setFlag] = useState('')

  const { data, encomendaCreate } = useContext(EncomendaContext);
  const [show, setShow] = useState(false);

  const handleClose = () => { clearInputs(); setShow(false) }
  const handleShow = () => setShow(true);

  const origem = useForm();
  const destino = useForm();
  const peso = useForm();
  const date = useForm();

  useEffect(() => {
    async function fetchEncomendas() {
      const { url, options } = ENCOMENDA_GET();
      const response = await fetch(url, options);
      const json = await response.json();
      setEncomendas(json)
      setFlag('A')
    }
    fetchEncomendas();
  }, [flag]);

  async function handleCreate(event) {
    event.preventDefault();
    // var body = {
    //   origem: origem,
    //   destino: destino,
    //   peso: peso,
    //   data: date
    // }
    // encomendaCreate(data.id, body);
    // setReload(reload+1)
    handleClose()
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(date.value)
    var body = {
      origem: origem.value,
      destino: destino.value,
      peso: peso.value,
      data: date.value
    }
    encomendaCreate(body);
    // setReload(reload+1)
    handleClose()
  }

  function clearInputs() {
    origem.setValue("")
    destino.setValue("")
    peso.setValue("")
    date.setValue("")
  }

  return (
    <div className='center'>
      <div className="container-scroll" style={{ marginTop: '10vh', marginBottom: "0px" }}>
        <>
          {
            encomendas ?
              <>
                <div>
                  {encomendas &&
                    <>
                      <Container>
                        <div className={styles.spacing}>
                          <Row>
                            {
                              encomendas.map((encomenda) => (
                                <Col xs={3}>
                                  <div className={styles.card}>
                                    <div className={styles.info}>
                                      <Row>
                                        <h1 className={styles.nome}>{encomenda.id}</h1>
                                        <h1 className={styles.nome}>{encomenda.origem}</h1>
                                        <h2 className={styles.nome}>{encomenda.destino}</h2>
                                        <h3 className={styles.nome}>{encomenda.peso}</h3>
                                        <h3 className={styles.nome}>{encomenda.data}</h3>
                                      </Row>
                                      <div>
                                        <div className={styles.btnGroup}>
                                          <Row>
                                            <Col xs={6}>
                                              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}>
                                                <div className={styles.btnCircle}>
                                                  <>
                                                    <Edit className={styles.icon} />
                                                    <Tooltip id="tooltip-disabled" >
                                                      <ModalEdit encomenda={encomenda} origem={origem} destino={destino} peso={peso} date={date} />
                                                    </Tooltip>
                                                  </>
                                                </div>
                                              </OverlayTrigger>
                                            </Col>
                                            <Col xs={6}>
                                              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}>
                                                <div className={styles.btnCircle}>
                                                  <Delet className={styles.icon} />
                                                  <Tooltip id="tooltip-disabled" >
                                                    <ModalRemove encomenda={encomenda} />
                                                  </Tooltip>
                                                </div>
                                              </OverlayTrigger>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              ))
                            }
                            <Modal className="modal" show={show} onHide={''} animation={false} centered>
                              <Modal.Header>
                                <Modal.Title style={{ fontWeight: 'bold', color: "#4f4e4e" }}>Adicionar encomenda</Modal.Title>
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
                                  style={{ width: '80px', height: '35px', fontWeight: 'normal', padding: '0' }}
                                  onClick={handleSubmit}
                                >
                                  Salvar
                                </ButtonAcc>
                              </Modal.Footer>
                            </Modal>

                          </Row>
                          <Row>
                            <ButtonSalvar style={{ width: '130px', marginTop: '35px' }} onClick={handleShow}>Adicionar Encomenda</ButtonSalvar>
                          </Row>
                        </div>
                      </Container>
                    </>
                  }
                </div>
              </>
              :
              <>
              </>
          }
        </>
      </div>
    </div >
  )
}

export default Encomendas

