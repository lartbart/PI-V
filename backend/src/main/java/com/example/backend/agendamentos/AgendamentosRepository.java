package com.example.backend.agendamentos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgendamentosRepository extends JpaRepository<AgendamentosModel, Integer> {


    @Query("SELECT DISTINCT uf FROM AgendamentosModel")
    List<String> findAllUf();

    @Query("SELECT DISTINCT cidade FROM AgendamentosModel WHERE uf=?1")
    List<String> findAllCidade(String uf);

    @Query("SELECT DISTINCT unidade FROM AgendamentosModel WHERE cidade=?1")
    List<String> findAllUnidade(String cidade);

    @Query("SELECT DISTINCT data FROM AgendamentosModel WHERE unidade=?1")
    List<String> findAllData(String unidade);

    @Query("SELECT DISTINCT horario FROM AgendamentosModel WHERE data=?1 AND unidade=?2")
    List<String> findAllHorario(String data, String unidade);

}
