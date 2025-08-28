import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <Card className="text-center">
      <Card.Header>Котики в костюмах пришли рассказать анекдоты!</Card.Header>
      <Card.Img
        class="rounded mx-auto d-block"
        style={{ width: "500px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZBfNOioUQFCDQOjoTs_6YeVHfAVfhp0JtWCDnxUT29hoctsaU0Ddqvbkic0HBM2V0RQ&usqp=CAU"
      />
      <Card.Body>
        <Card.Title>Анекдоты</Card.Title>
        <Card.Text>
          <p>
            {" "}
            Штирлицу за шиворот упала гусеница. "Где-то взорвался танк," --
            подумал Штирлиц.
          </p>
          <p>
            Штирлиц боролся с тоской. Тоска знал больше приемов, но Штирлиц был
            более выносливым.
          </p>
          <p>
            Штирлиц дрался с огоньком. Огонек дрался как мог. Мог был парень
            крутой. А Крутая слабаков не жаловала.
          </p>
          <p>Штирлиц надел шляпу набекрень.Набекрень ушла домой без шляпы.</p>
          <p>Штирлиц знал наверняка, но Наверняк Штирлица не знал.</p>
          <p>
            Штирлиц выстрелил в слепую. Слепая упала навзничь. Взничь пискнул и
            убежал.
          </p>
        </Card.Text>
        <Button variant="danger">Кнопочка</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Анекдоты кончились</Card.Footer>
    </Card>
  );
}

export default Home;
