import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';

interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface Experience {
  position: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface Reference {
  name: string;
  position: string;
  phone: string;
  email: string;
}
@Component({
  selector: 'app-test-cv',
  templateUrl: './test-cv.component.html',
  styleUrls: ['./test-cv.component.scss']
})
export class TestCVComponent {

 cvForm!: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.cvForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['Lorna Alvarado'],
        position: ['Marketing Manager'],
        phone: ['+123-456-7890'],
        email: ['hello@reallygreatsite.com'],
        address: ['123 Anywhere St., Any City, ST 12345'],
        about: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
        profileImage: ['https://dummyimage.com/200x200/e0e0e0/666666?text=Profile+Photo']
      }),
      education: this.fb.array([
        this.createEducationGroup({
          degree: 'Bachelor of Business Management',
          institution: 'Borcelle University',
          startYear: '2016',
          endYear: '2020',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu.'
        }),
        this.createEducationGroup({
          degree: 'Bachelor of Business Management',
          institution: 'Borcelle University',
          startYear: '2020',
          endYear: '2023',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu.'
        })
      ]),
      experience: this.fb.array([
        this.createExperienceGroup({
          position: 'Product Design Manager',
          company: 'Arowwai Industries',
          startYear: '2016',
          endYear: '2020',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
        }),
        this.createExperienceGroup({
          position: 'Marketing Manager',
          company: 'Arowwai Industries',
          startYear: '2019',
          endYear: '2020',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
        }),
        this.createExperienceGroup({
          position: 'Marketing Manager',
          company: 'Arowwai Industries',
          startYear: '2017',
          endYear: '2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
        }),
        this.createExperienceGroup({
          position: 'Marketing Manager',
          company: 'Arowwai Industries',
          startYear: '2016',
          endYear: '2017',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.'
        })
      ]),
      skills: this.fb.array([
        this.fb.control('Management Skills'),
        this.fb.control('Creativity'),
        this.fb.control('Digital Marketing'),
        this.fb.control('Negotiation'),
        this.fb.control('Critical Thinking'),
        this.fb.control('Leadership')
      ]),
      references: this.fb.array([
        this.createReferenceGroup({
          name: 'Harumi Kobayashi',
          position: 'Wardiere Inc. / CEO',
          phone: '123-456-7890',
          email: 'hello@reallygreatsite.com'
        }),
        this.createReferenceGroup({
          name: 'Bailey Dupont',
          position: 'Wardiere Inc. / CEO',
          phone: '123-456-7890',
          email: 'hello@reallygreatsite.com'
        })
      ])
    });
  }

  createEducationGroup(education: Education): FormGroup {
    return this.fb.group({
      degree: [education.degree],
      institution: [education.institution],
      startYear: [education.startYear],
      endYear: [education.endYear],
      description: [education.description]
    });
  }

  createExperienceGroup(experience: Experience): FormGroup {
    return this.fb.group({
      position: [experience.position],
      company: [experience.company],
      startYear: [experience.startYear],
      endYear: [experience.endYear],
      description: [experience.description]
    });
  }

  createReferenceGroup(reference: Reference): FormGroup {
    return this.fb.group({
      name: [reference.name],
      position: [reference.position],
      phone: [reference.phone],
      email: [reference.email]
    });
  }

  get educationArray(): FormArray {
    return this.cvForm.get('education') as FormArray;
  }

  get experienceArray(): FormArray {
    return this.cvForm.get('experience') as FormArray;
  }

  get skillsArray(): FormArray {
    return this.cvForm.get('skills') as FormArray;
  }

  get referencesArray(): FormArray {
    return this.cvForm.get('references') as FormArray;
  }

  addEducation() {
    this.educationArray.push(this.createEducationGroup({
      degree: '',
      institution: '',
      startYear: '',
      endYear: '',
      description: ''
    }));
  }

  removeEducation(index: number) {
    this.educationArray.removeAt(index);
  }

  addExperience() {
    this.experienceArray.push(this.createExperienceGroup({
      position: '',
      company: '',
      startYear: '',
      endYear: '',
      description: ''
    }));
  }

  removeExperience(index: number) {
    this.experienceArray.removeAt(index);
  }

  addSkill() {
    this.skillsArray.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skillsArray.removeAt(index);
  }

  addReference() {
    this.referencesArray.push(this.createReferenceGroup({
      name: '',
      position: '',
      phone: '',
      email: ''
    }));
  }

  removeReference(index: number) {
    this.referencesArray.removeAt(index);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit() {
    if (this.cvForm.valid) {
      console.log('CV Data:', this.cvForm.value);
      this.isEditing = false;
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.cvForm.get('personalInfo.profileImage')?.setValue(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
