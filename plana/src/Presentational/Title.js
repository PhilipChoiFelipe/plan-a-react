import React from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import './Title.scss';
const Title = () => {
  let history = useHistory();
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="title-container">
        <h1 className="title">PlanA</h1>
        <p className="sub-title">Best day comes spontaneously</p>
        <button
          onClick={() => {
            history.push('./time');
          }}
          className="next-button"
        >
          Go
        </button>
      </div>
    </CSSTransitionGroup>
  );
};

export default Title;
