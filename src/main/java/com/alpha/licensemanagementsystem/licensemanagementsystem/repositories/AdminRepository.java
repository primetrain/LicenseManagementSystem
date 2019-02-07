package com.alpha.licensemanagementsystem.licensemanagementsystem.repositories;

import com.alpha.licensemanagementsystem.licensemanagementsystem.model.Admin;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "admins",path = "admins")
public interface AdminRepository extends PagingAndSortingRepository<Admin, Long> {
}
