package com.alpha.licensemanagementsystem.licensemanagementsystem.repositories;

import com.alpha.licensemanagementsystem.licensemanagementsystem.model.Language;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "languages", path = "languages")
public interface LanguageRepository extends PagingAndSortingRepository<Language, Long> {
}
