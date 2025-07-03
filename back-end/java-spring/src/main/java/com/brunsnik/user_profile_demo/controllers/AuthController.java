package com.brunsnik.user_profile_demo.controllers;

import com.brunsnik.user_profile_demo.model.User;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class AuthController {

    @QueryMapping
    public User authUser(@Argument String email) {
        return User.getByEmail(email);
    }

    @QueryMapping
    public boolean exitUser() {
        // TODO: Check cookie or session manager
        // `true` indicates a successful log out
        return true;
    }

    @QueryMapping
    public boolean isSessionActive() {
        // TODO: Check cookie or session manager
        return false;
    }
}
