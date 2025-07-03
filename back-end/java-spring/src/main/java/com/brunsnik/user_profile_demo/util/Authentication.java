package com.brunsnik.user_profile_demo.util;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

public class Authentication {
    public static final String AUTHTOKEN_NAME = "authtoken";

    public static String getAuthTokenFromId(UUID id) {
        var now = new Date();
        var s = now.toInstant().toString() + ":" + id.toString();
        var encoder = Base64.getEncoder();
        return encoder.encodeToString(s.getBytes(StandardCharsets.UTF_8));
    }
}
