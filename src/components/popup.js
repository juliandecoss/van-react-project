import React, { useState } from "react";
import Navbar from "./navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import { CopyBlock, nord } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../popup.css";

function PopupPrueba() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const closeModal = () => setOpen(false);
  const lequierpasar =
    "les voy a pasar un texto a ver si no me corren me equivqué lo pagaré muy caro? jeje no sabemos";
  const realone = {
    clave_sia: "string",
    elemento_entrada_sia: "string",
    codigo_entidad: "string",
    tipo_mensaje: "string",
    pan: "string",
    cuenta: "string",
    tipo_operacion: "string",
    monto_transaccion: "string",
    monto_transaccion_moneda_titular: "string",
    fecha_hora_dispositivo_origen: "string",
    numero_transaccion_origen: "string",
    codigo_categoria_comercio: "string",
    entidad_adquiriente: "string",
    datos_punto_servicio_terminal: "string",
    tasas: "string",
    indentificador_adquiriente: "string",
    numero_autorizacion: "string",
    codigo_accion_sia: "string",
    identificador_terminal: "string",
    identificador_comercio: "string",
    nombre_localidad_comercio: "string",
    moneda_transaccion: "string",
    moneda_titular: "string",
    operaciones_cashback: "string",
    fecha_dispositivo_origen: "string",
    hora_dispositivo_origen: "string",
    contrato: "string",
  };
  const ManagePopup = (text) => {
    setOpen((o) => !o);
    setText(text);
  };
  //   const contentStyle = { background: "#000",color:"#ffff" };
  //   const overlayStyle = { background: "rgba(0,0,0,0.5)" ,color:"#ffff"};
  //   const arrowStyle = { color: "#0f0ff" }; // style for an svg element
  return (
    <>
      <Navbar />
      <Link
        value={lequierpasar}
        onClick={() => ManagePopup(lequierpasar)}
        className="van-detail-return"
      >
        ⬅️ Back to all vans
      </Link>
      <div>
        <button
          type="button"
          className="button"
          onClick={() => setOpen((o) => !o)}
        >
          Controlled Popup
        </button>
        <Popup
          open={open}
          closeOnDocumentClick
          onClose={closeModal}
          arrow={true}
          className="popup-content popup-arrow popup-overlay"
        >
          <div className="modal">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <div className="header"> Events Schema </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
            <p>{text}</p>
            <CopyBlock
              text={JSON.stringify(realone, null, 2)}
              language="python"
              codeBlock={true}
              showLineNumbers={true}
              startingLineNumber={1}
              theme={nord}
              highlight={"1-30"}
              wrapLines
            />
            {/* <SyntaxHighlighter language="javascript" style={dark}>
              {JSON.stringify(realone, null, 2)}
            </SyntaxHighlighter> */}
            <button
              className="button"
              onClick={() => {
                navigator.clipboard.writeText(text);
              }}
            >
              Copia el texto
            </button>
          </div>
        </Popup>
      </div>
    </>
  );
}

export default PopupPrueba;
