import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import React from 'react'

const EducationCard = () => {
  return (
    <section id="education">
      <Card className="mt-4">
        <CardHeader>
          <h2 className="text-lg font-semibold">Education</h2>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png/800px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_S%C6%B0_Ph%E1%BA%A1m_K%E1%BB%B9_Thu%E1%BA%ADt_TP_H%E1%BB%93_Ch%C3%AD_Minh.png"
              alt="HCMUTE Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <CardTitle className="text-lg">
                HCMC University of Technology and Education{' '}
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm">
                <p> Bachelor of Engineering in Information Technology</p>
                <p>2020-2024</p>
                <p>GPA: 3.4/4</p>
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default EducationCard
