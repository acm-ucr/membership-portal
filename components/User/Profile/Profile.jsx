import { Col, Row } from "react-bootstrap";
import Header from "../../Header";
import Photo from "./Photo";
import Information from "./Information";

const Profile = () => {
  return (
    <div className="flex justify-center pt-[10vh] w-full">
      <Row className="w-11/12">
        <Header title="profile" color="bg-acm-green" />
        <Col className="flex justify-center items-stretch mb-8 p-0">
          <Photo />
        </Col>
        <Col>
          <Information />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
