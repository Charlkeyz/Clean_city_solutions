import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


  


const CalendarDate = () => {
  const [selectedDate, setSelectedDate] = React.useState(dayjs('2022-04-17'));

  // Function to handle the change of selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to format the selected date in the desired format
  const formatDate = (date) => {
    return dayjs(date).format("dddd, MMMM YYYY"); // Format: Tuesday, January 2024
    // or use dayjs(date).format("DD/MM/YYYY") for format like 25/4/2024
  };

  

  return (
    <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar', 'DateCalendar']}>
            <DemoItem label="Uncontrolled calendar">
              <DateCalendar 
                defaultValue={dayjs('2022-04-17')} 
                onChange={handleDateChange} 
              />
            </DemoItem>
            <DemoItem label="Controlled calendar">
              <DateCalendar 
                value={selectedDate} 
                onChange={handleDateChange} 
              />
            </DemoItem>
          </DemoContainer>
          {selectedDate && (
            <div>
              Selected Date: {formatDate(selectedDate)}
            </div>
          )}
        </LocalizationProvider>
    </div>
  )
}

export default CalendarDate