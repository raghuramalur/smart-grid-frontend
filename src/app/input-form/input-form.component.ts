import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  @Output() formData = new EventEmitter<any[]>();
  nodes: any[] = [];
  nodeCount: number = 0;

  addNode() {
    this.nodes.push({
      id: this.nodeCount,
      latitude: '',
      longitude: '',
      type: '',
      capacity: 0,
      demand: 0,
      maxLoad: 0
    });
    this.nodeCount++;
  }

  onSubmit() {
    this.formData.emit(this.nodes);
  }
}
