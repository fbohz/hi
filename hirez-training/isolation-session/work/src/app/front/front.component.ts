import { RouterAdapterService } from './../_services/router-adapter.service';
import { FrontService } from './front.service';
import { Llama } from './llama.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ld-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})

export class FrontComponent implements OnInit {

  llamas: Llama[]
  showErrorMessage: any;

  constructor(
    private frontService: FrontService,
    private routerAdapterService: RouterAdapterService,
    ){}

  ngOnInit(): any {

    //  use with Ajax call and done
    // const xhr = new XMLHttpRequest()
    // xhr.open('GET', '/llamas')
    // xhr.send()

    // using timeout to prove done() has problems
    // return this.frontService.getFeaturedLlamas().then(result => {
    //   return new Promise((resolve: any) => {
    //     setTimeout(() => {
    //       this.llamas = result;
    //       resolve()
    //     },4000)
    //   })
    //  })

     return this.frontService.getFeaturedLlamas({newest: true}).then(res => {
      this.llamas = res;
      this.isListVisible()
     },
     error => {
       this.showErrorMessage = true;
       console.log(error)
     })

  }

  isListVisible(): boolean {
    return !!this.llamas && this.llamas.length > 0;
  }

  goToLlamaPage(llamaId: string) {
    this.routerAdapterService.goToUrl(`/llama/${llamaId}`);
    // console.log('hi')
  }

}
