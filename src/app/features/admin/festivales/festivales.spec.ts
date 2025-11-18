import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { Festival } from './festivales';

describe('Festival', () => {
=======
import { Festivales } from './festivales';

describe('Festivales', () => {
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  let component: Festivales;
  let fixture: ComponentFixture<Festivales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [Festival]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Festival);
=======
      imports: [Festivales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Festivales);
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
