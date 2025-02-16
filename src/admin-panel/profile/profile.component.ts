import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';
import { ApicallService } from '../apicall.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selectedEmployeeId: number = 0;
  profileForm: FormGroup;
  profileData!: any;
  mes: string = '';
  showdeletepopup:boolean=false;

  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService, private service: ApicallService) {
    this.profileForm = this.fb.group({
      EmployeeId: '',
      Employeename: '',
      Department: '',
      jobtitle: '',
      phonenumber: '',
      gender: '',
      dob: '',
      managername: '',
      matrialstatus: '',
      salary: 0,
    });
  }
  ngOnInit() {
    this.selectedEmployeeId = this.auth.getSelectedEmployeeId() as number;
    this.loadProfileData(this.selectedEmployeeId);
    console.log('profile', this.selectedEmployeeId);
  }
  loadProfileData(Id: number) {

    console.log('id is empid : ', Id);
    this.service.getempdetails(Id).subscribe((data: any) => {
      this.profileData = data;
      console.log(data)
      console.log(this.profileData, '  ', data.EmployeeName);

      this.profileForm.patchValue({
        EmployeeId: this.profileData.EmployeeId,
        Employeename: this.profileData.EmployeeName,
        Department: this.profileData.Department,
        jobtitle: this.profileData.Jobtitle,
        phonenumber: this.profileData.Phonenumber,
        gender: this.profileData.Gender,
        dob: this.profileData.Dob,
        matrialstatus: this.profileData.Matrialstatus,
        managername: this.profileData.Managername,
        salary: this.profileData.Salary,
      });
    }, (error) => {
      console.error('Error loading profile data:', error);
    }
    );
  }

  onSubmit() {
    const formValues = this.profileForm.value;
    const jsonString = JSON.stringify(formValues);
    this.service.updatemp(jsonString).subscribe((data: any) => {
      console.log(data);
      this.mes = 'Updated Successfully';
    });
  }

  onDelete() {
    console.log('Delete button clicked', this.selectedEmployeeId);
    this.showdeletepopup=true;
  }
  closePopup(){
    this.showdeletepopup=false;
  }
  deleteEmployee(){
    this.service.delemp(this.selectedEmployeeId).subscribe((data: any) => {
      console.log(data);
    });
    this.route.navigateByUrl('/Content-Management');
    alert('Employee deleted.'); 
  }

  onclose() {
    console.log('Edit button clicked');
    this.route.navigateByUrl('/Content-Management');
  }


}
