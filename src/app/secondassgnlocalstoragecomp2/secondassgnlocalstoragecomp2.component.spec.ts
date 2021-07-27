import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondassgnlocalstoragecomp2Component } from './secondassgnlocalstoragecomp2.component';

describe('Secondassgnlocalstoragecomp2Component', () => {
  let component: Secondassgnlocalstoragecomp2Component;
  let fixture: ComponentFixture<Secondassgnlocalstoragecomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondassgnlocalstoragecomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondassgnlocalstoragecomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
