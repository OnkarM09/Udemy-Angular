import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { Store, provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './app/store/counter.effects';

bootstrapApplication(AppComponent, {
    providers: [provideStore({
        counter: counterReducer,
        //ex2 : exp2Reducer etc.
    }), provideEffects(
      [ CounterEffects]
    )]
});
