import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonRange,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.page.html',
  styleUrls: ['./color-change.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonRange,
    IonTitle,
    IonToolbar,
  ],
})
export class ColorChangePage {
  red_value = 120;
  green_value = 120;
  blue_value = 120;

  button_color = 'rgb(120, 120, 120)';
  background_color = '#f8fafc';

  get rgbColor(): string {
    return `rgb(${this.red_value}, ${this.green_value}, ${this.blue_value})`;
  }

  get hexColor(): string {
    return `#${this.toHex(this.red_value)}${this.toHex(this.green_value)}${this.toHex(this.blue_value)}`.toUpperCase();
  }

  get contrastColor(): string {
    return this.getContrastColor(this.red_value, this.green_value, this.blue_value);
  }

  get buttonTextColor(): string {
    const valores_rgb = this.button_color.match(/\d+/g);

    if(!valores_rgb){ return '#ffffff'; }

    const red_value = Number(valores_rgb[0]);
    const green_value = Number(valores_rgb[1]);
    const blue_value = Number(valores_rgb[2]);

    return this.getContrastColor(red_value, green_value, blue_value);
  }

  alterarCorBotao(): void
  {
    this.button_color = this.rgbColor;
  }

  alterarCorFundo(): void
  {
    this.background_color = this.rgbColor;
  }

  resetarCores(): void
  {
    this.red_value = 120;
    this.green_value = 120;
    this.blue_value = 120;
    this.button_color = this.rgbColor;
    this.background_color = '#f8fafc';
  }

  private toHex(value: number): string
  {
    return value.toString(16).padStart(2, '0');
  }

  private getContrastColor(red_value: number, green_value: number, blue_value: number): string
  {
    const luminance = (red_value * 299 + green_value * 587 + blue_value * 114) / 1000;

    if(luminance > 150){ return '#111827'; }

    return '#ffffff';
  }
}
