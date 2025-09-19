import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-test-cv2',
  templateUrl: './test-cv2.component.html',
  styleUrls: ['./test-cv2.component.scss']
})
export class TestCV2Component implements OnInit {
  cvForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cvForm = this.fb.group({
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
}
