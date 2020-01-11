import React from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import './Time.scss';
const Time = () => {
  let history = useHistory();
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="time-container">
        <h1 className="banner">WHEN?</h1>
        <button
          className="next-button"
          onClick={() => {
            history.push('/where');
          }}
        >
          GO
        </button>
      </div>
    </CSSTransitionGroup>
  );
};

export default Time;
