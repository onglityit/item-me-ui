import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyInterceptor } from './my-interceptor';

export const httpInterceptorProvider = 
  { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true };