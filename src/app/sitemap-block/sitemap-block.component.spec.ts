import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapBlockComponent } from './sitemap-block.component';

describe('SitemapBlockComponent', () => {
  let component: SitemapBlockComponent;
  let fixture: ComponentFixture<SitemapBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemapBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
