import { NgModule } from '@angular/core';
import { defineCustomElements } from '../../../../web-component/loader';
import { MyComponent  } from './proxies';
defineCustomElements(window);
@NgModule({
  imports: [],
  exports: [MyComponent],
  declarations: [MyComponent]
})
export class webComponentModule { }
