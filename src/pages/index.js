import React from "react"
import { LanguageProvider } from "../contexts/Language"
import Head from "../components/head.js"
import MobileHeader from "../components/mobileHeader"
import DesktopMenu from "../components/desktopMenu"
import LandingModule from "../modules/landingModule.js"
import GeneralInfoModule from "../modules/generalInfoModule.js"
import TimelineModule from "../modules/timelineModule.js"
import FormatModule from "../modules/formatModule.js"
import SignUpModule from "../modules/signUpModule.js"

// markup
const IndexPage = () => {
  return (
      <main className="bg-background">
        <Head></Head>
        <MobileHeader></MobileHeader>
        <DesktopMenu></DesktopMenu>
        <LandingModule></LandingModule>
        <GeneralInfoModule></GeneralInfoModule>
        <TimelineModule></TimelineModule>
        <FormatModule></FormatModule>
        <SignUpModule></SignUpModule>
      </main>
  )
}

const IndexWithProviders = () => <LanguageProvider><IndexPage></IndexPage></LanguageProvider>

export default IndexWithProviders


