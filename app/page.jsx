  import { AppBar, Feature, Footer, Form, Notification, Vista } from 'funuicss'
  import React from 'react'

  export default function Home() {
  return (
  <div>
  {/* Notification */}
  <Notification
  variant="default"
  />

    <AppBar
  variant="default"
/>
  <Vista
  variant="default"
  />
  <Vista
  variant="introduction"
/>
<Feature
  variant="incentives"
/>
<Vista
  variant="service_1"
/>
<Vista
  variant="service_2"
/>
<Vista
  variant="service_3"
/>
<Vista
  variant="service_4"
/>
<Feature
  variant="reviews"
/>
<Vista
  variant="contact"
/>

  <Footer
  variant="default"
/>
  </div>
  )
  }
