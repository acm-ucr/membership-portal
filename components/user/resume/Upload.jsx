import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

const Upload = () => {
  const { data: session } = useSession();
  const [resume, setResume] = useState(session.user.resume.link);

  const handleSubmit = (e) => {
    axios
      .post("/api/resume", {
        resume: resume,
      })
      .then(() => toast(`✅ Resume Uploaded!`));
  };

  return (
    <div className="flex justify-start py-2">
      <input
        placeholder="resume link / pdf"
        className="w-[90vh] border-black border-2 py-2 rounded-xl px-4 text-xl font-lexend focus:outline-none"
        onChange={(e) => setResume(e.target.value)}
        value={resume}
        type="text"
      />
      <button
        id="upload"
        onClick={handleSubmit}
        className="py-2 px-3 mx-2 font-lexend font-bold text-acm-white border-2 border-acm-marine text-xl bg-acm-marine rounded-lg hover:border-acm-black"
      >
        submit
      </button>
    </div>
  );
};

export default Upload;
