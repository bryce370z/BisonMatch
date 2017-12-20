import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBisonMatchComponent } from './about-bison-match.component';

describe('AboutBisonMatchComponent', () => {
  let component: AboutBisonMatchComponent;
  let fixture: ComponentFixture<AboutBisonMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBisonMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBisonMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
