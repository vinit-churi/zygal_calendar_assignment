import { useState, useEffect } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  useEffect(() => {
    const selectedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    setSelectedDates([selectedDate]);
  }, []);

  const createCalendar = (month: number, year: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month).getDay();
    const calendar = [];
    let dateNumber = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(<td key={j}></td>);
        } else if (dateNumber <= daysInMonth) {
          const selectedDate = `${dateNumber}-${month}-${year}`;
          const isSelected = selectedDates.includes(selectedDate);
          if (isSelected) console.log(selectedDate);
          week.push(
            <td
              key={j}
              className={`${isSelected ? "bg-blue-800 text-white" : ""} p-4`}
              onClick={() => handleDateClick(selectedDate, isSelected)}
            >
              {dateNumber}
            </td>
          );
          dateNumber++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }
    return calendar;
  };

  const handleDateClick = (selectedDate: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedDates(selectedDates.filter((date) => date !== selectedDate));
    } else {
      setSelectedDates([...selectedDates, selectedDate]);
    }
  };

  const handlePrevClick = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const handleNextClick = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  return (
    <div>
      <div className="calendar  mt-28 relative flex w-max mx-auto items-center justify-center flex-col">
        <div className="flex gap-2  w-full">
          <button
            className="flex-[1_1_50%] py-3 border border-black border-solid bg-blue-900 text-white"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="flex-[1_1_50%] py-3 border border-black border-solid bg-blue-900 text-white"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
        <h2>{`${date.getMonth() + 1}/${date.getFullYear()}`}</h2>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{createCalendar(date.getMonth(), date.getFullYear())}</tbody>
        </table>
        <p>user selected dates:</p>
        <div className="absolute bottom-[-30px]">
          {selectedDates.join(", ")}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
