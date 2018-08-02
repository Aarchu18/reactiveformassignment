import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  appServiceobj;

  constructor() { }
  setFormData(formData)
  {
   this.appServiceobj=formData;
  }
  getFormData()
  {
    return this.appServiceobj;
  }
}
