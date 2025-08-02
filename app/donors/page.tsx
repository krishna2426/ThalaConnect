"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Search, Heart, Clock, Phone, MessageCircle, Trophy, Shield } from "lucide-react"

export default function DonorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [bloodTypeFilter, setBloodTypeFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")

  // Mock donor data
  const donors = [
    {
      id: 1,
      name: "Amit Patel",
      bloodType: "B+",
      location: "Andheri, Mumbai",
      distance: "2.3 km",
      rating: 4.8,
      totalDonations: 15,
      lastDonation: "3 months ago",
      available: true,
      verified: true,
      responseTime: "< 2 hours",
      badges: ["Regular Donor", "Life Saver"],
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Sneha Reddy",
      bloodType: "B+",
      location: "Bandra, Mumbai",
      distance: "3.1 km",
      rating: 4.9,
      totalDonations: 22,
      lastDonation: "2 months ago",
      available: true,
      verified: true,
      responseTime: "< 1 hour",
      badges: ["Champion Donor", "Community Hero"],
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Vikram Singh",
      bloodType: "B+",
      location: "Powai, Mumbai",
      distance: "4.5 km",
      rating: 4.7,
      totalDonations: 8,
      lastDonation: "4 months ago",
      available: false,
      verified: true,
      responseTime: "< 3 hours",
      badges: ["Reliable Donor"],
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Priya Sharma",
      bloodType: "O+",
      location: "Juhu, Mumbai",
      distance: "5.2 km",
      rating: 4.6,
      totalDonations: 12,
      lastDonation: "1 month ago",
      available: true,
      verified: true,
      responseTime: "< 2 hours",
      badges: ["Regular Donor"],
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      bloodType: "A+",
      location: "Malad, Mumbai",
      distance: "6.8 km",
      rating: 4.5,
      totalDonations: 18,
      lastDonation: "2 months ago",
      available: true,
      verified: false,
      responseTime: "< 4 hours",
      badges: ["Dedicated Donor"],
      avatar: "/placeholder-user.jpg",
    },
  ]

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesBloodType = bloodTypeFilter === "all" || donor.bloodType === bloodTypeFilter
    const matchesLocation = locationFilter === "all" || donor.location.includes(locationFilter)
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && donor.available) ||
      (availabilityFilter === "unavailable" && !donor.available)

    return matchesSearch && matchesBloodType && matchesLocation && matchesAvailability
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Find Blood Donors</h1>
              <p className="text-gray-600 mt-1">Connect with verified donors in your area</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-800">
                {filteredDonors.filter((d) => d.available).length} Available Now
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Donors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={bloodTypeFilter} onValueChange={setBloodTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Blood Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Blood Types</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Andheri">Andheri</SelectItem>
                  <SelectItem value="Bandra">Bandra</SelectItem>
                  <SelectItem value="Powai">Powai</SelectItem>
                  <SelectItem value="Juhu">Juhu</SelectItem>
                  <SelectItem value="Malad">Malad</SelectItem>
                </SelectContent>
              </Select>

              <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Donors</SelectItem>
                  <SelectItem value="available">Available Now</SelectItem>
                  <SelectItem value="unavailable">Unavailable</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-2">AI Recommendation</h3>
                <p className="text-blue-800 mb-3">
                  Based on your blood type (B+), location, and urgency level, we recommend contacting
                  <strong> Sneha Reddy</strong> first. She has the highest compatibility score and fastest response
                  time.
                </p>
                <div className="flex gap-2">
                  <Badge className="bg-blue-100 text-blue-800">98% Match</Badge>
                  <Badge className="bg-green-100 text-green-800">Available Now</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Fast Response</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donors List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDonors.map((donor) => (
            <Card
              key={donor.id}
              className={`${donor.available ? "border-green-200" : "border-gray-200"} hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={donor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {donor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {donor.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <Shield className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{donor.name}</h3>
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          {donor.bloodType}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {donor.location} • {donor.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {donor.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {donor.available ? (
                      <Badge className="bg-green-100 text-green-800 mb-2">Available</Badge>
                    ) : (
                      <Badge variant="secondary" className="mb-2">
                        Unavailable
                      </Badge>
                    )}
                    <div className="text-sm text-gray-600">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {donor.responseTime}
                    </div>
                  </div>
                </div>

                {/* Donor Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{donor.totalDonations}</div>
                    <div className="text-xs text-gray-600">Total Donations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{donor.lastDonation}</div>
                    <div className="text-xs text-gray-600">Last Donation</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {donor.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Trophy className="h-3 w-3 mr-1" />
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    className={`flex-1 ${donor.available ? "bg-red-600 hover:bg-red-700" : ""}`}
                    variant={donor.available ? "default" : "secondary"}
                    disabled={!donor.available}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {donor.available ? "Contact Now" : "Unavailable"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>

                {/* Compatibility Score for AI recommendations */}
                {donor.id === 2 && (
                  <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-800 font-medium">AI Compatibility Score</span>
                      <span className="text-blue-900 font-bold">98%</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDonors.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No donors found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or expanding your search radius.</p>
              <Button variant="outline">Expand Search Area</Button>
            </CardContent>
          </Card>
        )}

        {/* Emergency Contact */}
        <Card className="mt-8 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Blood Requirement?</h3>
              <p className="text-red-800 mb-4">
                If you need immediate blood assistance, contact our 24/7 emergency helpline
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency: 1800-123-BLOOD
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  Send SOS Alert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
