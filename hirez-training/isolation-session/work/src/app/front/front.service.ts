import { AnotherService } from './another.service';
import { Llama } from './llama.model';
import { Injectable } from "@angular/core";

// providedIn not added because of testing
@Injectable()

export class FrontService {

  constructor(private httpService?: AnotherService){}

  getFeaturedLlamas(config?: any): Promise<Llama[]> {
  //   return new Promise((resolve, reject) => {
  //     this.httpService.getLlamasFromServer().subscribe(
  //       value => resolve(value),
  //       e => resolve(e)
  //     )
  //   })

  // using rxjs toPromise
  return this.httpService.getLlamasFromServer().toPromise()
  }

}
