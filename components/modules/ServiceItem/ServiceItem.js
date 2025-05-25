import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ServiceItem({ title, description, img, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div class="col-sm-7">
          <h4 style={{ alignItems: "center", display: "flex" }}>
            <FontAwesomeIcon
              icon={Icons[icon]}
              className="service-icon"
              style={{ width: "15px", height: "15px", padding: "10px" }}
            />
            {title}
          </h4>
          <p class="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
