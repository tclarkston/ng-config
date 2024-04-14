import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ng-config';
  data: any;

  constructor(private configService: ConfigService) {}

  async ngOnInit() {
    await this.getConfig();
  }

  async getConfig() {
    this.data = await this.configService.getConfig();
  }
}
