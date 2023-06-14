import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardSmComponent } from './blog-card-sm.component';

describe('BlogCardSmComponent', () => {
  let component: BlogCardSmComponent;
  let fixture: ComponentFixture<BlogCardSmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCardSmComponent]
    });
    fixture = TestBed.createComponent(BlogCardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
