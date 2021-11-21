import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  get isSubjectValid() {
    return this.subject!.invalid && this.subject!.touched;
  }

  get isEmailValid() {
    return this.email!.invalid && this.email!.touched;
  }

  get isCheckConditionsValid() {
    return this.checkConditions!.invalid && this.checkConditions!.touched;
  }

  get isMessageValid() {
    return this.message!.invalid && this.message!.touched;
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      message: ['', [Validators.required]],
      checkConditions: [false, [Validators.required, Validators.requiredTrue]],
    });
  }

  sendForm(event: Event): void {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dataForm = {
      Asunto: this.subject!.value,
      Correo: this.email!.value,
      Teléfono: this.telephone!.value,
      Mensaje: this.message!.value,
      Términos: this.checkConditions!.value,
    };

    alert( JSON.stringify(dataForm,  null, 3) );
  }

  get subject() {
    return this.form.get('subject');
  }

  get email() {
    return this.form.get('email');
  }

  get telephone() {
    return this.form.get('telephone');
  }

  get message() {
    return this.form.get('message');
  }

  get checkConditions() {
    return this.form.get('checkConditions');
  }

}
