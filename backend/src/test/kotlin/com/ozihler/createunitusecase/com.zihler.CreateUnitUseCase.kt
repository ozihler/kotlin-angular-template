package com.ozihler.createunitusecase

import com.ozihler.domain.WorkUnit
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class CreateUnitUseCaseTest {

    @Test
    fun `should create a new unit`() {
        val unit = WorkUnit(1L)
        assertEquals(unit, CreateUnitUseCase().createUnit())
    }
}

