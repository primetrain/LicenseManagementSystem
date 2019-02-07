package com.alpha.licensemanagementsystem.licensemanagementsystem.repositories;

import com.alpha.licensemanagementsystem.licensemanagementsystem.model.Region;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "regions", path = "regions")
public interface RegionRepository extends PagingAndSortingRepository<Region, Long> {
}
