package com.ozihler.createunitusecase

import com.ozihler.domain.WorkUnit

class CreateUnitUseCase {
    fun createUnit(): WorkUnit {

        return WorkUnit(1L)
    }

}