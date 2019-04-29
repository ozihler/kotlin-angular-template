package com.ozihler.sample

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class SampleResource {
    @GetMapping("/hello")
    fun greeting(): Greeting = Greeting("Hello World")
}