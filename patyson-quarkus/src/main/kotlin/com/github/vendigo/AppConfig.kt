package com.github.vendigo

import com.google.cloud.datastore.Datastore
import com.google.cloud.datastore.DatastoreOptions
import javax.enterprise.context.ApplicationScoped
import javax.enterprise.inject.Produces

@ApplicationScoped
class AppConfig {

    @Produces
    fun datastore(): Datastore {
        return DatastoreOptions.getDefaultInstance().service
    }
}