import React, { useState, useEffect, SyntheticEvent, useRef } from "react";
import { DATOSPERSONA } from "../../utils/types/datosPersona";
import { Header } from "./components/header";
import { ProgressBarElem } from "./components/progressbar";
import "./style.css";

export function SingUp() {
  const infoEnd = useRef<null | HTMLDivElement>(null);

  const [datosPersona, setDatosPersona] = useState<DATOSPERSONA>({
    nombre: "",
    segundo_nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    fecha_de_nacimiento: "",
    email: "",
    telefono: "",
  });

  const [stage, setStage] = useState<number>(0);
  const [buttonStage, setButtonStage] = useState<number>(-1);
  const [completed, setCompleted] = useState<boolean>(false);

  const inputFocus1 = useRef<HTMLInputElement>(null);
  const inputFocus2 = useRef<HTMLInputElement>(null);
  const inputFocus3 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (buttonStage === 0 && datosPersona.nombre === "") {
      inputFocus1.current && inputFocus1.current.focus();
    }
    if (buttonStage === 1 && datosPersona.fecha_de_nacimiento === "") {
      inputFocus2.current && inputFocus2.current.focus();
    }
    if (buttonStage === 2 && datosPersona.email === "") {
      inputFocus3.current && inputFocus3.current.focus();
    }
  }, [stage, buttonStage]);

  useEffect(() => {
    infoEnd.current?.scrollIntoView();
  }, [stage, buttonStage, datosPersona]);

  function changeDatos(event: SyntheticEvent) {
    let { name, value } = event.target as HTMLTextAreaElement;

    if (
      name === "nombre" ||
      name === "segundo_nombre" ||
      name === "apellido_paterno" ||
      name === "apellido_materno"
    )
      value = value.replace(/[^a-z]/gi, "");

    if (
      datosPersona.nombre !== "" &&
      datosPersona.apellido_paterno !== "" &&
      stage === 0
    ) {
      setStage((prevStage) => prevStage + 1);
    }
    if (name === "fecha_de_nacimiento" && stage === 1) {
      setStage((prevStage) => prevStage + 1);
    }
    if (
      datosPersona.email !== "" &&
      datosPersona.telefono !== "" &&
      stage === 2
    ) {
      setStage((prevStage) => prevStage + 1);
    }

    setDatosPersona((prevDatosPersona) => {
      return {
        ...prevDatosPersona,
        [name]: value,
      };
    });
  }

  function addButtonStage(event: SyntheticEvent) {
    let { name } = event.target as HTMLTextAreaElement;

    if (name === "add" && buttonStage < 3)
      setButtonStage((prevButtonStage) => prevButtonStage + 1);
    if (name === "sub" && buttonStage > 0)
      setButtonStage((prevButtonStage) => prevButtonStage - 1);
  }

  function closeSingUp() {
    setCompleted((prevCompleted) => !prevCompleted);
  }

  if (!completed) {
    return (
      <div id="SingUpContainer" className="SingUp-Container">
        <span className="material-symbols-outlined">minimize</span>
        <Header />
        <div className="progressBarContainer">
          <ProgressBarElem progress={stage} />
        </div>
        <div className="accept">
          <h2>Registrate!!</h2>
        </div>
        {buttonStage > -1 && (
          <div className="nombresInputs" key={"nombresInputs"}>
            <label htmlFor="nombre">Primer Nombre:</label>
            <input
              disabled={buttonStage !== 0}
              id="1"
              onChange={changeDatos}
              name="nombre"
              type="text"
              value={datosPersona.nombre}
              ref={inputFocus1}
              required
            />
            <label htmlFor="segundo_nombre">Segundo Nombre:</label>
            <input
              disabled={buttonStage !== 0}
              id="2"
              onChange={changeDatos}
              name="segundo_nombre"
              type="text"
              value={datosPersona.segundo_nombre}
            />
            <label htmlFor="apellido_paterno">Apellido Paterno:</label>
            <input
              disabled={buttonStage !== 0}
              id="3"
              onChange={changeDatos}
              name="apellido_paterno"
              type="text"
              value={datosPersona.apellido_paterno}
              required
            />
            <label htmlFor="apellido_materno">Apellido Materno:</label>
            <input
              disabled={buttonStage !== 0}
              id="4"
              onChange={changeDatos}
              name="apellido_materno"
              type="text"
              value={datosPersona.apellido_materno}
            />
          </div>
        )}
        {buttonStage > 0 && (
          <h4 className="nombreResponse Response">{`Hola: ${datosPersona.nombre} ${datosPersona.segundo_nombre} ${datosPersona.apellido_paterno} ${datosPersona.apellido_materno}`}</h4>
        )}
        {buttonStage >= 1 && (
          <div className="fechaInput" key={"fechaInput"}>
            <label htmlFor="fecha_de_nacimiento">Fecha De Nacimiento:</label>
            <input
              disabled={buttonStage !== 1}
              id="5"
              onChange={changeDatos}
              name="fecha_de_nacimiento"
              type="date"
              value={datosPersona.fecha_de_nacimiento}
              ref={inputFocus2}
              required
            />
          </div>
        )}
        {buttonStage > 1 && (
          <h4 className="fechaResponse Response">{`Fecha de Nacimiento: ${datosPersona.fecha_de_nacimiento}`}</h4>
        )}
        {buttonStage >= 2 && (
          <div className="contactosInputs" key={"contactosInputs"}>
            <label htmlFor="email">Email:</label>
            <input
              disabled={buttonStage !== 2}
              id="6"
              onChange={changeDatos}
              name="email"
              type="email"
              value={datosPersona.email}
              ref={inputFocus3}
              required
            />
            <label htmlFor="telefono">Telefono:</label>
            <input
              disabled={buttonStage !== 2}
              id="7"
              onChange={changeDatos}
              name="telefono"
              type="tel"
              value={datosPersona.telefono}
              required
            />
          </div>
        )}
        {buttonStage > 2 && (
          <h4 className="contactoResponse Response">{`Email: ${datosPersona.email} / Telefono: ${datosPersona.telefono}`}</h4>
        )}
        {buttonStage === 3 && (
          <div className="Thanks" key={"Thanks"}>
            <h3>Gracias!!</h3>
            <p>{`Tu ID es: ${datosPersona.telefono}`}</p>
            <p>{`Tu nombre es: ${datosPersona.nombre} ${datosPersona.segundo_nombre} ${datosPersona.apellido_paterno} ${datosPersona.apellido_materno}`}</p>
            <p>{`Tu fecha de nacimiento es: ${datosPersona.fecha_de_nacimiento}`}</p>
            <p>{`Tu correo es: ${datosPersona.email}`}</p>
            <p>{`Tu telefono es: ${datosPersona.telefono}`}</p>
          </div>
        )}
        <div className="buttons">
          {buttonStage > 0 && buttonStage !== 3 && (
            <input
              onClick={addButtonStage}
              name="sub"
              type="button"
              value="◀ Back"
            />
          )}
          {buttonStage !== 3 && (
            <input
              onClick={addButtonStage}
              disabled={buttonStage === stage}
              name="add"
              type="button"
              value="Next ▶"
            />
          )}
        </div>

        {buttonStage === 3 && (
          <input
            onClick={closeSingUp}
            disabled={buttonStage !== 3}
            name="close"
            type="button"
            value="Close ❌"
          />
        )}
        <div ref={infoEnd} />
      </div>
    );
  } else {
    return (
      <div className="completed">
        <p>{`Gracias ${datosPersona.nombre}`}</p>
      </div>
    );
  }
}
