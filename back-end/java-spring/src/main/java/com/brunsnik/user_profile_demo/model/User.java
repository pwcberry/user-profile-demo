package com.brunsnik.user_profile_demo.model;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

public record User(UUID id, String email) {

    private static final List<User> users = Arrays.asList(
            new User(UUID.fromString("a11bb1d1-205b-4dc5-ab10-98ab3dc0aaa4"), "pwcberry@gmail.com"),
            new User(UUID.fromString("cd1bdca9-5787-432a-9030-6c5efc8f3460"), "rfkuang@gmail.com")
    );

    public static User getByEmail(String email) {
        return users.stream().filter(user -> user.email().equals(email)).findFirst().orElse(null);
    }
}
