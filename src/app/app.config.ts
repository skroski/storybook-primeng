import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { of } from 'rxjs';
import { NodeService } from './service/node.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(), withInterceptorsFromDi()
    ),
    {
      provide: NodeService,
      useValue: {
        fetchData: () => of(['mock data'])
      }
    }
  ]
};
