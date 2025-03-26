import DownloadResume from '@/components/download-resume'
import HeroText from '@/components/hero-text'
import { BorderBeam } from '@/components/magicui/border-beam'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import SocialLinks from '@/components/social-links'
import { Card, CardContent } from '@/components/ui/card'
import { portfolioConfig } from '@/config/config'

const CardInfo = () => {
  return (
    <Card className="relative overflow-hidden">
      <CardContent>
        <HeroText />
        <TypingAnimation
          className="inline-block text-2xl font-bold text-blue-500"
          style={{
            fontSize: '24px',
            marginRight: '4px',
            backgroundImage: 'linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {portfolioConfig.subTitle}
        </TypingAnimation>
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownloadResume />
      </CardContent>
      <BorderBeam duration={8} size={200} />
    </Card>
  )
}

export default CardInfo
