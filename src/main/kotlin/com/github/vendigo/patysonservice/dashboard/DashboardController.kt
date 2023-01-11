package com.github.vendigo.patysonservice.dashboard

import com.github.vendigo.patysonservice.bot.BotConfig
import com.github.vendigo.patysonservice.bot.BotConfigService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/dashboard")
class DashboardController(val configService: BotConfigService) {

    @PostMapping("/bot-config")
    fun editConfig(@RequestBody config: BotConfig) {
        configService.saveConfig(config)
    }

    @GetMapping("/bot-config")
    fun getConfig(): BotConfig {
        return configService.getConfig()
    }
}