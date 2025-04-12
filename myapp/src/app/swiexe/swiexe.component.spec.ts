import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiexeComponent } from './swiexe.component';

describe('SwiexeComponent', () => {
  let component: SwiexeComponent;
  let fixture: ComponentFixture<SwiexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiexeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
