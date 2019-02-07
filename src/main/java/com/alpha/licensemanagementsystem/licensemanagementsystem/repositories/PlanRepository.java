package com.alpha.licensemanagementsystem.licensemanagementsystem.repositories;

import com.alpha.licensemanagementsystem.licensemanagementsystem.model.Plan;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "plans", path = "plans")
public interface PlanRepository extends PagingAndSortingRepository<Plan, Long> {
}
