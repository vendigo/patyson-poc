package com.github.vendigo

import com.google.cloud.datastore.Datastore
import com.google.cloud.datastore.IncompleteKey
import com.google.cloud.datastore.Key
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ConfigService(val datastore: Datastore) {

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