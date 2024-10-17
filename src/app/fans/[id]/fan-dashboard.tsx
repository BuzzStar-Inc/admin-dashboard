"use client";
import React, { useEffect } from "react";
import { generateCreatorData } from "@/constants";
import { DataTable } from "@/app/dashboard/data-table";
import ProfileCard from "./profile-card";
import { Buzz } from "./types";
import { pastBuzzColumns } from "./columns";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TableLoadingSkeleton } from "@/components/table/data-loading-skeleton";

export default function ProfileView() {
  const [data, setData] = React.useState<Buzz[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const result = generateCreatorData(50);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading)
    return (
      <div className="container mx-auto p-4 space-y-6">
        <Breadcrumb previousPageName="Fans" previousPageUrl="/fans" />

        <TableLoadingSkeleton />
      </div>
    );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div>
        <Breadcrumb previousPageName="Fans" previousPageUrl="/fans" />

        <ProfileCard />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Past Buzzes</h2>

        <DataTable columns={pastBuzzColumns} data={data} />
      </div>
    </div>
  );
}
