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
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  // dialogRef: MatDialogRef<CalendarDialogComponent>;
  dialogRef: MatDialogRef<any>;
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
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
  isLoadingsEvents: boolean = false;

  events: CalendarEvent[] = [];

  constructor(
    public dialog: MatDialog,
    private eventoService: EventoService) { }

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos(): void {
    this.isLoadingsEvents = true;
    this.eventoService.listar()
      .subscribe(
        (response) => {
          response.data.forEach((e) => this.events.push((e as CalendarEvent)));
          this.isLoadingsEvents = false;
        }
      );
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
