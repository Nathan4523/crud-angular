import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.css']
})
export class GlyphComponent implements OnInit {
  @Input()
  icon;

  constructor() { }

  ngOnInit() {
  }

}
