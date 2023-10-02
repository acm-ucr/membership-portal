import Header from "../../Header";
import Upload from "./Upload";
import Feedback from "./Feedback";

const Resume = () => {
  return (
    <div className="pt-[10vh] flex flex-col justify-center items-start w-11/12">
      <Header title="resume" color="bg-acm-marine" />
      <p className="text-acm-black text-2xl font-lexend  px-2 pt-2">
        In order to nurture the professional development of our members, ACM
        offers a resume review! Please ensure your resume follows the given
        guidelines:
      </p>
      <ul className="list-disc text-acm-black text-xl font-lexend">
        <li>Created via using LateX and is publicly accessible</li>
        <li>
          Follows the template resume provided at
          <a
            className="no-underline"
            target="_blank"
            href="https://www.overleaf.com/read/rfmgjyrzdwbt"
            rel="noreferrer"
          >
            <span className="no-underline text-acm-marine hover:cursor-pointer font-semibold px-2">
              https://www.overleaf.com/read/rfmgjyrzdwbt
            </span>
          </a>
        </li>
        <li>File name is first_last_Resume.pdf</li>
        <li>
          Follows proper guidelines including:
          <ul className="list-disc font-light">
            <li>Spelling month and school names</li>
            <li>Putting role and organization on separate lines</li>
            <li>Putting location and time spent on separate lines</li>
            <li>Use unique action verbs</li>
            <li>Specifying what, how, and why in bullet points</li>
            <li>Putting quantitative key metrics</li>
          </ul>
        </li>
      </ul>
      <p className="text-acm-black text-2xl font-lexend px-2 pt-2">
        Submit a link to your resume and receive feedback from our board
        members:
      </p>
      <Upload />
      <Feedback />
    </div>
  );
};

export default Resume;
