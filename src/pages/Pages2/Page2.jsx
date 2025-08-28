import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Elem from "./Elem";
import { Col, Container, Row } from "react-bootstrap";
import { icons } from "./entities";

function Page2() {
  return (
    <Container className="d-flex flex-wrap p-2">
      {icons.map((item, index) => (
        <Elem key={index} src={item.src} text={item.text} />
      ))}
    </Container>
  );
}

export default Page2;
