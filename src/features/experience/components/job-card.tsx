"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, ExternalLink } from "lucide-react";

interface JobProps {
  jobTitle: string;
  companyName: string;
  date: string;
  description: string;
  contactName?: string;
  contactEmail?: string;
  companyLogo: string;
  site: string;
  techStack: string[];
}
export default function JobCard({
  jobTitle,
  companyName,
  companyLogo,
  date,
  site,
  description,
  contactName,
  contactEmail,
  techStack
}: JobProps) {
  return (
    <Card className="border border-gray-200 shadow-md rounded-xl my-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <img src={companyLogo} alt="Estuary Logo" className="w-10 h-10" />
          <div>
            <CardTitle className="text-lg">{jobTitle}</CardTitle>
            <CardDescription className="text-gray-600 text-sm">
              {companyName}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <p className="text-sm ">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button variant="link" className="mt-2 text-blue-600" asChild>
          <a href={site} target="_blank">
            Visit Company Site <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </Button>
        <div className="border-t pt-3 mt-3 text-sm">
          <p className="font-medium">{contactName}</p>
          <div className="flex items-center text-gray-500">
            <Mail className="w-4 h-4 mr-1" />
            <a
              href="mailto:thaiquang@estuary.solutions"
              className="text-blue-600"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
