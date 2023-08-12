import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredintialsComponent } from './credintials.component';

describe('CredintialsComponent', () => {
  let component: CredintialsComponent;
  let fixture: ComponentFixture<CredintialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CredintialsComponent]
    });
    fixture = TestBed.createComponent(CredintialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
