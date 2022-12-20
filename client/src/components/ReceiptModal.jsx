import { Modal, Button, Row, Col } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/receipt.css";

export const Receipt = (props) => {
  const navigate = useNavigate();

  const printData = () => {
    window.print();
    navigate("/cars");
  };
  const [search] = useSearchParams();
  var pickUpDate = new Date(props.booking.pickUpDate);
  var dropOffDate = new Date(props.booking.dropOffDate);
  var temp = dropOffDate.getTime() - pickUpDate.getTime();
  var noOfDays = temp / (1000 * 3600 * 24);
  var total =
    parseInt(search.get("sd")) + parseInt(search.get("ppd")) * noOfDays;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Booking Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-row">
        <div id="booking-details">
          <Row className="w-100 mb-4">
            <Col>
              <h2>Booking ID: {props.booking.bookingId}</h2>
            </Col>
          </Row>
          <Row className="w-100 mb-4">
            <Col>
              <label htmlFor="user-name">Name</label>
              <input
                style={{
                  border: "0",
                }}
                name="user-name"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={props.userDetails.name}
              />
            </Col>
          </Row>
          <Row className="w-100 mb-4">
            <Col>
              <label htmlFor="pickUpDate">Pick-up Date</label>
              <input
                style={{
                  border: "0",
                }}
                name="pickUpDate"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={props.booking.pickUpDate}
              />
            </Col>
            <Col>
              <label htmlFor="pickUpTime">Pick-up Time</label>
              <input
                style={{
                  border: "0",
                }}
                name="pickUpTime"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={props.booking.pickUpTime}
              />
            </Col>
          </Row>
          <Row className="w-100 mb-4">
            <Col>
              <label htmlFor="pickUpDate">Drop-off Date</label>
              <input
                style={{
                  border: "0",
                }}
                name="DropOffDate"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                value={props.booking.dropOffDate}
                disabled
              />
            </Col>
            <Col>
              <label htmlFor="pickUpTime">Pick-up Time</label>
              <input
                style={{
                  border: "0",
                }}
                name="pickUpTime"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={props.booking.dropOffTime}
              />
            </Col>
          </Row>
          <Row className="w-100 mb-4">
            <Col>
              <label htmlFor="carName">Car Name</label>
              <input
                style={{
                  border: "0",
                }}
                name="carName"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={`${search.get("cmname")} ${search.get("crname")}`}
              />
            </Col>
            <Col>
              <label htmlFor="noOfDays">No. Of Days</label>
              <input
                style={{
                  border: "0",
                }}
                name="noOfDays"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={noOfDays}
              />
            </Col>
          </Row>
          <Row className="w-100 mb-4">
            <Col className="gt">
              <label htmlFor="totalCost">Grand Total</label>
            </Col>
            <Col>
              <input
                style={{
                  border: "0",
                }}
                name="totalCost"
                className="rounded p-2 w-100 text-dark b-0"
                type="text"
                disabled
                value={total}
              />
            </Col>
          </Row>
          <Row>
            <h5>Note : </h5>
            <ul className="note-ul">
              <li>
                <p className="note">Payment to made during car pick.</p>
              </li>
              <li>
                <p className="note">
                  Pick up location CarScopr Office, near Goa International
                  Airport,Dabolim.
                </p>
              </li>
            </ul>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={() => printData()}>
          Print
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
