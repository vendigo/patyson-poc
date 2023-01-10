package com.github.vendigo.patysonservice.dashboard

import com.github.vendigo.patysonservice.bot.BotConfig
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class DashboardController {

    @PostMapping("/dashboard/bot-config")
    fun editConfig(@RequestBody config: BotConfig) {

    }
}