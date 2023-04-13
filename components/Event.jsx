import Card from "react-bootstrap/Card";

const Event = ({ title, location, shadow, start, description }) => {
  return (
    <div
      className={`h-full bg-acm-black rounded shadow-[10px_-8px_0px_0px] ${shadow}`}
    >
      <Card className="!bg-acm-black font-lexend  !border-none">
        <Card.Body className="flex justify-evenly">
          <Card.Title className="w-1/6">
            <p className="text-4xl inline text-acm-white">
              <br />
              {start.getMonth() + 1 < 10
                ? `0` + (start.getMonth() + 1)
                : start.getMonth() + 1}
              <br />
              {start.getDate() < 10 ? `0` + start.getDate() : start.getDate()}
              <br />
              {start.getFullYear() % 100}
            </p>
          </Card.Title>
          <div className="pl-3">
            <Card.Title>
              <p className="text-2xl text-acm-white inline">{title}</p>
            </Card.Title>
            <div className="text-acm-white text-md">
              <div className="text-acm-white">
                {location}
                &nbsp; - &nbsp;
                {start.toLocaleTimeString("en", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                <br />
              </div>
              {description}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Event;
