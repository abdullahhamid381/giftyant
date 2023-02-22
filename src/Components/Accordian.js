import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import '../scss/Accordian.scss'
import { Accordiandata } from "./Data";
export default function Accordian() {
  const [Accordian, setAccordian] = useState(Accordiandata);
  return (
    <div className="accordian-parent">




      {/*------------------------- START HERE THIS SECTION OF ACCORDIAN ------------------------- */}
      <div>
        {Accordian.map((Accordianmap) => {
          return (
            <div className="accordian">
              <Accordion
                className="accordian"
                style={{ padding: "5px 0" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordian"
                >
                  <Typography >
                    <span> {Accordianmap.icon} </span>
                    {Accordianmap.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian" style={{paddingLeft:"30px", marginTop: "-10px",opacity:'0.8'}}>
                  {Accordianmap.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
      {/*<======================>  END HERE  THIS SECTION OF THE ACCORDIAN  <======================> */}




      { /*------------------------- START HERE THIS DIV SECTION IS ACCORDIAN IMAGE ------------------------- */}

    </div>

    /*<======================>  END HERE  THIS DIV SECTION IS ACCORDIAN IMAGE  <======================> */
  );
}
