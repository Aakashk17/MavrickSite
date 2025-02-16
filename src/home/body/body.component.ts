import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  textToType: string = " M A V E R I C K   ' \u{1F60E} '.";
  typingSpeed: number = 300;

  index: number = 0;
  textContainer!: HTMLElement | null;

  constructor() {

  }

  ngOnInit(): void {
    this.textContainer = document.getElementById("typing-text");
    this.typeNextCharacter();
  }

  typeNextCharacter(): void {
    if (this.index < this.textToType.length && this.textContainer) {
      this.textContainer.textContent += this.textToType.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeNextCharacter(), this.typingSpeed);
    }
  }
}



