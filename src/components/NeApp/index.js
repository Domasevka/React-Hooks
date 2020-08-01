import React from 'react';
import '../App/index.css';
import NeApp1 from '../NeApp1';

const NeApp = (props) => {
  const {count} = props;

  return (
    <>
      <div
        className="App-link"
        onClick={() => {}}
      >
        NeApp1 Count:{count}
      </div>
      <NeApp1 count={count}/>
    </>
  );
};

export default NeApp;