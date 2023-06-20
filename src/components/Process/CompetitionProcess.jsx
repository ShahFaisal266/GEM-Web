import React, { useState } from "react";
import { Step } from "semantic-ui-react";
import {FaTrophy } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import {MdDoneAll} from 'react-icons/md';
import {BiCategory} from 'react-icons/bi';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import "./Process.scss";

export default function CompetitionProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  return (
    <Step.Group fluid widths={4} size="small" className="step-by-step">
      <Step
        active={activeStep === 1}
        completed={activeStep > 1}
        onClick={() => handleStepClick(1)}
        className="step"
      >
        <GiArchiveRegister size={70} className="icon-color"/>
        <Step.Content>
          <Step.Title className="title">Register Yourself</Step.Title>
          <Step.Description className="decription">
            Sign up on the competition website by providing your basic details
            such as name, email, and password.
          </Step.Description>
        </Step.Content>
      </Step>
      <BsFillArrowRightCircleFill size={130} className="icon-color"/>
      <Step
        active={activeStep === 2}
        completed={activeStep > 2}
        onClick={() => handleStepClick(2)}
        className="step"
      >
        <BiCategory size={70} className="icon-color"/>
        <Step.Content>
          <Step.Title className="title">Select Category</Step.Title>
          <Step.Description className="description">
            Choose the category of your entry from the available options such as
            acting, singing, dancing.
          </Step.Description>
        </Step.Content>
      </Step>
      <BsFillArrowRightCircleFill size={130} className="icon-color"/>
      <Step
        active={activeStep === 3}
        completed={activeStep > 3}
        onClick={() => handleStepClick(3)}
        className="step"
      >
        <MdDoneAll size={70} className="icon-color"/>
        <Step.Content>
          <Step.Title className="title">Submit your work</Step.Title>
          <Step.Description className="description">
            Upload your entry as per the guidelines mentioned on the website,
            along with any required details such as title.
          </Step.Description>
        </Step.Content>
      </Step>
      <BsFillArrowRightCircleFill size={130} className="icon-color"/>
      <Step
        active={activeStep === 4}
        onClick={() => handleStepClick(4)}
        className="step"
      >
        <FaTrophy size={70} className="icon-color"/>
        <Step.Content>
          <Step.Title className="title">Be a winner</Step.Title>
          <Step.Description className="description">
            Wait for the results to be announced and see if your entry is
            selected as a winner.
          </Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}
