import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {
  DAYS_OF_WEEK,
} from 'angular-calendar';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

const colors: any = {
  red: {
    primary: '#fc4b6c',
    secondary: '#f9e7eb'
  },
  blue: {
    primary: '#1e88e5',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#FFFF00',
    secondary: '#F3F781'
  },
  green: {
    primary: '#04b404',
    secondary: '#58FA58'
  },
  orange: {
    primary: '#FF8000',
    secondary: '#FAAC58'
  },
};

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  // dialogRef: MatDialogRef<CalendarDialogComponent>;
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  dialogRef: MatDialogRef<any>;
  lastCloseResult: string;
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      action: '',
      event: []
    }
  };

  viewDate: Date = new Date();
  view = 'month';
  activeDayIsOpen = true;
  refresh: Subject<any> = new Subject();
  actions: CalendarEventAction[] = [
    {
      label: '<i class="ti-pencil act"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="ti-close act"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: new Date('2020-11-03T06:00:00.000Z'),
      end: new Date('2020-11-03T20:00:00.000Z'),
      title: 'Dia de inscripciones',
      color: colors.orange,
    },
    {
      start: new Date('2020-11-04T06:00:00.000Z'),
      end: new Date('2020-11-04T20:00:00.000Z'),
      title: 'Inicio de clases',
      color: colors.green,
    },
    {
      start: new Date('2020-11-18T06:00:00.000Z'),
      end: new Date('2020-11-18T20:00:00.000Z'),
      title: 'Examen Mid Term',
      color: colors.yellow,
    },
    {
      start: new Date('2020-11-27T06:00:00.000Z'),
      end: new Date('2020-11-27T20:00:00.000Z'),
      title: 'Examen Final',
      color: colors.red,
    },
    {
      start: new Date('2020-11-30T06:00:00.000Z'),
      end: new Date('2020-11-30T20:00:00.000Z'),
      title: 'Entrega de notas',
      color: colors.blue,
    },
    /*
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
    */
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.config.data = { event, action };
    // this.dialogRef = this.dialog.open(CalendarDialogComponent, this.config);
    /*
    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
    */
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }
}
