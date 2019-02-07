package com.alpha.licensemanagementsystem.licensemanagementsystem.repositories;

import com.alpha.licensemanagementsystem.licensemanagementsystem.model.Subscription;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "subscriptions", path = "subscriptions")
public interface SubscriptionRepository extends PagingAndSortingRepository<Subscription, Long> {
}
