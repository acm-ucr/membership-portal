// import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useSession } from "next-auth/react";

const Photo = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-center items-center">
      {/* <Image src={photoURL} width={300} height={300} alt="profile" /> */}
      <QRCodeSVG value={session.user.id} size={300} />
    </div>
  );
};

export default Photo;
