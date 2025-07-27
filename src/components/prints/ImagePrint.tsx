import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useReactToPrint } from "react-to-print";
import Hidden from "@material-ui/core/Hidden";

interface ImagePrintProps {
  imageSrc: string;
  ariaLabel?: string;
  width?: string | number;
  height?: string | number;
  buttonLabel?: string;
  useLandscape?: boolean;
}

const useStyles = makeStyles(() => ({
  button: {
    align: "center",
    marginBottom: 40,
  },
  resources: {
    maxWidth: "400px",
    minWidth: "150px",
    width: "90%",
    padding: 15,
  },
}));

const ImagePrint: React.FC<ImagePrintProps> = ({ imageSrc, ariaLabel = "Resource Image", width = "100%", height = "auto", buttonLabel = "Print", useLandscape }) => {
  const classes = useStyles();
  const componentRef = useRef<HTMLImageElement | null>(null);
  const landscape = `
  @page {
    size: landscape;
  }
`;

  const handlePrint = useLandscape
    ? useReactToPrint({
        content: () => componentRef.current,
        pageStyle: landscape,
      })
    : useReactToPrint({
        content: () => componentRef.current,
      });

  return (
    <div>
      <div style={{ overflow: "hidden", height: 0 }}>
        <img ref={componentRef} src={imageSrc} alt="To Print" style={{ width, height }} />
      </div>
      <div>
        <a aria-label={ariaLabel} target="_blank" rel="noreferrer" href={imageSrc}>
          <img src={imageSrc} alt="To Print" className={classes.resources} />
        </a>
      </div>
      <Hidden xsDown>
        <Button variant="contained" color="primary" onClick={handlePrint} className={classes.button}>
          {buttonLabel}
        </Button>
      </Hidden>
    </div>
  );
};

export default ImagePrint;
