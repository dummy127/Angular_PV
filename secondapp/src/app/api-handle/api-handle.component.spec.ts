import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHandleComponent } from './api-handle.component';

describe('ApiHandleComponent', () => {
  let component: ApiHandleComponent;
  let fixture: ComponentFixture<ApiHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiHandleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
