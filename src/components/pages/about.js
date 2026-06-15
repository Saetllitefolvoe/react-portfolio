import React from "react";
import profilePicture from "../../../static/assets/images/bio/profile.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        En materia agroalimentaria, los consumidores buscan cada vez más:
        Productos cosméticos naturales, es decir, elaborados con ingredientes de
        origen natural en su mayoría Productos BIO certificados, es decir,
        productos en cuya elaboración se ha dado preferencia a ingredientes
        procedentes de la agricultura ecológica No es tan fácil distinguir entre
        estos dos conceptos... Y por si fuera poco, tampoco existe una normativa
        que lo regule. De ahí que coexistan multitud de etiquetas que vienen a
        confundir más las cosas. «Natural» no significa «BIO» Aunque no existe
        una definición oficial, se considera que un producto cosmético es
        «natural» cuando contiene al menos un 95 % de ingredientes de origen
        natural, es decir, obtenidos directamente de la naturaleza o que han
        sido sometidos a procesos sencillos como el prensado, la destilación al
        vapor, el remojo, etc. Los siguientes ingredientes también se consideran
        «de origen natural»: Sustancias animales producidas de forma natural,
        como la leche, la miel, la cera de abeja o la jalea Sustancias minerales
        naturales, como la arcilla o el magnesio Y recuerda: que un producto se
        anuncie como «natural», no significa que sea «BIO»
      </div>
    </div>
  );
}
