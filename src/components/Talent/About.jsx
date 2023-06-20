import React, { useState } from "react";
import Div from "../Div";
import "./talent.scss";
import Spacing from "../Spacing";
import { GrFacebook } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function About({
  name,
  email,
  phone,
  address,
  description,
  label,
  link,
}) {
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
              <h3>About Me</h3>
            </Div>
            <Div className="cs-talent-data">
              <Div className="cs-form-name">
                <p className="cs-form-p">Full Name</p>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={name}
                />
              </Div>
              <Div className="cs-form-name">
                <p className="cs-form-p">Email</p>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={email}
                />
              </Div>
              <Div className="cs-form-name">
                <p className="cs-form-p">Phone No</p>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={phone}
                />
              </Div>
              <Div className="cs-form-name">
                <p className="cs-form-p">Address</p>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={address}
                />
              </Div>
              <Div className="cs-form-name">
                <p className="cs-form-p">Description</p>
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

        <Div className="cs-talent-about">
          <Div className="cs-talent-about-details">
            <Div className="cs-talent-title">
              <h3>Social Media Links</h3>
              <button onClick={handleEdit}>+ Add Link</button>
            </Div>
            <form action="#" className="row">
              <Div className="col-sm-1">
                <GrFacebook size={35} className="cs-icon-color" />
              </Div>
              <Div className="col-sm-3">
                <label className="cs-primary_color">Label</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="Enter Label"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-3">
                <label className="cs-primary_color">Link</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="Enter Link"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-3">
                <button>Add</button>
                <Spacing lg="20" md="20" />
              </Div>
            </form>
            <Div className="cs-talent-data">
              <Div className="cs-talent-name">
                <GrFacebook size={30} className="cs-icon" />
                <p className="cs-talent-p">{label}</p>
                <p>{link}</p>
                <Div className="cs-crud">
                  <FaEdit size={25} className="cs-crud-icon" />
                  <MdDelete size={25} className="cs-crud-icon" />
                </Div>
              </Div>
              <Div className="cs-talent-name">
                <GrFacebook size={30} className="cs-icon" />
                <p className="cs-talent-p">{label}</p>
                <p>{link}</p>
                <Div className="cs-crud">
                  <FaEdit size={25} className="cs-crud-icon" />
                  <MdDelete size={25} className="cs-crud-icon" />
                </Div>
              </Div>
              <Div className="cs-talent-name">
                <GrFacebook size={30} className="cs-icon" />
                <p className="cs-talent-p">{label}</p>
                <p>{link}</p>
                <Div className="cs-crud">
                  <FaEdit size={25} className="cs-crud-icon" />
                  <MdDelete size={25} className="cs-crud-icon" />
                </Div>
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
            <h3>About Me</h3>
            <button onClick={handleEdit}>Edit</button>
          </Div>
          <Div className="cs-talent-data">
            <Div className="cs-talent-name">
              <p className="cs-talent-p">Full Name</p>
              <p>{name}</p>
            </Div>
            <Div className="cs-talent-name">
              <p className="cs-talent-p">Email</p>
              <p className="cs-talent-text">{email}</p>
            </Div>
            <Div className="cs-talent-name">
              <p className="cs-talent-p">Phone No</p>
              <p>{phone}</p>
            </Div>
            <Div className="cs-talent-name">
              <p className="cs-talent-p">Address</p>
              <p>{address}</p>
            </Div>
            <Div className="cs-talent-name">
              <p className="cs-talent-p">Description</p>
              <p>{description}</p>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="90" md="45" />

      <Div className="cs-talent-about">
        <Div className="cs-talent-about-details">
          <Div className="cs-talent-title">
            <h3>Social Media Links</h3>
            <button onClick={handleEdit}>+ Add Link</button>
          </Div>
          <form action="#" className="row">
            <Div className="col-sm-1">
              <GrFacebook size={35} className="cs-icon-color" />
            </Div>
            <Div className="col-sm-4">
              <label className="cs-primary_color">Label</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="Enter Label"
              />
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-4">
              <label className="cs-primary_color">Link</label>
              <input
                type="text"
                className="cs-form_field"
                placeholder="Enter Link"
              />
              <Spacing lg="20" md="20" />
            </Div>
          </form>
          <Div className="cs-talent-data">
            <Div className="cs-talent-name">
              <GrFacebook size={30} className="cs-icon" />
              <p className="cs-talent-p">{label}</p>
              <p>{link}</p>
              <Div className="cs-crud">
                <FaEdit size={25} className="cs-crud-icon" />
                <MdDelete size={25} className="cs-crud-icon" />
              </Div>
            </Div>
            <Div className="cs-talent-name">
              <GrFacebook size={30} className="cs-icon" />
              <p className="cs-talent-p">{label}</p>
              <p>{link}</p>
              <Div className="cs-crud">
                <FaEdit size={25} className="cs-crud-icon" />
                <MdDelete size={25} className="cs-crud-icon" />
              </Div>
            </Div>
            <Div className="cs-talent-name">
              <GrFacebook size={30} className="cs-icon" />
              <p className="cs-talent-p">{label}</p>
              <p>{link}</p>
              <Div className="cs-crud">
                <FaEdit size={25} className="cs-crud-icon" />
                <MdDelete size={25} className="cs-crud-icon" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="100" md="20" />
    </>
  );
}
