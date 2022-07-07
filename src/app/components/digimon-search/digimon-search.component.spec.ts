import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonSearchComponent } from './digimon-search.component';

describe('DigimonSearchComponent', () => {
  let component: DigimonSearchComponent;
  let fixture: ComponentFixture<DigimonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
