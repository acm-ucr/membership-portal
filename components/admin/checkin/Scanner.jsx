import { useState } from "react";
import { useZxing } from "react-zxing";
import axios from "axios";
import toast from "react-hot-toast";

const Scanner = () => {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      toast("✅ QR Scanned");
    },
  });

  const addPoints = async () => {
    if (result === "") {
      toast("❌ No Valid Code");
      return;
    }
    axios
      .post("/api/addPoints", { result, points: 10 })
      .then(() => {
        setResult("");
        toast("✅ Points Added");
      })
      .catch(() => {
        toast("❌ Interal Server Error");
      });
  };

  return (
    <div className="w-11/12 flex justify-center items-center flex-col">
      <div className="flex justify-center items-center">
        <video ref={ref} className="w-10/12 border-8 border-acm-black mt-2" />
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <button
          onClick={addPoints}
          className="px-3 py-2 my-2 rounded-xl text-white bg-black border-2 text-2xl border-white hover:!bg-white hover:!text-black"
        >
          Add Points
        </button>
      </div>
    </div>
  );
};

export default Scanner;
