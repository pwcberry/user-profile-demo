package com.brunsnik.user_profile_demo.servlet;

import com.brunsnik.user_profile_demo.util.Authentication;
//import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

//import java.io.IOException;
import java.util.*;

@WebServlet("/graphql")
public class AuthServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        handleCookieStatus(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        handleCookieStatus(request, response);
    }

    private void handleCookieStatus(HttpServletRequest request, HttpServletResponse response) {
        // TODO
        // If cookie doesn't exist, check request body for JSON and the `authUser` query field
        // If cookie doesn't exist and `authUser` doesn't exist, throw exception
        // If cookie value doesn't match token format, throw exception
        // We could check if the cookie value exists as an active session, but will do that as an extension exercise

        // NOTE: as the getCookies method returns an old-fashioned array, and can be null, using functional techniques
        // in one line of code proved to be difficult.
        List<Cookie> cookies = request.getCookies() != null ? List.of(request.getCookies()) : List.of();
        Cookie userToken = cookies.stream().filter(cookie -> cookie.getName().equals(Authentication.AUTHTOKEN_NAME)).findFirst().orElse(null);

        if (userToken == null) {
            var userId = UUID.fromString("a11bb1d1-205b-4dc5-ab10-98ab3dc0aaa4");
            userToken = new Cookie(Authentication.AUTHTOKEN_NAME, Authentication.getAuthTokenFromId(userId));
            userToken.setMaxAge(5 * 60);
            response.addCookie(userToken);
        }
    }
}
