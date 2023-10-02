import ProtectedPage from "../../components/ProtectedPage";
import Calendar from "../../components/user/calendar/Calendar";

const CalendarPage = () => {
  return (
    <ProtectedPage title="ACM UCR | Calendar" restrictions={["member"]}>
      <div className="min-h-screen flex flex-col justify-end">
        <Calendar />
      </div>
    </ProtectedPage>
  );
};

export default CalendarPage;
