package com.github.vendigo.patysonservice.bot

import com.google.cloud.spring.data.datastore.core.mapping.Entity
import org.springframework.data.annotation.Id

@Entity
data class BotConfig(val messages: Messages, @Id val id: String = "Global")

@Entity
data class Messages(val startMessage: String, val profileTemplate: String, val unknownCommand: String)