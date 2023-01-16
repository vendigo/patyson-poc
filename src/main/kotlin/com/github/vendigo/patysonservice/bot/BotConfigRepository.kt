package com.github.vendigo.patysonservice.bot

import com.google.cloud.spring.data.datastore.repository.DatastoreRepository

interface BotConfigRepository : DatastoreRepository<BotConfig, String> {

    fun save(config: BotConfig)
}
