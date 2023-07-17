import ProtectedPage from "../../components/ProtectedPage";
import Calendar from "/components/Calendar.jsx";

const CalendarPage = () => {
  return (
    <ProtectedPage title="Calendar" restrictions={["member"]}>
      <div className="min-h-screen flex flex-col items-center justify-end">
        <Calendar />
      </div>
    </ProtectedPage>
  );
};

export default CalendarPage;
