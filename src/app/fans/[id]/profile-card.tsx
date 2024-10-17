import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FanProfileCard(){
    return(
        <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-6 items-center">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="/avatars/anastasia-avatar.png"
                alt="Profile"
                className="rounded-full w-44 h-44 object-cover"
              />
              <Badge className="absolute bottom-0 left-0 right-0 w-fit mx-auto bg-blue-light text-blue-dark font-medium gap-1 text-sm py-2 hover:bg-blue-light rounded-[128px] px-4">
                <Icons.verified className="w-4 h-4 mr-1" /> Active
              </Badge>
            </div>

            {/* Profile Info */}
            <div className="flex-grow space-y-2 lg:ml-8">
              <h2 className="text-2xl font-medium">Natasha Malik</h2>
              <p className="text-gray-600 text-medium">+1(233) 232-9538</p>
              <p className="text-gray-600 text-medium">natasha.malik@gmail.com</p>
              <Button variant="destructive" size="xs" className="pl-0">Suspend</Button>
            </div>

            {/* Video Calls */}
            <div className="text-center px-6 py-6 bg-background rounded-lg min-w-[202px]">
              <div className="space-y-2">
                <p className="text-4xl font-normal lg:text-[3.375rem] text-left">12</p>
                <p className="text-gray-medium text-left font-bold">video calls</p>
              </div>
            </div>

            {/* Total Earnings */}
            <div className="text-center px-6 py-6 bg-background rounded-lg min-w-[202px]">
              <div className="space-y-2">
                <p className="text-4xl font-normal lg:text-[3.375rem] text-left">$250K</p>
                <p className="text-gray-medium text-left font-bold">total spent</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
}