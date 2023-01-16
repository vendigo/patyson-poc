package com.github.vendigo.patysonservice

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PatysonServiceApplication

fun main(args: Array<String>) {
    runApplication<PatysonServiceApplication>(*args)
}
