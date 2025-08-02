import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
 
@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
 
  constructor() { }
 
  showSuccess(title: string, text: string = ''): Promise<any> {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  }
 
  showError(title: string, text: string = ''): Promise<any> {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    });
  }
 
  showInfo(title: string, text: string = ''): Promise<any> {
    return Swal.fire({
      icon: 'info',
      title: title,
      text: text,
    });
  }
 
  showWarning(title: string, text: string = ''): Promise<any> {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
    });
  }
 
  showConfirmation(title: string ='Are you sure?', text: string = "You won't be able to revert this", confirmButtonText: string = 'Yes, delete it!', cancelButtonText: string = 'No, cancel it!'): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  }
}