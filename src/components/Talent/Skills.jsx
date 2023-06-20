import React, { useState } from "react";
import Div from "../Div";
import "./talent.scss";
import Spacing from "../Spacing";

export default function Skills({ talent, type }) {
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Option 1");

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  if (editMode) {
    return (
      <>
        <Div className="cs-talent-form">
          <Div>
            <Div className="cs-form-title">
              <h3>Skills</h3>
            </Div>
            <Div className="cs-content-data">
              <Div className="col-sm-3">
                <p className="cs-form-p">Talent</p>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="card-sorting"
                >
                  <option value="Option 1">Dance</option>
                  <option value="Option 2">Singing</option>
                  <option value="Option 3">Painting</option>
                </select>
              </Div>
              <Div className="col-sm-3">
                <label className="cs-form-p">Dance Types</label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="card-sorting"
                >
                  <option value="Option 1">Dance</option>
                  <option value="Option 2">Singing</option>
                  <option value="Option 3">Painting</option>
                </select>
              </Div>
              <Div className="col-sm-3">
                <button className="cs-add-btn" onClick={handleCancel}>
                  Add
                </button>
              </Div>

              <Spacing lg="50" md="20" />
            </Div>
            <Div>
              <button className="cs-button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="cs-button" onClick={handleSave}>
                Save
              </button>
            </Div>
          </Div>
        </Div>
        <Spacing lg="60" md="20" />
        <Div className="cs-talent-about">
          <Div className="cs-talent-about-details">
            <Div className="cs-talent-title">
              <h3>Skills</h3>
            </Div>
            <Div className="cs-talent-data">
              <Div className="cs-talent-name">
                <p className="cs-talent-p">{talent}</p>
                <p>{type}</p>
              </Div>
              <Div className="cs-talent-name">
                <p className="cs-talent-p">{talent}</p>
                <p>{type}</p>
              </Div>
              <Div className="cs-talent-name">
                <p className="cs-talent-p">{talent}</p>
                <p>{type}</p>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="100" md="20" />
      </>
    );
  }
  return (
    <>
      <Div className="cs-talent-about">
        <Div className="cs-talent-about-details">
          <Div className="cs-talent-title">
            <h3>Skills</h3>
            <button onClick={handleEdit}>+ Add New</button>
          </Div>
          <Div className="cs-talent-data">
            <Div className="cs-talent-name">
              <p className="cs-talent-p">{talent}</p>
              <p>{type}</p>
            </Div>
            <Div className="cs-talent-name">
              <p className="cs-talent-p">{talent}</p>
              <p>{type}</p>
            </Div>
            <Div className="cs-talent-name">
              <p className="cs-talent-p">{talent}</p>
              <p>{type}</p>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="100" md="20" />
    </>
  );
}
