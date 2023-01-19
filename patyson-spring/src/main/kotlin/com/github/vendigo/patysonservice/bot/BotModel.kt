package com.github.vendigo.patysonservice.bot

data class BotConfig(val messages: Messages)

data class Messages(val startMessage: String, val profileTemplate: String, val unknownCommand: String)