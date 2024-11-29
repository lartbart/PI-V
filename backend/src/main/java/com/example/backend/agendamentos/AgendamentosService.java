package com.example.backend.agendamentos;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class AgendamentosService {

    final AgendamentosRepository agendamentosRepository;

    public AgendamentosService(AgendamentosRepository agendamentosRepository) {
        this.agendamentosRepository = agendamentosRepository;
    }

    public List<String> getAllUf() {
        return agendamentosRepository.findAllUf();
    }
    public List<String> getALlCidade(String uf) {
        return agendamentosRepository.findAllCidade(uf);
    }

    public List<String> getALlUnidade(String cidade) {
        return agendamentosRepository.findAllUnidade(cidade);
    }

    public List<String> getALlData(String unidade) {
        return agendamentosRepository.findAllData(unidade);
    }

    public List<String> getALlHorario(String data, String unidade) {
        return agendamentosRepository.findAllHorario(data, unidade);
    }
}
