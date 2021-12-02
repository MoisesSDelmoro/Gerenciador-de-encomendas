import React from 'react'
import { ReactComponent as Edit } from '../../assets/Edit.svg';
import { ReactComponent as Delet } from '../../assets/Del.svg';
import { ReactComponent as More } from '../../assets/more.svg'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import ModalEditMore from './ModalEditMore';
// import Modalremove from './ModalRemove';

function Card(encomenda) {

  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.especie}>{encomenda.species}</h1>
        <h1 className={styles.variedade}>{encomenda.variety}</h1>
        <div>
          <div className={styles.btnGroup}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}>
              <div className={styles.btnCircle}>
                <>
                  <Edit />
                  <Tooltip id="tooltip-disabled" >
                    {/* <ModalEditMore encomenda={encomenda}/> */}
                  </Tooltip>
                </>
              </div>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}>
              <div className={styles.btnCircle}>
                <>
                  <Delet />
                  <Tooltip id="tooltip-disabled" >
                    {/* <Modalremove encomenda={encomenda}/> */}
                  </Tooltip>
                </>
              </div>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Visualizar</Tooltip>}>
              <div className={styles.btnCircle}>
                <>
                  <More />
                  <Tooltip id="tooltip-disabled" >
                    {/* <ModalEditMore encomenda={encomenda}/> */}
                  </Tooltip>
                </>
              </div>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
