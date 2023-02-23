import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-slide-pege',
  templateUrl: './slide-pege.component.html',
  styleUrls: ['./slide-pege.component.scss']
})
export class SlidePegeComponent implements OnInit, AfterViewInit {

  @ViewChild('slider') input!: any;
  widthScreen!: number;
  maxScroll!: number;
  resizeObservable$!: Observable<Event>
  resizeSubscription$!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( () => {
      this.widthScreen = this.input.nativeElement.offsetWidth;
      this.maxScroll = this.input.nativeElement.scrollLeftMax;
    })
  }

  ngAfterViewInit() {
    this.widthScreen = this.input.nativeElement.offsetWidth;
    this.maxScroll = this.input.nativeElement.scrollLeftMax;

    console.log(this.input);

    setInterval(() => this.autoSlide(), 5000);
  }

  scrollRight(): void {
    if (this.input.nativeElement.scrollLeft < this.maxScroll - 8) {
      this.input.nativeElement.scrollLeft += this.widthScreen ;
    }
    else this.input.nativeElement.scrollLeft = 0;
  }

  scrollLeft(): void {
    this.input.nativeElement.scrollLeft -= this.widthScreen;
  }

  autoSlide(): void {
    this.scrollRight()
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }
}
