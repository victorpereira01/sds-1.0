package com.victorpereira.devsuperior.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.victorpereira.devsuperior.dto.RecordDTO;
import com.victorpereira.devsuperior.dto.RecordInsertDTO;
import com.victorpereira.devsuperior.entities.Record;
import com.victorpereira.devsuperior.repositories.GameRepository;
import com.victorpereira.devsuperior.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository recordRepo;
	
	@Autowired
	private GameRepository gameRepo;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		entity.setGame(gameRepo.getOne(dto.getGameId()));
		
		recordRepo.save(entity);
		return new RecordDTO(entity);
	}

	@Transactional(readOnly=true)
	public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
		return recordRepo.findByMoments(minDate, maxDate, pageRequest).map(x -> new RecordDTO(x));
	}
}
