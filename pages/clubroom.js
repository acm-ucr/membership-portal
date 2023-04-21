import { useContext } from "react";
import CardAccess from "../components/CardAccess";
import Clubroom from "../components/Clubroom";
import UserContext from "../components/UserContext";
// import PageError from "../components/PageError";

const ClubroomPage = () => {
  const { user } = useContext(UserContext);

  return (
    user && (
      <div>
        <Clubroom />
        <CardAccess
          email={user.email}
          name={user.name}
          rowNum={user.row}
          uid={user.uid}
        />
      </div>
    )
  );
};
export default ClubroomPage;
