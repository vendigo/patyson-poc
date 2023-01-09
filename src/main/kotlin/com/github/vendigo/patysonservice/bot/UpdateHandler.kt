package com.github.vendigo.patysonservice.bot

import org.springframework.stereotype.Service
import org.telegram.telegrambots.meta.api.methods.BotApiMethod
import org.telegram.telegrambots.meta.api.methods.send.SendMessage
import org.telegram.telegrambots.meta.api.objects.Update

@Service
class UpdateHandler {

    val START = "/start"
    val PROFILE = "/profile"

    fun handleUpdate(update: Update): BotApiMethod<*>? {
        return SendMessage(update.message.chatId.toString(), "Hello from Patyson Bot")
    }
}