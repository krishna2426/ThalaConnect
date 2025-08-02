"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  MessageCircle,
  ThumbsUp,
  Share2,
  Plus,
  Search,
  Users,
  Calendar,
  MapPin,
  Trophy,
  Clock,
  Pin,
} from "lucide-react"

export default function CommunityPage() {
  const [newPost, setNewPost] = useState("")

  // Mock community data
  const posts = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder-user.jpg",
        badge: "Thalassemia Warrior",
        verified: true,
      },
      content:
        "Just completed my 50th blood transfusion today! Feeling grateful for all the amazing donors who make this possible. Remember, every donation saves a life. 💪❤️",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["milestone", "gratitude"],
      pinned: true,
    },
    {
      id: 2,
      author: {
        name: "Dr. Rajesh Kumar",
        avatar: "/placeholder-user.jpg",
        badge: "Healthcare Provider",
        verified: true,
      },
      content:
        "New research shows promising results for gene therapy in Thalassemia treatment. While still in trials, this could be a game-changer for future patients. What are your thoughts on emerging treatments?",
      timestamp: "5 hours ago",
      likes: 18,
      comments: 12,
      shares: 7,
      tags: ["research", "gene-therapy"],
      pinned: false,
    },
    {
      id: 3,
      author: {
        name: "Amit Patel",
        avatar: "/placeholder-user.jpg",
        badge: "Regular Donor",
        verified: false,
      },
      content:
        "Donated blood for the 15th time today at Apollo Hospital. The process was smooth and the staff was incredibly caring. If you're thinking about donating, please do it - you'll be someone's hero! 🩸",
      timestamp: "1 day ago",
      likes: 31,
      comments: 6,
      shares: 9,
      tags: ["donation", "inspiration"],
      pinned: false,
    },
    {
      id: 4,
      author: {
        name: "Sneha Reddy",
        avatar: "/placeholder-user.jpg",
        badge: "Patient Advocate",
        verified: true,
      },
      content:
        "Sharing some tips for managing iron chelation therapy side effects: 1) Take medication with food, 2) Stay hydrated, 3) Monitor for any unusual symptoms. What works for you?",
      timestamp: "2 days ago",
      likes: 42,
      comments: 15,
      shares: 12,
      tags: ["tips", "chelation"],
      pinned: false,
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Thalassemia Awareness Walk",
      date: "Jan 20, 2024",
      time: "9:00 AM",
      location: "Marine Drive, Mumbai",
      attendees: 156,
      type: "awareness",
    },
    {
      id: 2,
      title: "Blood Donation Camp",
      date: "Jan 25, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Apollo Hospital, Bangalore",
      attendees: 89,
      type: "donation",
    },
    {
      id: 3,
      title: "Patient Support Group Meeting",
      date: "Feb 1, 2024",
      time: "6:00 PM",
      location: "Online (Zoom)",
      attendees: 45,
      type: "support",
    },
  ]

  const topContributors = [
    { name: "Priya Sharma", posts: 23, likes: 456, badge: "Community Leader" },
    { name: "Dr. Rajesh Kumar", posts: 18, likes: 389, badge: "Medical Expert" },
    { name: "Sneha Reddy", posts: 15, likes: 298, badge: "Patient Advocate" },
    { name: "Amit Patel", posts: 12, likes: 234, badge: "Donor Champion" },
  ]

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      // Handle post submission
      console.log("New post:", newPost)
      setNewPost("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Community</h1>
              <p className="text-gray-600 mt-1">Connect, share, and support each other</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-100 text-blue-800">2,450 Active Members</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Share with the Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <Textarea
                      placeholder="Share your experience, ask questions, or offer support..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          #support
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          #tips
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          #gratitude
                        </Badge>
                      </div>
                      <Button
                        onClick={handlePostSubmit}
                        disabled={!newPost.trim()}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className={post.pinned ? "border-blue-200 bg-blue-50" : ""}>
                  <CardContent className="p-6">
                    {post.pinned && (
                      <div className="flex items-center gap-2 mb-4 text-blue-800">
                        <Pin className="h-4 w-4" />
                        <span className="text-sm font-medium">Pinned Post</span>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{post.author.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {post.author.badge}
                          </Badge>
                          {post.author.verified && (
                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                              <Heart className="h-2 w-2 text-white" />
                            </div>
                          )}
                          <span className="text-sm text-gray-500">• {post.timestamp}</span>
                        </div>

                        <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 text-gray-600">
                          <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search community..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees} attending
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                      Join Event
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-yellow-800">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{contributor.name}</div>
                      <div className="text-xs text-gray-600">
                        {contributor.posts} posts • {contributor.likes} likes
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <p>• Be respectful and supportive</p>
                <p>• Share accurate medical information</p>
                <p>• Protect privacy and confidentiality</p>
                <p>• Report inappropriate content</p>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  Read Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
