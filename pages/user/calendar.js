import ProtectedPage from "../../components/ProtectedPage";
import Calendar from "../../components/Calendar/Calendar";

const CalendarPage = () => {
  return (
    <ProtectedPage title="Calendar" restrictions={["member"]}>
      <div className="min-h-screen flex flex-col items-center justify-end w-10/12">
        <Calendar />
      </div>
    </ProtectedPage>
  );
};

export default CalendarPage;
