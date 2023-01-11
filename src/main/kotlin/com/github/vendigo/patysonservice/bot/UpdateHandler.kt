package com.github.vendigo.patysonservice.bot

import org.springframework.stereotype.Service
import org.telegram.telegrambots.meta.api.methods.BotApiMethod
import org.telegram.telegrambots.meta.api.methods.send.SendMessage
import org.telegram.telegrambots.meta.api.objects.Update

@Service
class UpdateHandler(private val configService: BotConfigService) {

    val START = "/start"
    val PROFILE = "/profile"
    val ANSWER = "/answer"
    val CANCEL = "/cancel"
    val LEADERBOARD = "/leaderboard"

    fun handleUpdate(update: Update): BotApiMethod<*>? {
        if (!update.hasMessage() || !update.message.hasText()) {
            return null
        }

        val messages = configService.getConfig().messages
        val command = update.message.text
        val response = handleCommand(command, messages)

        return SendMessage(update.message.chatId.toString(), response)
    }

    fun handleCommand(command: String, messages: Messages): String {
        return when (command) {
            START -> messages.startMessage
            PROFILE -> messages.profileTemplate
            else -> messages.unknownCommand
        }
    }
}