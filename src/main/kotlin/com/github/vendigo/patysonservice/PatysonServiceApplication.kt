package com.github.vendigo.patysonservice

import com.google.cloud.spring.data.datastore.repository.config.EnableDatastoreRepositories
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableDatastoreRepositories
class PatysonServiceApplication

fun main(args: Array<String>) {
    runApplication<PatysonServiceApplication>(*args)
}
