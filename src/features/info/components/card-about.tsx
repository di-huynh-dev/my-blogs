import { BorderBeam } from '@/components/magicui/border-beam'
import { IconCloudDemo } from '@/components/magicui/tech-earth'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { LanguagesIcon, MarsIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CardAboutMe = () => {
  return (
    <Card className="relative">
      <BorderBeam duration={8} size={200} />
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">About Me</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <LanguagesIcon />:
              <Image src="/vietnam.png" alt="vietnam" width={30} height={40} />
              <Image src="/english.png" alt="english" width={30} height={40} />
            </div>
            <div className="flex items-center">
              <MarsIcon />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-7 indent-8">
          "Hello World!". I'm Di Huynh, a ReactJS Developer from Ho Chi Minh
          City, Vietnam.
        </p>
        <p className="leading-7 indent-8">
          During my time at university, I had the opportunity to intern and work
          on my graduate dissertation, where I explored various technologies. My
          journey began with ReactJS for front-end development, and through
          hands-on projects, I expanded my skills with technologies like NestJS,
          Node.js, and AWS.
        </p>
        <p className="leading-7 indent-8">
          Now, with a year of industry experience, I have honed my expertise in
          building modern, scalable web applications using React, Next.js, and
          related front-end technologies. My goal is to continuously improve,
          stay updated with the latest tech trends, and eventually grow into a
          well-rounded software engineer. I'm always eager to learn and take on
          new challenges that push me forward.
        </p>
      </CardContent>
    </Card>
  )
}

export default CardAboutMe
