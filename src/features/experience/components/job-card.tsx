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
  contactName: string;
  contactEmail: string;
}
export default function JobCard({
  jobTitle,
  companyName,
  date,
  description,
  contactName,
  contactEmail,
}: JobProps) {
  return (
    <Card className="max-w-lg border border-gray-200 shadow-md rounded-xl my-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVe2Ba2ZpoMYObVGK_9i8mL3A0EQ5Jh2bPw&s"
            alt="Estuary Logo"
            className="w-6 h-6"
          />
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
        <p className=" text-sm">{description}</p>
        <Button variant="link" className="mt-2 text-blue-600" asChild>
          <a href="https://estuary.com" target="_blank">
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
