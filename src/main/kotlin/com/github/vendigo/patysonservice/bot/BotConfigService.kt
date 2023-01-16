package com.github.vendigo.patysonservice.bot

import com.google.cloud.datastore.Datastore
import com.google.cloud.datastore.IncompleteKey
import com.google.cloud.datastore.Key
import org.springframework.stereotype.Service

@Service
class BotConfigService(val datastore: Datastore) {

    fun saveConfig(config: BotConfig) {
        TODO("Not Implemented")
    }

    fun getConfig(): BotConfig {
        val configKey: Key = datastore.newKeyFactory()
            .setKind("botConfig")
            .newKey("Global")
        val e = datastore[configKey]
        val messages = e.getEntity<IncompleteKey>("messages")
        return BotConfig(
            Messages(
                messages.getString("startMessage"),
                messages.getString("profileTemplate"),
                messages.getString("unknownCommand")
            )
        )
    }
}