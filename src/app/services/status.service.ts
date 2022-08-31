
import { Injectable } from '@angular/core';
import { MatSnackbarSeverity } from 'mat-snackbar-severity';

@Injectable()

export class StatusService {

    constructor(
        private snackBarSeverity: MatSnackbarSeverity) {

    }

    suceessStatus(message: string) {
        this.snackBarSeverity.open('success', message, '', {
            verticalPosition: 'bottom',
            horizontalPosition: 'left',
            duration: 2000
        });
    }

    warningStatus(message: string) {
        this.snackBarSeverity.open('warning', message, '', {
            verticalPosition: 'bottom',
            horizontalPosition: 'left',
            duration: 2000
        })
    }

    infoStatus(message: string) {
        this.snackBarSeverity.open('info', message, '', {
            verticalPosition: 'bottom',
            horizontalPosition: 'left',
            duration: 2000
        });
    }

    errorStatus(message: string) {
        this.snackBarSeverity.open('error', message, '', {
            verticalPosition: 'bottom',
            horizontalPosition: 'left',
            duration: 2000
        });
    }

}
