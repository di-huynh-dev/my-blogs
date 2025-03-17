import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import JobCard from './components/job-card';

const ExperienceCard = () => {
  return (
    <Card className='mt-4'>
      <CardHeader>
        <h2 className="text-lg font-semibold">Work Experience</h2>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 items-center gap-4">
          <JobCard
            companyName="Estuary Solutions"
            companyLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVe2Ba2ZpoMYObVGK_9i8mL3A0EQ5Jh2bPw&s"
            site = "https://estuary.solutions/vi"
            contactEmail="thaiquang@gmail.com"
            contactName="Thai Duc Quang • PM - Tech Lead"
            description="
         Developed and maintained various client projects, including CMS, CRM, LMS, and Admin panels. 
          Focused on business logic optimization, seamless API integrations, and achieving high 
          performance and scalability. Improved user experience by addressing client-specific 
          requirements and implementing advanced Frontend techniques.
        "
            date="Oct 2024- Present"
            jobTitle="Junior Front-end Developer"
            techStack={[ 'ReactJS', 'NextJS', 'TailwindCSS', 'AntD','Zustand','Tanstack Query' ]}
          />
          <JobCard
            companyName="AMIT Group"
            companyLogo="https://media.licdn.com/dms/image/v2/C560BAQHAUsW-ER-1qw/company-logo_200_200/company-logo_200_200/0/1677122899980/amit_group_logo?e=2147483647&v=beta&t=Rqo0fY8yfhOBPlg5OqPcBANM4aNJ5M1sDtDXQcsL7us"
            description="
        Executing assigned tasks related to designing web interfaces for landing pages and admin panels using ReactJS, NextJS. Collaborate with team members and assist fellow developers to execute frontend tasks with precision and meet timelines.  Improved user experience and optimized performance by implementing advanced frontend techniques.
        "
        site = "https://amitgroup.vn"
            date="Oct 2023 - Jan 2024 (4 mos)"
            jobTitle="Intern, Fresher Front-end Developer"
            contactEmail="amitgrop@gmail.com"
            contactName= "AMIT Group • HR"
            techStack={[ 'ReactJS', 'NextJS', 'TailwindCSS','AntD' ]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
