package com.devbuild;

import com.devbuild.config.SoutenancePrerequisitesProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableDiscoveryClient
@EnableScheduling
@SpringBootApplication
@EnableConfigurationProperties(SoutenancePrerequisitesProperties.class)
public class SoutenanceServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SoutenanceServiceApplication.class, args);
    }
}
