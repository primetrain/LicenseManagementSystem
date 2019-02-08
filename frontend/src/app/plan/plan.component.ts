import { Component, OnInit } from '@angular/core';
import { PlanService } from '../_services/plan.service';
import { Plan } from '../Resource/Plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans: Plan[];

  constructor(private planService: PlanService, private router: Router) { }

  ngOnInit() {
    this.planService
    .getAll()
    .subscribe((plans: Plan[]) => {
      this.plans = plans
    })
  }
  
  selectedplan(plan: Plan){
    this.planService.subject.publish = plan;
    this.router.navigate(["products"])
  }

  addToCart(event: Event){
    event.stopPropagation()
  }
}
