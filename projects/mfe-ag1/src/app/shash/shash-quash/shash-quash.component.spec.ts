import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShashQuashComponent } from './shash-quash.component';

describe('ShashQuashComponent', () => {
  let component: ShashQuashComponent;
  let fixture: ComponentFixture<ShashQuashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShashQuashComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShashQuashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
