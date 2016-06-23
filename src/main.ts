import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TodoAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoAppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
	apiKey: "AIzaSyDbZTt6pcs7sFJG2TcFPt_zmt_gA3f_hOw",
	authDomain: "todo-d377e.firebaseapp.com",
	databaseURL: "https://todo-d377e.firebaseio.com",
	storageBucket: "",
  })
]);