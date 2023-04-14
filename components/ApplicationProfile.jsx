import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ApplicationProfile = ({ color, name, email, image }) => {
  return (
    <Row className={` m-0 p-0 flex justify-center items-center`}>
      <Col
        sm={10}
        xs={8}
        className={`px-2 py-4 font-lexend text-acm-black m-0 ${color} m-1 rounded-2xl flex justify-center items-center flex-col`}
      >
        {image ? (
          <img
            className={`shadow-[10px_8px_0px_0px] shadow-acm-white w-10/12 mb-3`}
            src={image}
            alt="Profile Picture of Board Member"
          />
        ) : null}
        <p className={`inline text-xl font-medium mb-0`}>{name}</p>
        <br />
        <p className="inline text-[1.1rem] mb-0">{email}</p>
      </Col>
    </Row>
  );
};

export default ApplicationProfile;
