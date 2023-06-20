import React from "react";
import { Icon } from "@iconify/react";
import "./pricing.scss";
import Div from "../Div";
import Spacing from "../Spacing";

export default function EventFound({ number }) {
  return (
    <Div className="cs-event_found row">
      <Div>
        <Div className="card-fields"> Found {number} in totals</Div>
      </Div>
      <Div className="card-sorting">
        <select className="cs-form_field">
          <option value="">Popularity Descending</option>
          <option value="1">Popularity Ascending</option>
          <option value="2">Rating Descending</option>
          <option value="3">Rating Ascendeing</option>
          <option value="4">Release date Descending</option>
          <option value="5">Release date Ascending</option>
        </select>
        <Spacing lg="20" md="20" />
      </Div>
    </Div>
  );
}
