import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Infos } from '../../model/infos';
import { infos } from '../api/infos';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  infos:Infos=infos;
  contactForm: FormGroup;
  isSubmitted = false;
  alertMessage: string | null = null;
  captchaResolved: boolean = false;

  constructor(private fb: FormBuilder, private logger: LoggerService, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() :any {
    if (this.contactForm.valid) {
      this.contactService.postMessage(this.contactForm.value).subscribe({
        next: () => {
          this.logger.log(
          this.alertMessage = 'Message sent successfully!');
          this.isSubmitted = true;
          this.contactForm.reset();
        },
        error: () => {
          this.logger.log(this.alertMessage = 'Message could not be sent.');
        }
      });
    }
  }

  onCaptchaResolved(captchaResponse: string) {
    this.captchaResolved = !!captchaResponse;
    console.log(`Resolved captcha: ${captchaResponse}`);
  }
}