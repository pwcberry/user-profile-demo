package com.brunsnik.user_profile_demo.servlet;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;

//@Configuration
public class ServletConfig {
    @Bean
    public ServletRegistrationBean<AuthServlet> authServletServletRegistration() {
        return new ServletRegistrationBean<>(new AuthServlet(), "/graphql");
    }
}
