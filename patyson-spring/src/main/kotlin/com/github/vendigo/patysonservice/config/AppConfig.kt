package com.github.vendigo.patysonservice.config

import com.google.cloud.datastore.Datastore
import com.google.cloud.datastore.DatastoreOptions
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AppConfig {

    @Bean
    fun datastore(): Datastore {
        return DatastoreOptions.getDefaultInstance().service
    }
}