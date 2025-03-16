import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import JobCard from "./components/job-card";

const ExperienceCard = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">Work Experience</h2>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 items-center">
          <JobCard
            companyName="Estuary Solutions"
            contactEmail="thaiquang@gmail.com"
            contactName="Thai Duc Quang • PM - Tech Lead"
            description="
         Developed and maintained various client projects, including CMS, CRM, LMS, and Admin panels. 
          Focused on business logic optimization, seamless API integrations, and achieving high 
          performance and scalability. Improved user experience by addressing client-specific 
          requirements and implementing advanced Frontend techniques.
        "
            date="10/2024 - Present"
            jobTitle="Junior Front-end Developer"
          />
          <JobCard
            companyName="Estuary Solutions"
            contactEmail="thaiquang@gmail.com"
            contactName="Thai Duc Quang • PM - Tech Lead"
            description="
         Developed and maintained various client projects, including CMS, CRM, LMS, and Admin panels. 
          Focused on business logic optimization, seamless API integrations, and achieving high 
          performance and scalability. Improved user experience by addressing client-specific 
          requirements and implementing advanced Frontend techniques.
        "
            date="10/2024 - Present"
            jobTitle="Junior Front-end Developer"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
