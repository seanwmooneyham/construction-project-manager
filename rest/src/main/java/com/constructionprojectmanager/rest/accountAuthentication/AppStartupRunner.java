package com.constructionprojectmanager.rest.accountAuthentication;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;


@Component
public class AppStartupRunner implements ApplicationRunner {

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(AppStartupRunner.class);

    @Autowired
    DataSource dataSource;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        String encoderId = "{bcrypt}";
        String password = "password123";
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedPassword = encoderId + encoder.encode(password);

        String testuser = "test-cpm-user";
        String testadmin = "test-cpm-admin";
        String sql = "INSERT INTO users VALUES(?, ?, TRUE);INSERT INTO users VALUES(?, ?, TRUE);" +
                "INSERT INTO user_roles VALUES(?, 'USER');INSERT INTO user_roles VALUES(?, 'ADMIN')";

        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        jdbcTemplate.update(sql,
                testuser, hashedPassword, testadmin, hashedPassword, testuser, testadmin
        );

        logger.info("Test users added to database");
    }
}
