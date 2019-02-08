import { Component, OnInit } from '@angular/core';
import { PlanService } from '../_services/plan.service';
import { Plan } from '../Resource/Plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.planService
    .getAll()
    .subscribe((plans: Plan[]) => {
      this.plans = plans
    })
  }

}
