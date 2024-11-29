package com.example.backend.user;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginDTO userDTO) {

        boolean verification = userService.Entrar(userDTO);

        if (verification) {
            return ResponseEntity.ok("");
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<String> Register(@RequestBody UserRegisterDTO userRegisterDTO) {
        return userService.Cadastrar(userRegisterDTO);
    }


}
