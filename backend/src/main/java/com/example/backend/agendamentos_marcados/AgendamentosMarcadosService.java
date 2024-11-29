package com.example.backend.agendamentos_marcados;

import com.example.backend.agendamentos.AgendamentosRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgendamentosMarcadosService {

    final AgendamentosMarcadosRepository agendamentosRepository;

    public AgendamentosMarcadosService(AgendamentosMarcadosRepository agendamentosRepository) {
        this.agendamentosRepository = agendamentosRepository;
    }

    public void Agendar(AgendamentosMarcadosModel agendamentosMarcadosModel) {
        agendamentosRepository.save(agendamentosMarcadosModel);
    }

    public Optional<AgendamentosMarcadosModel> AcharAgendamentos(Integer cpf) {
        return agendamentosRepository.findById(cpf);
    }
}
