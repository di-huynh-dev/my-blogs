import DownloadResume from '@/components/download-resume'
import HeroText from '@/components/hero-text'
import SocialLinks from '@/components/social-links'
import { Card, CardContent } from '@/components/ui/card'
import TextMotion from '@/components/ui/text-motion'
import { portfolioConfig } from '@/config/config'
import React from 'react'

const CardInfo = () => {
  return (
    <Card>
      <CardContent>
        <HeroText />
        <TextMotion text={portfolioConfig.description} />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownloadResume />
      </CardContent>
    </Card>
  )
}

export default CardInfo
