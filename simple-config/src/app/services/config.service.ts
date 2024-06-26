import { Injectable } from '@angular/core';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor() {}

  async getConfig(): Promise<Config> {
    const config = await fetch(this.configUrl);

    return await config.json();
    // Without Fetch: return this.http.get<Config>(this.configUrl);
  }
}
