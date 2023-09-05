import { QRCodeSVG } from "qrcode.react";
import { useSession } from "next-auth/react";

const Photo = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-center items-center">
      <QRCodeSVG value={session.user.id} size={300} />
    </div>
  );
};

export default Photo;
