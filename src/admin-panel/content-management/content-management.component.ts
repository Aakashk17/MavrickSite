import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.css']
})
export class ContentManagementComponent implements OnInit {

  employees: any = [];
  showForm: boolean = false;
  emp: any;
  message:string='';
  generalError: boolean = false;




  fg: FormGroup;



  constructor(private service: ApicallService, private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.fg = this.fb.group({
      EmployeeName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      Department: this.fb.control('', [Validators.required]),
      jobtitle: this.fb.control('', [Validators.required]),
      phonenumber: this.fb.control('', [Validators.required, Validators.maxLength(10)]),
      gender: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required]),
      matrialstatus: this.fb.control('', [Validators.required]),
      managername: this.fb.control('', [Validators.required]),
      salary: this.fb.control('', [Validators.required]),
    });
  }

  navigateToProfile(id: number) {
    this.auth.setSelectedEmployeeId(id);
    this.router.navigate(['/profile']);
    console.log('id is : ', id);
  }



  ngOnInit(): void {
    this.getrefershed();
    this.fg.valueChanges.subscribe(() => {
      this.generalError = false;
    });
  }
  toggleForm() {
    console.log('Button clicked!', !this.showForm);
    this.showForm = !this.showForm;
  }

  getrefershed() {
    this.service.getalldetails().subscribe(data => {
      this.employees = data;
    });
  }

  OnSumbit() {
     console.log('Form invalid:', this.fg.invalid);
      console.log('value ', this.fg.value);
      const jsonString = JSON.stringify(this.fg.value);
      console.log(jsonString);
      this.service.addemployee(jsonString).subscribe(res => {
        console.log(res.toString());
        this.message = res;
      });
      this.router.navigateByUrl('/Content-Management');
  }
}
