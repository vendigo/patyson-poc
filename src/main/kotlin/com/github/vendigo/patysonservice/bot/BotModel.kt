package com.github.vendigo.patysonservice.bot

import com.google.cloud.spring.data.datastore.core.mapping.Entity

@Entity
data class BotConfig(val messages: Messages)

@Entity
data class Messages(val startMessage: String, val profileTemplate: String)