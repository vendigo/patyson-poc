package com.github.vendigo

import org.telegram.telegrambots.meta.api.methods.send.SendMessage
import org.telegram.telegrambots.meta.api.objects.Update
import javax.ws.rs.Consumes
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/callback/patyson-bot")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
class BotController(val updateHandler: UpdateHandler) {

    @POST
    fun handleUpdate(update: Update): SendMessage? {
        return updateHandler.handleUpdate(update)
    }
}