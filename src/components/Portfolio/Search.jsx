import React from "react";
import Div from "../Div";

export default function Search() {
  return (
    <Div className="cs-search col-lg-12">
      <Div>
        <Div className="cs-heading">
          <h2>Categories</h2>
        </Div>
        <Div className="cs-search-content col-lg-12">
          <Div>
            <h4>Search Project</h4>
          </Div>
          <Div className="cs-search-fields col-lg-12">
            <input
              type="text"
              className="cs-form_field"
              placeholder="Enter name"
            />
            <input
              type="text"
              className="cs-form_field"
              placeholder="Enter topic"
            />
            <button className="cs-btn-search">
              <span>Search</span>
            </button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
