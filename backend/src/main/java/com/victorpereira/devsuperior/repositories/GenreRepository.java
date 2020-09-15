package com.victorpereira.devsuperior.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victorpereira.devsuperior.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
