'use client';

import React, { useState, useEffect } from 'react';
import { format, subMonths, subYears, isBefore, isAfter } from 'date-fns';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { DataTable } from '@/app/dashboard/data-table';
import { StatCard } from '@/app/dashboard/stat-card';
import {
  TimeRange,
  Creator,
  TopCreator,
  Stat as StatCardType
} from '@/app/dashboard/types';
import { creatorColumns, topCreatorColumns } from '@/app/dashboard/columns';
import { generateRandomData } from '@/constants';
import { LoadingSkeleton } from '@/app/dashboard/loading-skeleton';

export default function StatisticsDashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>('all');
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(),
    to: new Date()
  });
  const [stats, setStats] = useState<StatCardType[]>([]);
  const [creatorApplications, setCreatorApplications] = useState<Creator[]>([]);
  const [topCreators, setTopCreators] = useState<TopCreator[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let startDate: Date;
      let endDate = new Date();

      switch (timeRange) {
        case 'month':
          startDate = subMonths(endDate, 1);
          break;
        case 'year':
          startDate = subYears(endDate, 1);
          break;
        case 'custom':
          startDate = dateRange.from;
          endDate = dateRange.to || endDate;
          break;
        default: // 'all'
          startDate = new Date(0); // Beginning of time
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const [newStats, newCreators, newTopCreators] = generateRandomData(
        24,
        startDate,
        endDate
      );
      setStats(newStats);
      setCreatorApplications(
        newCreators.filter(
          (c) => isAfter(c.date, startDate) && isBefore(c.date, endDate)
        )
      );
      setTopCreators(
        newTopCreators.filter(
          (c) => isAfter(c.date, startDate) && isBefore(c.date, endDate)
        )
      );
      setIsLoading(false);
    };

    fetchData();
  }, [timeRange, dateRange]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold  mb-6">Dashboard</h2>

      <div className="flex space-x-2 mb-4">
        <Button
          className="border-none"
          size="lg"
          variant={timeRange === 'all' ? 'secondary' : 'outline'}
          onClick={() => setTimeRange('all')}
        >
          All Time
        </Button>
        <Button
          className="border-none"
          size="lg"
          variant={timeRange === 'month' ? 'secondary' : 'outline'}
          onClick={() => setTimeRange('month')}
        >
          This Month
        </Button>
        <Button
          className="border-none"
          size="lg"
          variant={timeRange === 'year' ? 'secondary' : 'outline'}
          onClick={() => setTimeRange('year')}
        >
          This Year
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="lg"
              className="border-none"
              variant={timeRange === 'custom' ? 'default' : 'outline'}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {timeRange === 'custom'
                ? `${format(dateRange.from, 'LLL dd, y')} - ${
                    dateRange.to ? format(dateRange.to, 'LLL dd, y') : ''
                  }`
                : 'Custom'}
              <ChevronDown className="ml-2 h-auto w-4 mt-1" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={(newDateRange) => {
                if (newDateRange?.from && newDateRange?.to) {
                  setDateRange({
                    from: newDateRange.from,
                    to: newDateRange.to
                  });
                  setTimeRange('custom');
                }
              }}
              numberOfMonths={2}
              disabled={(date) => date > new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 py-5">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          <div className="grid 2xl:grid-cols-2 2xl:gap-6">
            <Card className="bg-background border-none shadow-none ">
              <CardHeader className="px-0 pt-5">
                <CardTitle className="text-[1.5rem] font-extrabold">
                  Creator Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <DataTable
                  columns={creatorColumns}
                  data={creatorApplications}
                />
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-none">
              <CardHeader className="px-0 pt-5">
                <CardTitle className="text-[1.5rem] font-extrabold">
                  Top Creators
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <DataTable columns={topCreatorColumns} data={topCreators} />
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
