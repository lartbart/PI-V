package com.example.backend.user;

public class UserRegisterDTO {

    private Integer CPF;
    private String Nome;
    private String UF;
    private String Cidade;
    private String Senha;

    public UserRegisterDTO(Integer CPF, String Nome, String UF, String Cidade, String Senha) {
        this.CPF = CPF;
        this.Nome = Nome;
        this.UF = UF;
        this.Cidade = Cidade;
        this.Senha = Senha;
    }

    public Integer getCPF() {
        return CPF;
    }

    public void setCPF(Integer CPF) {
        this.CPF = CPF;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String Nome) {
        this.Nome = Nome;
    }

    public String getUF() {
        return UF;
    }

    public void setUF(String UF) {
        this.UF = UF;
    }

    public String getCidade() {
        return Cidade;
    }

    public void setCidade(String Cidade) {
        this.Cidade = Cidade;
    }

    public String getSenha() {
        return Senha;
    }

    public void setSenha(String Senha) {
        this.Senha = Senha;
    }
}
