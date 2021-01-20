import { FrontComponent } from './front.component';
import { TestBed } from '@angular/core/testing';


describe('FrontComp', () => {

  let component: FrontComponent;
  let actualValue: boolean;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [FrontComponent]
    })
    component = TestBed.get(FrontComponent)
  })


  describe('METHOD: isListVisible', () => {

    When(() => {
      actualValue = component.isListVisible()
    })

    describe("there are llamas", () => {
      Given(() => {
        component.llamas = [{name: "Billy"}]
      })

      Then(() => {
        expect(actualValue).toEqual(true)
      })
    })

    describe("there are NO llamas", () => {
      Given(() => {
        component.llamas = []
      })

      Then(() => {
        expect(actualValue).toEqual(false)
      })
    })
  })



})
