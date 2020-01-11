import React from 'react';
import { MdMyLocation } from 'react-icons/md';
import { CSSTransitionGroup } from 'react-transition-group';
import './Where.scss';
//MdMyLocation
const Where = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="where-container">
        <h1 className="banner">WHERE?</h1>
        <form className="input-form">
          <label for="location-input">
            <MdMyLocation className="location-icon" />
          </label>
          <input id="location-input" type="text" placeholder="location" />
        </form>
        <button className="next-button">Reserve</button>
      </div>
    </CSSTransitionGroup>
  );
};

export default Where;
