package com.example.backend.agendamentos_marcados;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgendamentosMarcadosRepository extends JpaRepository<AgendamentosMarcadosModel, Integer> {




}
