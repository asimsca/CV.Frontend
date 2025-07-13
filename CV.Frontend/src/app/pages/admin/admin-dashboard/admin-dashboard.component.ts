import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
showLayoutsSubMenu: boolean = false;

  menuClick(){
  this.toggleMenu(["sidebar-enable","vertical-collpsed"]);
}

toggleMenu(className :string[]){
  debugger;
className.forEach(className=>{
  if(!document.body.classList.contains(className)){
    document.body.classList.add(className);
  }
  else{
    document.body.classList.remove(className);
  }
})
}

toggleMenu2(){
  this.showLayoutsSubMenu = !this.showLayoutsSubMenu;
}
}
