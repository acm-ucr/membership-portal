import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Col, Row } from "react-bootstrap";
import { useSession } from "next-auth/react";

const Point = () => {
  const { data: session } = useSession();
  const points = session.user.points;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Row className="w-11/12 flex items-center justify-start">
        <Col
          xs={4}
          className="py-3 w-1/3 flex flex-col items-center justify-center"
        >
          <CircularProgressbar
            className="px-1 "
            value={(parseInt(points) / 500) * 100}
            text={`${points}/500`}
            backgroundPadding={6}
            strokeWidth={10}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#80cbc4",
              trailColor: "#333",
              textSize: "14px",
            })}
          />
          <p className="text-xl text-white">Sticker</p>
        </Col>
        <Col
          xs={4}
          className="py-3 w-1/3 flex flex-col items-center justify-center"
        >
          <CircularProgressbar
            className="px-1 "
            value={(parseInt(points) / 1000) * 100}
            text={`${points}/1000`}
            backgroundPadding={6}
            strokeWidth={10}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#f78c6c",
              trailColor: "#333",
              textSize: "14px",
            })}
          />
          <p className="text-xl text-white">T-shirt</p>
        </Col>
        <Col
          xs={4}
          className="py-3 w-1/3 flex flex-col items-center justify-center"
        >
          <CircularProgressbar
            className="px-1 "
            value={(parseInt(points) / 1000) * 100}
            text={`${points}/1000`}
            backgroundPadding={6}
            strokeWidth={10}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#ff5370",
              trailColor: "#333",
              textSize: "14px",
            })}
          />
          <p className="text-xl text-white">T-shirt</p>
        </Col>
        <Col
          xs={4}
          className="py-3 w-1/3 flex flex-col items-center justify-center"
        >
          <CircularProgressbar
            className="px-1 "
            value={(parseInt(points) / 1000) * 100}
            text={`${(parseInt(points) / 1000) * 100}%`}
            backgroundPadding={6}
            strokeWidth={10}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#82aaff",
              trailColor: "#333",
              textSize: "14px",
            })}
          />
          <p className="text-xl text-white">T-shirt</p>
        </Col>
      </Row>
    </div>
  );
};

export default Point;
