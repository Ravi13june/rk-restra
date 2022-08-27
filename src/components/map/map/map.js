import { Row, Col, Nav, Tab } from "react-bootstrap";
import FAQ from "./FAQ";

function map() {
  return (
    <div
      className="container"
      style={{ paddingBottom: "100px", paddingTop: "50px" }}
    >
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Question</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Help</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <FAQ />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <FAQ />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default map;
