import { Component,ChangeDetectorRef } from '@angular/core';
import { HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  title = 'portfolio';
  theme: string = localStorage.getItem("theme");

  private _mobileQueryListener: () => void;

  constructor(public overlayContainer: OverlayContainer,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    if (localStorage.getItem('theme')) {
			this.theme = localStorage.getItem("theme");
		}
    this.mobileQuery = media.matchMedia('(max-width: 998px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
		setTimeout(() => {
			this.onSetTheme(this.theme);
		}, 300);
	}

  ngOnDestroy() {
		this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  @HostBinding('class') componentCssClass;
	onSetTheme(tema: string) {

		if (!localStorage.getItem('tema')) {
			localStorage.setItem("theme", 'light-theme');
			this.theme = 'light-theme'
		} else {
			this.theme = localStorage.getItem("theme")
			localStorage.setItem("tema", tema);
		}
		this.overlayContainer.getContainerElement().classList.add(this.theme);
		this.componentCssClass = tema;

		this.overlayContainer.getContainerElement().classList.remove(this.theme);
		this.overlayContainer.getContainerElement().classList.add(tema);

		this.theme = localStorage.getItem("tema")

		document.querySelector('#body').className = '';
		document.getElementById("body").classList.add(tema);

	}
}
