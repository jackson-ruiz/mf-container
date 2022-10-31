import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "../form/Button";

const SessionInfo = () => {
  const closeSession = () => {
    alert("Cerrar sesion");
  };

  return (
    <>
      <h1 className="text-white text-center text-xl">Nombre Usuario.</h1>
      <PersonIcon style={{ fontSize: 96 }} />
      <Button
        customClass="block w-full mt-2 mb-5 px-4 py-2 text-sm"
        clickAction={closeSession}
      >
        <ExitToAppIcon className="fas fa-sign-out-alt mr-2" />
        SALIR
      </Button>
    </>
  );
};

export default SessionInfo;
