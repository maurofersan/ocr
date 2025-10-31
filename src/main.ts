import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { CardOcrSDK } from '@identy/identy-ocr';
// declare const LICENSE: string;
const LICENSE =
  'QUVTAgAAAGzINdTc96gA4Y9ZPxP2IBV6Oe8oxFBtsMkubyhcOMw8W1Dckd3AG24OfabMFlKTmk6cVA2Ii5lZPMdM7dvpbGDYP2YdrYX205pwodJX+gOWgb73Fu6A1v1433jbzy7s8eqBbPqFEBb4H+M1HSQtle0EajqHC67MZ53S5WhqLmWTxMKVYgdizqw6TCxUtoeJSmI=';

// ******************************* //
// Preinitialize... //
// ******************************* //
// SDK needs to be pre-initialized,

if (!LICENSE) {
  console.error('LICENSE is not set');
  console.error('LICENSE is not set');
  console.error('LICENSE is not set');
  console.error('LICENSE is not set');
}

//RUN ```export LICENSE="'<Base64_License>'";yarn start```; If you dont want to replace the LICENSE here.
let license = LICENSE;
console.log('license', license);
try {
  // For local browser capture (no server decryption), URL is not required.
  // Provide only the LICENSE here. If you use Secure Decryption on server,
  // pass your IDENTY Web Server public key endpoint instead.
  CardOcrSDK.preInitialize(license)
    .then(([a, b]) => console.log('Ok in preInitialize()::', b))
    .catch((err) => {
      console.log('error in preInitialize()::', err);
      if (err.code == 506) {
        alert(err.message);
      }
    });
} catch (error) {
  console.log(error);
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
