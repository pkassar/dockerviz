import React from 'react';
import Button from './Button';
import './Controls.css';

const Controls = ({ ps, psa, dcup, stop, fp, open, dcdwn, directories }) => (
  <div id="controlsBar">
    <button id="openFolder" onClick={open} >Browse</button>
    <Button name="Online containers" click={ps} />
    <Button name="All containers" click={psa} />
    <Button name="Compose up" click={dcup} />
    <Button name="Compose down" click={dcdwn} />
    <Button name="Stop containers" click={stop} />
    <Button name="Saved directories" click={directories} />
  </div>
);


export default Controls;
