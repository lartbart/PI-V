package com.example.backend.user;

public class UserLoginDTO {

    private Integer CPF;
    private String Senha;

    public UserLoginDTO(Integer CPF, String Senha) {
        this.CPF = CPF;
        this.Senha = Senha;
    }

    public Integer getCPF() {
        return CPF;
    }

    public void setCPF(Integer CPF) {
        this.CPF = CPF;
    }

    public String getSenha() {
        return Senha;
    }

    public void setSenha(String Senha) {
        this.Senha = Senha;
    }
}
