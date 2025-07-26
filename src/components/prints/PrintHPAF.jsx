/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-return-assign */
// import modules
import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useReactToPrint } from "react-to-print";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(() => ({
  button: {
    align: "center",
    marginBottom: 40,
  },
}));

function PrintHPAF() {
  const classes = useStyles();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // keep image in DOM, but hidden
  // <div style={{ display: "none" }}><ComponentToPrint ref={componentRef} /></div>

  return (
    <div>
      <div style={{ overflow: "hidden", height: "0" }}>
        <img style={{ padding: 15 }} alt="" ref={componentRef} src="/Harvester's Info 3.jpg" width="96%" height="980" />
      </div>
      <Hidden xsDown>
        <button type="button" onClick={handlePrint} className={classes.button}>
          Print
        </button>
      </Hidden>
    </div>
  );
}

export default PrintHPAF;
