import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AddCvRequest } from 'src/app/models/dto/request/cv/add-cv-request';
import { CvService } from 'src/app/services/cv/cv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-cv2',
  templateUrl: './test-cv2.component.html',
  styleUrls: ['./test-cv2.component.scss']
})
export class TestCV2Component implements OnInit {
  cvForm!: FormGroup;
  isEditing: boolean = false;

  constructor(private fb: FormBuilder, private cvService: CvService) { }

  ngOnInit(): void {
    this.cvForm = this.fb.group({
      profileImage: [''], // store uploaded image (base64)
      name: ['OLIVIA WILSON'],
      title: ['ACCOUNTANT'],
      summary: [
        'Skilled and experienced accountant with a proven track record of success in the financial services industry. Expertise in all aspects of accounting, including financial statement preparation, auditing, and taxation. Strong analytical and problem-solving skills.'
      ],
      contact: this.fb.group({
        email: ['olivia.wilson@gmail.com'],
        phone: ['+987 654 321'],
        address: ['Street, city – state'],
        linkedin: ['linkedin/in/olivia-wilson']
      }),
      skills: this.fb.array([
        this.fb.control('Accounting Principles'),
        this.fb.control('Financial Statement Prep'),
        this.fb.control('Microsoft Excel'),
        this.fb.control('Auditing'),
        this.fb.control('Data Analysis')
      ]),
      languages: this.fb.array([
        this.fb.group({ name: ['English'], level: ['Advanced'] }),
        this.fb.group({ name: ['Spanish'], level: ['Proficient'] }),
        this.fb.group({ name: ['French'], level: ['Intermediate'] })
      ]),
      experience: this.fb.array([
        this.fb.group({
          role: ['Accountant'],
          company: ['ABC Company | City'],
          duration: ['Jan 2022 – Dec 2023'],
          responsibilities: [
            'Provided accurate financial analysis and reporting for informed decision-making. Managed full-cycle accounting processes, including accounts payable/receivable, general ledger entries, and bank reconciliations.'
          ]
        }),
        this.fb.group({
          role: ['Junior Accountant'],
          company: ['XYZ Company | City'],
          duration: ['Jan 2021 – Dec 2021'],
          responsibilities: [
            'Collaborated with colleagues to improve documentation and streamline month-end procedures, resulting in enhanced efficiency and accuracy.'
          ]
        })
      ]),
      education: this.fb.array([
        this.fb.group({
          degree: ['Bachelor’s Degree in BBA'],
          institution: ['XYZ University | City'],
          duration: ['Jan 2018 – Dec 2021']
        }),
        this.fb.group({
          degree: ['Diploma in Accounting & Finance'],
          institution: ['ABC Institute | City'],
          duration: ['Jan 2017 – Dec 2017']
        }),
        this.fb.group({
          degree: ['Diploma in Microsoft Excel'],
          institution: ['XYZ Institute | City'],
          duration: ['July 2016 – Dec 2016']
        })
      ])
    });
  }

  // getters
  get skillsArray(): FormArray {
    return this.cvForm.get('skills') as FormArray;
  }
  get languagesArray(): FormArray {
    return this.cvForm.get('languages') as FormArray;
  }
  get experienceArray(): FormArray {
    return this.cvForm.get('experience') as FormArray;
  }
  get educationArray(): FormArray {
    return this.cvForm.get('education') as FormArray;
  }

  // --- Button Functions ---
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSave() {
    debugger;
    const cvFormValues = this.cvForm.value;

    // Check if user selected a new file (base64 means not yet uploaded)
    if (cvFormValues.profileImage && cvFormValues.profileImage.startsWith("data:")) {
      // Convert base64 back to File
      const file = this.base64ToFile(cvFormValues.profileImage, "profile.png");

      // 1) First upload the profile picture
      this.cvService.uploadProfilePicture(file).subscribe(uploadResp => {
        if (uploadResp.isSuccess) {
          // 2) Patch uploaded URL into form
          // this.cvForm.patchValue({ profileImage: uploadResp.data });


          // backend returned: /uploads/profile-pics/xxxx.png
          const relativePath = uploadResp.data;

          // remove "/api" from baseAPIUrl so images load correctly
          const baseUrl = environment.baseAPIUrl.replace('/api', '');

          const fullUrl = baseUrl + relativePath;

          // update form
          this.cvForm.patchValue({ profileImage: fullUrl });

          // 3) Call AddCV with updated form
          this.callAddCvApi();
        } else {
          alert("❌ Image upload failed: " + uploadResp.message);
        }
      });
    } else {
      // If already URL (no new image), just call AddCV
      this.callAddCvApi();
    }
  }
  callAddCvApi() {
    const cvData = this.cvForm.value;
    localStorage.setItem('cvData', JSON.stringify(cvData));
    // alert('✅ CV saved successfully!');

    const cvFormValues = this.cvForm.value;

    const addCvRequest: AddCvRequest = {
      title: cvFormValues.name,
      designation: cvFormValues.title,
      summary: cvFormValues.summary,
      profilePictureUrl: cvFormValues.profileImage, // assuming you used this key in form

      contacts: cvFormValues.contact
        ? Object.keys(cvFormValues.contact).map(key => ({
          type: key,
          value: cvFormValues.contact[key]
        }))
        : [],

      education: cvFormValues.education?.map((edu: any) => ({
        institition: edu.institution,
        certificationOrDegree: edu.degree,
        passingYear: edu.duration,
        totalMarksOrGrades: "",
        acheivedMarksOrGrades: ""
      })) || [],

      experience: cvFormValues.experience?.map((exp: any) => ({
        company: exp.company,
        role: exp.role,
        startDate: exp.duration,
        endDate: exp.duration,
        responsibilities: exp.responsibilities
      })) || [],

      skills: cvFormValues.skills?.join(',') // if your form stores skills as array
    };

    console.log("Add CV Request : ", addCvRequest);
    this.cvService.addCv(addCvRequest).subscribe((response) => {
      if (response.isSuccess) {
        alert('✅ CV saved successfully! ' + response.message);
      }
      else {
        alert('CV failed! ' + response.message);
      }
    })

  }

  async onDownload() {
    const element = document.getElementById('cvContent');
    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('cv.pdf');
    }
  }

  // Convert base64 string → File object
  private base64ToFile(base64: string, filename: string): File {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // Handle file upload for profile image
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.cvForm.patchValue({ profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }
}
