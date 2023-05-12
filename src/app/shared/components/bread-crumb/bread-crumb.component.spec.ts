import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbComponent } from './bread-crumb.component';

describe('BreadCrumbComponent', () => {
  let component: BreadCrumbComponent;
  let fixture: ComponentFixture<BreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadCrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items on the bread crumb', () => {
    component.items = [{ text: 'last', link: '/fake' }];
    component.isTheLastItem({ text: 'last' });

    const isTheLastItem = !component.isTheLastItem({
      text: 'last',
      link: '/fake',
    });

    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.is-the-last-item');

    expect(isTheLastItem).toBeTruthy();
    expect(el.textContent.trim()).toBe('last');
  });
});
