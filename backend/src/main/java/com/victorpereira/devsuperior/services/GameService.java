package com.victorpereira.devsuperior.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.victorpereira.devsuperior.dto.GameDTO;
import com.victorpereira.devsuperior.entities.Game;
import com.victorpereira.devsuperior.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepo;
	
	@Transactional(readOnly=true)
	public List<GameDTO> findAll() {
		List<Game> games = gameRepo.findAll();
		return games.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
	}
}
