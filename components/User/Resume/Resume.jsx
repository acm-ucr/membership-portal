import Header from "../../Header";
import Upload from "./Upload";
import Feedback from "./Feedback";

const Resume = () => {
  return (
    <div className="pt-[10vh] flex flex-col justify-center items-start w-11/12">
      <Header title="resume" color="bg-acm-marine" />
      <p className="text-acm-black text-2xl font-lexend  m-0 left-auto px-2 pt-2">
        In order to nurture the professional development of our members, ACM
        offers a resume review! <br />
        Submit a link to your resume and receive feedback from our board
        members:
      </p>
      <Upload />
      <Feedback />
    </div>
  );
};

export default Resume;
