import { Component, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() modalId: string = "modal";

  closeModal() {
    console.log("funcionando")
    $("#" +  this.modalId).modal('toggle'); // Use jQuery or Angular equivalent
  }
}
