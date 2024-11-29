package com.example.backend.agendamentos_marcados;

import com.example.backend.agendamentos.AgendamentosModel;
import com.example.backend.agendamentos.AgendamentosService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/agendamentos_marcados")
@CrossOrigin
public class AgendamentosMarcadosController {

    final AgendamentosMarcadosService agendamentosService;

    public AgendamentosMarcadosController(AgendamentosMarcadosService agendamentosService) {
        this.agendamentosService = agendamentosService;
    }

    @PostMapping("/agendar")
    public void Agendar(@RequestBody AgendamentosMarcadosModel agendamentosModel) {
        agendamentosService.Agendar(agendamentosModel);
    }

    @GetMapping("/achar_agendamentos/{cpf}")
    public Optional<AgendamentosMarcadosModel> AcharAgendamentos(@PathVariable Integer cpf) {
        return agendamentosService.AcharAgendamentos(cpf);
    }


}
