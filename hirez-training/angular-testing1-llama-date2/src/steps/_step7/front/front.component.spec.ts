import { FrontComponent } from './front.component';
import { TestBed } from '@angular/core/testing';


describe('frontComponent', () => {
  let component;
  let isVisible: boolean;
  Given(() => {
    TestBed.configureTestingModule({
      providers: [
        FrontComponent
      ]
    })
  component = TestBed.get(FrontComponent)
  })

  describe('METHOD: isListVisible', () => {
    When(() => {
      isVisible = component.isListVisible();
    })

    describe('there are llamas', () => {
      Given(() => {
        component.llamas = [{name: 'Billy'}]
      })

      Then(() => {
        expect(isVisible).toEqual(true)
      })
    })
    describe('no llamas', () => {
      Given(() => {
        component.llamas = []
      })

      Then(() => {
        expect(isVisible).toEqual(false)
      })
    })
  })
})
