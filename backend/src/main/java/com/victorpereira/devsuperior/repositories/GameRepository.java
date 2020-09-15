package com.victorpereira.devsuperior.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victorpereira.devsuperior.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
