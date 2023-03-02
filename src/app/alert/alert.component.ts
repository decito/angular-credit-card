import { Component, Input } from '@angular/core';

type AlertStyle = "success" | "danger"

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Input() type: AlertStyle;

  title?: string

  ngOnInit() {
    if (this.type === "success") {
      this.title = "🤩 Sucesso!"
      return
    }

    this.title = "😬 Erro"
  }
}
