export interface AddCvRequest {
    title: string;
    designation?: string;
    summary?: string;
    profilePictureUrl?: string;
    contacts: ContactModel[];
    education: EducationModel[];
    experience: ExperienceModel[];
    skills?: string; // comma-separated
}

export interface ContactModel {
    type: string;
    value: string;
}

export interface EducationModel {
    institition: string; // same spelling as in backend
    certificationOrDegree: string;
    passingYear: number;
    totalMarksOrGrades: number;
    acheivedMarksOrGrades: number;
}

export interface ExperienceModel {
    company: string;
    role: string;
    startDate: string; // can be Date if you convert
    endDate?: string;
    responsibilities? : string;
}