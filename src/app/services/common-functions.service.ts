import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonFunctionsService {
  constructor() {}

  public sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  scrollToElement(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/imgs/common/default-picture.png';
  }

  getCurrentPosition(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Géolocalisation non supportée par le navigateur');
      } else {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve({
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            });
          },
          (err) => reject(err)
        );
      }
    });
  }

  allowFloat(event: KeyboardEvent) {
    const char = String.fromCharCode(event.charCode);
    const value = (event.target as HTMLInputElement).value;

    // allow only digits and dot
    if (!/^[0-9.]$/.test(char)) {
      event.preventDefault();
      return;
    }

    // prevent multiple dots
    if (char === '.' && value.includes('.')) {
      event.preventDefault();
    }
  }
}
