import React from "react";
import contactPagePicture from "../../../static/assets/images/auth/img_2064.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="content-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">milo.tonon@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon
                className="instagram"
                icon={["fab", "instagram"]}
              />
            </div>
            <div className="text">@camilo.tbf</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Bilbao, Bizkaia</div>
          </div>
        </div>
      </div>
    </div>
  );
}
