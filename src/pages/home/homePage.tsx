import { useState } from "react";
import { Calendar } from "~app/components/ui/calendar";

export const HomePage: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
