import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

const Upload = () => {
  const { data: session } = useSession();
  const [resume, setResume] = useState("");

  const handleSubmit = (e) => {
    axios.post("/api/submitResume", {
      uid: session.user.id,
      resume: session.user.resume,
    });
    toast(`✅ Resume Uploaded!`);
  };

  return (
    <div className="flex justify-start py-4">
      <input
        placeholder="resume link / pdf"
        className="w-[90vh] border-black border-2 py-2 rounded-xl px-4 text-xl font-lexend"
        onChange={(e) => setResume(e.target.value)}
        value={session.user.resume || resume}
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
