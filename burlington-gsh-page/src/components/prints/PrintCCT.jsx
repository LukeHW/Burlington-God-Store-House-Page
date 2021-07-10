/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-return-assign */
// import modules
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useReactToPrint } from 'react-to-print';

const useStyles = makeStyles((theme) => ({
    button: {
        align: 'center',
        marginBottom: 40
    }
}));

function PrintCCT() {

  const classes = useStyles();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // keep image in DOM, but hidden
  // <div style={{ display: "none" }}><ComponentToPrint ref={componentRef} /></div>

  return (
      <div>
        <div style={{ overflow: "hidden", height: "0" }}><img alt='' ref={componentRef} src="/CCT Info.jpg" width="100%" height="1000" /></div>
        <button type="button" onClick={handlePrint} className={classes.button}>Print</button>
      </div>
  );
}

export default PrintCCT;