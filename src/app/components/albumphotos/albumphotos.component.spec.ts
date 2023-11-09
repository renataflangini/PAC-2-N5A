import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumphotosComponent } from './albumphotos.component';

describe('AlbumphotosComponent', () => {
  let component: AlbumphotosComponent;
  let fixture: ComponentFixture<AlbumphotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumphotosComponent]
    });
    fixture = TestBed.createComponent(AlbumphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
