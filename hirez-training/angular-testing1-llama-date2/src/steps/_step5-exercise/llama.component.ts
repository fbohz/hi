import { Component } from '@angular/core';

@Component({
  selector: 'ld-llama',
  template: `<div> {{ speak('baaa') }} </div>`, 
  
})
export class LlamaComponent {
  
  speak(word: string): string {
    return `Llama says: ${word}`;
  }
}
