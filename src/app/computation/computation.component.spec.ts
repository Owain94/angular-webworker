import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ComputationComponent } from './computation.component';

describe('ComputationComponent', () => {
  let computationComponent: ComputationComponent;
  let computationFixture: ComponentFixture<ComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        ComputationComponent,
        ComputationComponent
      ],
    });
  }));

  beforeEach(() => {
    computationFixture = TestBed.createComponent(ComputationComponent);
    computationComponent = computationFixture.componentInstance;
  });

  it('should create the computation component', () => {
    expect(computationFixture.debugElement.componentInstance).toBeTruthy();
  });
});
