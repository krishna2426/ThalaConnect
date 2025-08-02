"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Play, Clock, Star, Search, Award, CheckCircle, Lock, Users, Download, Heart } from "lucide-react"

export default function EducationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")

  // Mock education data
  const courses = [
    {
      id: 1,
      title: "Understanding Thalassemia: The Basics",
      description: "Learn about the fundamentals of Thalassemia, its types, and how it affects your body.",
      category: "basics",
      level: "beginner",
      duration: "15 min",
      rating: 4.8,
      enrolled: 1250,
      completed: false,
      progress: 0,
      modules: 4,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Essential", "New Patient"],
      locked: false,
    },
    {
      id: 2,
      title: "Iron Chelation Therapy Explained",
      description: "Comprehensive guide to iron chelation therapy, medications, and managing side effects.",
      category: "treatment",
      level: "intermediate",
      duration: "25 min",
      rating: 4.9,
      enrolled: 890,
      completed: false,
      progress: 60,
      modules: 6,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Treatment", "Medication"],
      locked: false,
    },
    {
      id: 3,
      title: "Nutrition and Diet for Thalassemia Patients",
      description: "Learn about proper nutrition, foods to avoid, and meal planning for optimal health.",
      category: "lifestyle",
      level: "beginner",
      duration: "20 min",
      rating: 4.7,
      enrolled: 1100,
      completed: true,
      progress: 100,
      modules: 5,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Nutrition", "Lifestyle"],
      locked: false,
    },
    {
      id: 4,
      title: "Managing Blood Transfusions",
      description: "Everything you need to know about blood transfusions, preparation, and aftercare.",
      category: "treatment",
      level: "intermediate",
      duration: "30 min",
      rating: 4.8,
      enrolled: 750,
      completed: false,
      progress: 0,
      modules: 7,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Transfusion", "Medical"],
      locked: false,
    },
    {
      id: 5,
      title: "Advanced Genetic Counseling",
      description: "Understanding genetics, inheritance patterns, and family planning considerations.",
      category: "genetics",
      level: "advanced",
      duration: "45 min",
      rating: 4.6,
      enrolled: 320,
      completed: false,
      progress: 0,
      modules: 8,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Genetics", "Family Planning"],
      locked: true,
    },
    {
      id: 6,
      title: "Living with Thalassemia: Patient Stories",
      description: "Inspiring stories and practical tips from other Thalassemia patients and families.",
      category: "support",
      level: "beginner",
      duration: "35 min",
      rating: 4.9,
      enrolled: 1500,
      completed: false,
      progress: 25,
      modules: 6,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Stories", "Inspiration"],
      locked: false,
    },
  ]

  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first course", earned: true },
    { id: 2, title: "Knowledge Seeker", description: "Complete 3 courses", earned: true },
    { id: 3, title: "Expert Learner", description: "Complete 5 courses", earned: false },
    { id: 4, title: "Community Helper", description: "Share knowledge with others", earned: false },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter
    const matchesLevel = levelFilter === "all" || course.level === levelFilter

    return matchesSearch && matchesCategory && matchesLevel
  })

  const completedCourses = courses.filter((course) => course.completed).length
  const totalProgress = courses.reduce((sum, course) => sum + course.progress, 0) / courses.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Education Center</h1>
              <p className="text-gray-600 mt-1">Personalized learning for better Thalassemia management</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-100 text-blue-800">
                {completedCourses}/{courses.length} Completed
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Learning Progress</h3>
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{Math.round(totalProgress)}%</span>
                </div>
                <Progress value={totalProgress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Achievements</h3>
                <Award className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {achievements.filter((a) => a.earned).length}/{achievements.length}
              </div>
              <p className="text-sm text-gray-600">Badges earned</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Study Time</h3>
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2.5 hrs</div>
              <p className="text-sm text-gray-600">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Learning Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="basics">Basics</SelectItem>
                  <SelectItem value="treatment">Treatment</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="genetics">Genetics</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Course */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-2">Recommended for You</h3>
                <p className="text-blue-800 mb-3">
                  Based on your profile and recent transfusion, we recommend starting with
                  <strong> "Iron Chelation Therapy Explained"</strong> to better understand your treatment options.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Start Learning</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {course.locked && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg flex items-center justify-center">
                    <Lock className="h-8 w-8 text-white" />
                  </div>
                )}
                {course.completed && (
                  <div className="absolute top-2 right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {course.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.enrolled}
                  </span>
                </div>

                {course.progress > 0 && !course.completed && (
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    className={`flex-1 ${course.locked ? "" : "bg-blue-600 hover:bg-blue-700"}`}
                    variant={course.locked ? "secondary" : "default"}
                    disabled={course.locked}
                  >
                    {course.locked ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Locked
                      </>
                    ) : course.completed ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Review
                      </>
                    ) : course.progress > 0 ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Your Achievements
            </CardTitle>
            <CardDescription>Earn badges as you progress through your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 border rounded-lg text-center ${
                    achievement.earned ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      achievement.earned ? "bg-yellow-600" : "bg-gray-400"
                    }`}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className={`font-medium mb-1 ${achievement.earned ? "text-yellow-900" : "text-gray-600"}`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${achievement.earned ? "text-yellow-800" : "text-gray-500"}`}>
                    {achievement.description}
                  </p>
                  {achievement.earned && <Badge className="mt-2 bg-yellow-100 text-yellow-800">Earned</Badge>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
