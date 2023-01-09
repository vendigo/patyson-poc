package com.github.vendigo.patysonservice.bot

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.telegram.telegrambots.meta.api.methods.BotApiMethod
import org.telegram.telegrambots.meta.api.objects.Update

@RestController
class BotController(val updateHandler: UpdateHandler) {

    @PostMapping("/callback/patyson-bot")
    fun handleUpdate(@RequestBody update: Update): BotApiMethod<*>? {
        return updateHandler.handleUpdate(update)
    }
}