package com.example.backend.user;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    final UserRepository userRepository;
    final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public boolean Entrar(UserLoginDTO userLoginDTO) {

        List<UserModel> users = userRepository.findAll();
        Optional<UserModel> foundUser = users.stream().filter(user -> user.getCPF().equals(userLoginDTO.getCPF())).findFirst();
        if (foundUser.isPresent()) {
            return foundUser.filter(userModel -> passwordEncoder.matches(userLoginDTO.getSenha(), userModel.getSenha())).isPresent();
        } else {
            return false;
        }
    }
    public ResponseEntity<String> Cadastrar(UserRegisterDTO userRegisterDTO) {


        if (userRegisterDTO.getCPF() == null || userRegisterDTO.getNome() == null || userRegisterDTO.getUF() == null
                || userRegisterDTO.getCidade() == null || userRegisterDTO.getSenha() == null) {
            throw new IllegalArgumentException("Todos os campos são obrigatórios!");
        }

        if (userRepository.existsById(userRegisterDTO.getCPF())) {
            throw new RuntimeException("CPF já registrado!");
        }
        else {
            UserModel userModel = new UserModel(
                    userRegisterDTO.getCPF(),
                    userRegisterDTO.getNome(),
                    userRegisterDTO.getUF(),
                    userRegisterDTO.getCidade(),
                    passwordEncoder.encode(userRegisterDTO.getSenha())
            );

            userRepository.save(userModel);
            return ResponseEntity.ok("");
        }

    }

}
