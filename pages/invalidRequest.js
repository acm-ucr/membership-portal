import PageError from "../components/PageError";

const Error400 = () => {
  return (
    <div className="w-screen h-screen">
      <PageError
        errorCode="403"
        errorMsg="Authorization Error: You do not have access to this page!"
      />
    </div>
  );
};

export default Error400;
