import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
    selector: 'mail-chimp',
    templateUrl: './mail-chimp.component.html',
    styleUrls: ['./mail-chimp.component.scss']
})
export class MailChimpComponent {
    public form: FormGroup;

    // reactive form components
    emailControl = new FormControl('', [Validators.required, Validators.email]);
    nameControl = new FormControl('', [Validators.required]);
    check = new FormControl(false, [Validators.requiredTrue]);

    submitted = false;
    pending = false;
    mailChimpEndpoint =
        'https://ygam.us18.list-manage.com/subscribe/post-json?u=7f85745e19492e4c8ba947afc&id=3e799b8387&subscribe=Subscribe&';
    error = '';
    message = null;

    constructor(private http: HttpClient, fb: FormBuilder) {
        this.form = fb.group({
            emailControl: this.emailControl,
            nameControl: this.nameControl,
            check: this.check
        });
    }

    submit() {
        this.error = '';
        this.pending = true;
        if (this.emailControl.status === 'VALID' && this.nameControl.status === 'VALID') {
            const params = new HttpParams()
                .set('FNAME', this.nameControl.value)
                .set('EMAIL', this.emailControl.value)
                .set('b_7f85745e19492e4c8ba947afc_3e799b8387', ''); // hidden input name

            const mailChimpUrl = this.mailChimpEndpoint + params.toString();

            // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
            this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(
                (response) => {
                    console.log(response);
                    this.message = response.msg;
                    if (response.result && response.result !== 'error') {
                        this.submitted = true;
                    } else {
                        this.error = response.msg;
                    }
                },
                (error) => {
                    console.error(error);
                    this.error = 'Sorry, an error occurred.';
                }
            );
        }
    }

    closeMessage() {
        this.message = null;
        this.pending = false;
    }
}

interface MailChimpResponse {
    result: string;
    msg: string;
}
