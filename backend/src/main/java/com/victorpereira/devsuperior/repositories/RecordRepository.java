package com.victorpereira.devsuperior.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victorpereira.devsuperior.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
