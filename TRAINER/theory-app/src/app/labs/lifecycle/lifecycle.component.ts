import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  @Input() text!: string;

  constructor() {
    console.log('constructor');
    this.text = 'platzhalter' // previous state trotzdem undefined
  }

  ngOnChanges(changes: any) {
    console.log('changes :>> ', changes);
  }

  ngOnInit(): void {
    console.log('ng on init');
  }

  ngOnDestroy(): void {
    console.log('lifecycle component destroyed'); // schauen, ob nach Routing diese Zeile angezeigt wird
  }

}
