package com.github.vendigo

import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/dashboard/bot-config")
@Produces(MediaType.APPLICATION_JSON)
class DashboardController(val configService: ConfigService) {

    @GET
    fun getBotConfig(): BotConfig {
        return configService.getConfig()
    }
}