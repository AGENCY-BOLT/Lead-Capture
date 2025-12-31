  import { AppBar, Feature, Footer,  Vista } from 'funuicss'
  import React from 'react'

  export default function About() {
  return (
  <div>
    <AppBar
  variant="default"
/>
  <Vista
  variant="about_hero"
  />
<Vista
  variant="contact"
/>
<Feature
  variant="reviews"
/>
  <Footer
  variant="default"
/>
  </div>
  )
  }
