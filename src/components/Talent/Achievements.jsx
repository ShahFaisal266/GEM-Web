import React, {useState} from "react";
import Div from "../Div";
import Spacing from "../Spacing";
import "./talent.scss";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Achieves = ({ name, description }) => {
  return (
    <Div className="cs-achievement-box">
      <Div className="cs-achievement-header">
        <h4>{name}</h4>
        <Div className="cs-crud">
          <FaEdit size={25} className="cs-crud-icon" />
          <MdDelete size={25} className="cs-crud-icon" />
        </Div>
      </Div>
      <Div>
        <p>{description}</p>
      </Div>
    </Div>
  );
};
export default function Achievements({ name, description }) {
  const [editMode, setEditMode] = useState(false);
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
              <h3>Achievements</h3>
            </Div>
            <Div className="cs-talent-data">
              <Div className="cs-form-name">
                <p className="cs-form-p">Program Name</p>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={name}
                />
              </Div>
              <Div className="cs-form-name">
                <p className="cs-form-p">Tell more about your Achievements</p>
                <h6 className="cs-form-des">Tell your story in a wat that's clear, conise and creative.</h6>
                <textarea
                  className="cs-form_field"
                  defaultValue={description}
                />
              </Div>
              <Div className="cs-talent-button">
                <button className="cs-form-button" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="cs-form-button" onClick={handleSave}>
                  Save
                </button>
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="cs-flex">
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
          </Div>
          <Div className="cs-flex">
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
          </Div>
        </Div>
        <Spacing lg="150" md="80" />

      </>
    );
  }
  return (
    <>
      <Div>
        <Div className="cs-achievement-title">
          <h3>Achievements</h3>
          <button className="cs-add-btn" onClick={handleEdit}>+ Add New</button>
        </Div>
        <Spacing lg="40" md="40"/>
        <Div className="row">
          <Div className="cs-flex">
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
          </Div>
          <Div className="cs-flex">
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
            <Achieves
              name="Emilia Bose"
              description="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
