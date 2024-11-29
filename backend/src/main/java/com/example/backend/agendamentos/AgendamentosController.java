package com.example.backend.agendamentos;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agendamentos")
@CrossOrigin
public class AgendamentosController {

    final AgendamentosService agendamentosService;

    public AgendamentosController(AgendamentosService agendamentosService) {
        this.agendamentosService = agendamentosService;
    }

    @GetMapping("/getuf")
    public List<String> getUF() {
        return agendamentosService.getAllUf();
    }

    @GetMapping("/getcidade/{uf}")
    public List<String> getCidade(@PathVariable String uf) {
        return agendamentosService.getALlCidade(uf);
    }

    @GetMapping("/getunidade/{cidade}")
    public List<String> getUnidade(@PathVariable String cidade) {
        return agendamentosService.getALlUnidade(cidade);
    }

    @GetMapping("/getdata/{unidade}")
    public List<String> getData(@PathVariable String unidade) {
        return agendamentosService.getALlData(unidade);
    }

    @GetMapping("/gethorario/{data}/{unidade}")
    public List<String> getHorario(@PathVariable String data, @PathVariable String unidade) {
        String data_adjusted = data.replace('_','/' );
        return agendamentosService.getALlHorario(data_adjusted, unidade);
    }




}
