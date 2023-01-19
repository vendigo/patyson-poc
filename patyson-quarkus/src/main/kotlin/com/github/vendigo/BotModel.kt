package com.github.vendigo

data class BotConfig(val messages: Messages)

data class Messages(val startMessage: String, val profileTemplate: String, val unknownCommand: String)