package com.github.vendigo

import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces

@Controller("/config")
class ConfigController {

    @Get
    @Produces(MediaType.APPLICATION_JSON)
    fun config(): BotConfig {
        return BotConfig("Hello")
    }
}