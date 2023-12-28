"use client"

import {UIEvent, useEffect, useState} from "react"
import {throttle} from "lodash"
import {useStep} from "@/hooks/useStep"

const StepScroll = () => {
  const [currentStep, {goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep, setStep, reset}] = useStep(3)

  useEffect(() => {
    import("reveal.js").then(({default: Reveal}) => {
      Reveal.initialize()
    })
  }, [])

  return (
    <div className="reveal">
      <section data-transition="slides">The train goes on …</section>
      <section data-transition="slides">and on …</section>
      <section data-transition="slide-in fade-out">and stops.</section>
      <section data-transition="fade-in slide-out">(Passengers entering and leaving)</section>
      <section data-transition="slides">And it starts again.</section>
    </div>
  )
}

export default StepScroll
