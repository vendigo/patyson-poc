package com.github.vendigo.patysonservice.bot

import org.springframework.stereotype.Service

@Service
class BotConfigService(private val configRepository: BotConfigRepository) {

    fun saveConfig(config: BotConfig) {
        configRepository.save(config)
    }

    fun getConfig(): BotConfig {
        return configRepository.findById("Global").orElseThrow()
    }
}