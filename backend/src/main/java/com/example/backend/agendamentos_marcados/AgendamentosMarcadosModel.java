package com.example.backend.agendamentos_marcados;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AgendamentosMarcadosModel {

    @Id
    private Integer cpf;
    private String unidade;
    private String cidade;
    private String uf;
    private String data;
    private String horario;

    public AgendamentosMarcadosModel() {
    }

    public AgendamentosMarcadosModel(Integer cpf, String unidade, String cidade, String uf, String data, String horario) {
        this.cpf = cpf;
        this.unidade = unidade;
        this.cidade = cidade;
        this.uf = uf;
        this.data = data;
        this.horario = horario;
    }

    public Integer getCpf() {
        return cpf;
    }

    public void setCpf(Integer cpf) {
        this.cpf = cpf;
    }

    public String getUnidade() {
        return unidade;
    }

    public void setUnidade(String unidade) {
        this.unidade = unidade;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }
}
