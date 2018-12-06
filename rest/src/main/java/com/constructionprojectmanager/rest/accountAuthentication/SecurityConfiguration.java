package com.constructionprojectmanager.rest.accountAuthentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

        auth.jdbcAuthentication().dataSource(dataSource)
                .usersByUsernameQuery("SELECT username, password, enabled FROM users WHERE username=?")
                .authoritiesByUsernameQuery("SELECT username, role FROM user_roles WHERE username=?");
    }


    /**
     *  NoPopupBasicAuthenticationEntryPoint() stifles the default browser authentication dialog.
     */

    public class NoPopupBasicAuthenticationEntryPoint implements AuthenticationEntryPoint {

        @Override
        public void commence(HttpServletRequest request, HttpServletResponse response,
                             AuthenticationException authException) throws IOException {

            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
        }

    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().and()
                .exceptionHandling().authenticationEntryPoint(new NoPopupBasicAuthenticationEntryPoint()).and()
                .authorizeRequests()
                .antMatchers("/index.html", "/", "/home", "/login", "/*.js").permitAll()
                .anyRequest().authenticated()
                .and()
                .logout().logoutUrl("/api/logout")
                .deleteCookies("auth_code", "JSESSIONID", "XSRF-TOKEN").invalidateHttpSession(true)
                .and()
                .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }
}
