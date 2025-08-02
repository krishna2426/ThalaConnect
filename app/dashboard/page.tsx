"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MapPin,
  Calendar,
  Users,
  Trophy,
  Bell,
  Search,
  Plus,
  Activity,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function DashboardPage() {
  const [userType] = useState("patient") // This would come from auth context

  // Mock data
  const upcomingAppointments = [
    {
      id: 1,
      type: "Blood Transfusion",
      doctor: "Dr. Priya Sharma",
      hospital: "Apollo Hospital",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      type: "Consultation",
      doctor: "Dr. Rajesh Kumar",
      hospital: "Fortis Healthcare",
      date: "2024-01-20",
      time: "2:30 PM",
      status: "pending",
    },
  ]

  const nearbyDonors = [
    {
      id: 1,
      name: "Amit Patel",
      bloodType: "B+",
      distance: "2.3 km",
      lastDonation: "3 months ago",
      rating: 4.8,
      available: true,
    },
    {
      id: 2,
      name: "Sneha Reddy",
      bloodType: "B+",
      distance: "3.1 km",
      lastDonation: "2 months ago",
      rating: 4.9,
      available: true,
    },
    {
      id: 3,
      name: "Vikram Singh",
      bloodType: "B+",
      distance: "4.5 km",
      lastDonation: "4 months ago",
      rating: 4.7,
      available: false,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "donation_request",
      message: "Blood request sent to 5 nearby donors",
      time: "2 hours ago",
      status: "success",
    },
    {
      id: 2,
      type: "appointment",
      message: "Appointment confirmed with Dr. Priya Sharma",
      time: "1 day ago",
      status: "success",
    },
    {
      id: 3,
      type: "education",
      message: 'Completed "Managing Iron Overload" module',
      time: "3 days ago",
      status: "success",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Heart className="h-8 w-8 text-red-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back, Rahul</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge className="ml-2 bg-red-600">3</Badge>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Next Transfusion</p>
                  <p className="text-2xl font-bold text-gray-900">Jan 15</p>
                </div>
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available Donors</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Health Score</p>
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Community Points</p>
                  <p className="text-2xl font-bold text-gray-900">1,250</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency Alert */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-900">Blood Level Alert</h3>
                    <p className="text-red-700">Your hemoglobin level is below normal. Schedule a transfusion soon.</p>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Find Donors</Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Donor Matching */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  AI-Powered Donor Matching
                </CardTitle>
                <CardDescription>Based on your location, blood type (B+), and urgency level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyDonors.map((donor) => (
                    <div key={donor.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {donor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{donor.name}</h4>
                            <Badge variant="outline">{donor.bloodType}</Badge>
                            {donor.available ? (
                              <Badge className="bg-green-100 text-green-800">Available</Badge>
                            ) : (
                              <Badge variant="secondary">Unavailable</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {donor.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {donor.rating}
                            </span>
                            <span>Last donation: {donor.lastDonation}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant={donor.available ? "default" : "secondary"}
                        disabled={!donor.available}
                        className={donor.available ? "bg-red-600 hover:bg-red-700" : ""}
                      >
                        {donor.available ? "Contact" : "Unavailable"}
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Find More Donors
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{appointment.type}</h4>
                          <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {appointment.doctor} • {appointment.hospital}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Health Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Hemoglobin Level</span>
                    <span>8.5 g/dL</span>
                  </div>
                  <Progress value={70} className="h-2" />
                  <p className="text-xs text-gray-600 mt-1">Target: 12+ g/dL</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Iron Levels</span>
                    <span>Normal</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Treatment Adherence</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Educational Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommended Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">Understanding Iron Chelation</h4>
                    <p className="text-xs text-gray-600 mt-1">5 min read • Beginner</p>
                    <Button size="sm" variant="outline" className="mt-2 w-full bg-transparent">
                      Start Learning
                    </Button>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">Nutrition for Thalassemia</h4>
                    <p className="text-xs text-gray-600 mt-1">8 min read • Intermediate</p>
                    <Button size="sm" variant="outline" className="mt-2 w-full bg-transparent">
                      Start Learning
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Heart className="h-4 w-4 mr-2" />
                  Request Blood
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
