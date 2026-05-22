import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';

export const ConfigService: any = {
  apiVersion: environment.API_VERSION,
  apiScheme: environment.API_SCHEME,
  apiFile: environment.API_FILE,
  apiDomain: environment.API_DOMAIN,
  toApiUrl(path: any) {
    if (path) return `${this.apiScheme}://${this.apiDomain}/${path}`;
    return `${this.apiScheme}://${this.apiDomain}`;
  },
  toFile(path: any) {
    return `${this.apiScheme}://${this.apiFile}/${path}`;
  },
  getOrigin() {
    return `${this.apiScheme}://${this.apiFile}`;
  },
  httpHeader(token: any = null) {
    if (token != null) {
      return {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        })
      };
    }
    return { headers: new HttpHeaders({}) };
  },
  addAction(action: string) {
    return { headers: new HttpHeaders({ 'action': action }) };
  },
  toWsUrl(path: any) {
    return `wss://${this.apiDomain}/${path}`;
  }
};
