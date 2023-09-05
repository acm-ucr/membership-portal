import ProtectedPage from "../../components/ProtectedPage";
import Calendar from "../../components/User/Calendar/Calendar";

const CalendarPage = () => {
  return (
    <ProtectedPage title="ACM UCR | Calendar" restrictions={["member"]}>
      <div className="min-h-screen flex flex-col items-center justify-end w-10/12">
        <Calendar />
      </div>
    </ProtectedPage>
  );
};

export default CalendarPage;
