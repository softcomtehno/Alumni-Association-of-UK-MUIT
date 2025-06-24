import { Header } from "~widgets/index";
import { EventDetail } from "~widgets/event-detail";
import { EventLine } from "~entities/event-line";
import { OtherEvent } from "~features/other-event";
export const EventDetailPage: React.FC = () => {
  return (
    <div>
      <Header />
      <EventDetail />
      <EventLine />
      <OtherEvent />
    </div>
  );
};
