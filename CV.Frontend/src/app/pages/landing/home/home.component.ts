import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../auth/login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private ngbModal: NgbModal) { }
  categories = ['All', 'Modern', 'Minimal', 'Creative', 'Executive'];
  activeCategory = 'All';

  templates = [
    {
      id: 1,
      name: 'Modern Professional New',
      description: 'Clean and contemporary design perfect for tech professionals',
      category: 'Modern',
      style: 'modern',
      atsOptimized: true,
      popular: true,
      mockImagePath: 'assets/templatesImages/1.jpg',
      route: '/testCV2'
    },
    {
      id: 2,
      name: 'Minimal Classic',
      description: 'Simple and elegant layout focusing on content',
      category: 'Minimal',
      style: 'minimal',
      atsOptimized: true,
      popular: false,
      mockImagePath: 'assets/templatesImages/2.jpg'
    },
    {
      id: 3,
      name: 'Creative Designer',
      description: 'Bold design for creative professionals and designers',
      category: 'Creative',
      style: 'creative',
      atsOptimized: false,
      popular: true,
      mockImagePath: 'assets/templatesImages/3.png'
    },
    {
      id: 4,
      name: 'Executive Leader',
      description: 'Professional layout for senior management roles',
      category: 'Executive',
      style: 'minimal',
      atsOptimized: true,
      popular: false,
      mockImagePath: 'assets/templatesImages/4.jpg'
    },
    {
      id: 5,
      name: 'Tech Innovator',
      description: 'Modern template with technical skill highlights',
      category: 'Modern',
      style: 'modern',
      atsOptimized: true,
      popular: true,
      mockImagePath: 'assets/templatesImages/7.png'
    },
    {
      id: 6,
      name: 'Simple Elegance',
      description: 'Minimalist approach with maximum impact',
      category: 'Minimal',
      style: 'minimal',
      atsOptimized: true,
      popular: false,
      mockImagePath: 'assets/templatesImages/6.jpg'
    }
  ];

  get filteredTemplates() {
    if (this.activeCategory === 'All') {
      return this.templates;
    }
    return this.templates.filter(template => template.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  selectTemplate(template: any) {
    console.log('Selected template:', template);
    // Handle template selection
  }

  features = [
    {
      icon: '🚀',
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent recommendations for content, formatting, and keywords to optimize your CV for any job.'
    },
    {
      icon: '✅',
      title: 'ATS-Optimized',
      description: 'Our templates are designed to pass through Applicant Tracking Systems and reach human recruiters.'
    },
    {
      icon: '🎨',
      title: 'Professional Templates',
      description: 'Choose from dozens of professionally designed templates that make a great first impression.'
    },
    {
      icon: '⚡',
      title: 'Quick & Easy',
      description: 'Create a professional CV in minutes with our intuitive drag-and-drop interface.'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Your CV will look perfect on any device, ensuring accessibility for all recruiters.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your personal information is encrypted and protected with enterprise-grade security.'
    }
  ];

  testimonials = [
    {
      text: 'CVCraft helped me land my dream job at Google. The ATS optimization feature made all the difference!',
      author: 'Sarah Johnson',
      role: 'Software Engineer'
    },
    {
      text: 'The templates are absolutely stunning and professional. I received more interview calls than ever before.',
      author: 'Michael Chen',
      role: 'Marketing Manager'
    },
    {
      text: 'Super easy to use and the AI suggestions were spot-on. Highly recommend to anyone job hunting.',
      author: 'Emily Davis',
      role: 'Product Designer'
    }
  ];

  useTemplate() {

    this.ngbModal.open(LoginComponent, {
      centered: true,
      backdrop: true,   // allow outside click close to not allow then make value 'static'
      keyboard: true,   // allow ESC key close , to not allow then false
      size: 'lg',
      

    }).result.then(
      (result: any) => {
        if (result?.message === 'Biometric Performed') {
        }
        else {

        }
      },
      (reason) => {
        // ✅ This block runs when modal is closed by ESC or outside click
        console.log('Modal dismissed:', reason);
      }
    );
  }


}
