import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formDataReceived = false;
  formData: any[] = [];
  optimizedNetwork: any[] = [];

  constructor(private apiService: ApiService) {}

  receiveFormData(formData: any) {
    this.formData = formData;
    this.formDataReceived = true;
    this.apiService.getOptimizedNetwork(this.formData).subscribe(
      (data) => {
        this.optimizedNetwork = data;
      },
      (error) => {
        console.error('Error fetching optimized network:', error);
      }
    );
  }
}
