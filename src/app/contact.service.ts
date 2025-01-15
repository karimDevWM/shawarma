import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private api = 'http://mail.karim-portfolio.xyz/send-email'; // Your API endpoint
  private api = 'http://mailer.karim-portfolio.xyz/send-email'; // Your API endpoint


  constructor(private http: HttpClient, private logger: LoggerService) { }

  postMessage(data: { name: string; email: string; message: string }): Observable<any> {
    this.logger.log(data.email +"\n"+ data.message +"\n"+ data.name);
    return this.http.post(this.api, data, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true, // If needed
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    this.logger.log("erreur: " + error);
    return throwError(() => new Error('Server error'));
  }
}
