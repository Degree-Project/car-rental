import CarCarousel from "../components/CarCarousel";
import { Container, Row, Col } from "react-bootstrap";
export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CarCarousel />
            {/* <img className="w-100 h-100" src="./banner.jpg" alt="" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
