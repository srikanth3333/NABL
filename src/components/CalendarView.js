import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-01-01';
const schedulerData = [
  { startDate: '2022-01-01T09:45', endDate: '2022-01-01T11:00', title: 'Meeting' },
  { startDate: '2022-01-01T12:00', endDate: '2022-01-01T13:30', title: 'Go to a gym' },
  { startDate: '2022-01-03T12:00', endDate: '2022-01-05T13:30', title: 'Visit' },
];

export const CalendarView =  () => (
  <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
);