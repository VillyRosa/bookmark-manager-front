import {ChangeDetectorRef, Component, inject, Input, OnChanges} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon implements OnChanges {
  @Input({ required: true }) icon: string = '';

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);

  protected svgContent: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');

  public ngOnChanges(): void {
    this.loadSvg();
  }

  private loadSvg(): void {
    const path = `images/${this.icon}.svg`;

    this.http.get(path, { responseType: 'text' }).subscribe({
      next: (svg: string) => {
        const svgWithoutStroke = this.removeStrokeAttributes(svg);
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgWithoutStroke);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro to load SVG:', error);
      }
    });
  }

  private removeStrokeAttributes(svg: string): string {
    return svg
      .replace(/\sstroke\s*=\s*["'][^"']*["']/gi, '');
  }
}
