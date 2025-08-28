import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

const Elem = ({
  text = "иконка",
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmbNc8Ts_iZv-491FQFtg2K2k1VVLWYpmJA&s",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-2 d-grid gap-3">
      <Image src={src} width={200}/>
      <Button
        style={{ height: "50px" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Нажми
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "200px" }}>
              {text}
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Elem;
