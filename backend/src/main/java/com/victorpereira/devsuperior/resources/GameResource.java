package com.victorpereira.devsuperior.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.victorpereira.devsuperior.dto.GameDTO;
import com.victorpereira.devsuperior.services.GameService;

@RestController
@RequestMapping(value="/games")
public class GameResource {
	
	@Autowired
	private GameService gameService;
	
	@GetMapping
	private ResponseEntity<List<GameDTO>> findAll() {
		List<GameDTO> list = gameService.findAll();
		return ResponseEntity.ok().body(list);
	}
}
