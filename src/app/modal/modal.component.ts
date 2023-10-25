import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalId: string = "modal";
  public transacao:any = {
    descricao: "",
    preco: null,
    categoria: "",
    tipo: ""

  };
  public listaTransacoes: any = [{}]

  constructor () { }

  ngOnInit() {

  }

  public cadastrarTransacoes() {
    console.log("antes do push", this.listaTransacoes);
    this.listaTransacoes.push(this.transacao);
    this.transacao = {
      descricao: "",
      preco: null,
      categoria: "",
      tipo: ""
  
    };
    console.log("depois do push", this.listaTransacoes);
  }
}
