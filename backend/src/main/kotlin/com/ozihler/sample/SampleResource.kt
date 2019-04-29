package com.ozihler.sample

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin
@RestController
class SampleResource {
    @GetMapping("/api/sample")
    fun greeting(): Greeting = Greeting("Hello World")
}