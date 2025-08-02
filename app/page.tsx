import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Zap, MapPin, BookOpen, Trophy, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">ThalaConnect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-red-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-red-600 transition-colors">
              How It Works
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-red-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-red-600 hover:bg-red-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">AI-Powered Blood Donation Platform</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connecting <span className="text-red-600">Thalassemia Warriors</span> with Life-Saving Blood Donors
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ThalaConnect uses AI to predict donor availability, streamline care coordination, and provide personalized
            support for Thalassemia patients across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=patient">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                I Need Blood
              </Button>
            </Link>
            <Link href="/register?type=donor">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                I Want to Donate
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">10,000+</div>
              <div className="text-gray-600">Registered Donors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">5,000+</div>
              <div className="text-gray-600">Patients Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Care Platform</h2>
            <p className="text-xl text-gray-600">
              Everything you need for Thalassemia care management in one secure platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>AI Donor Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time AI prediction of donor availability using geolocation and donation history
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Secure Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  DPDPA compliant with encrypted communication and secure profile management
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Personalized Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored educational content based on literacy level and treatment history
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Trophy className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Gamified Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Points, badges, and recognition system to motivate and retain donors</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <MapPin className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Location-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find nearby donors and blood banks with real-time availability updates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Phone className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Telemedicine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure communication and appointment scheduling with healthcare providers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with other patients, share experiences, and build support networks
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Heart className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>FHIR Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamless integration with e-RaktKosh and Blood Bridge for comprehensive coverage
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ThalaConnect Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get the blood support you need</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Register & Verify</h3>
                <p className="text-gray-600 text-lg">
                  Create your secure profile as a patient, donor, or healthcare provider. Complete verification for
                  enhanced trust and safety.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                <p className="text-gray-600 text-lg">
                  Our AI analyzes your location, blood type, and urgency to predict and match you with the most suitable
                  donors in real-time.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect & Coordinate</h3>
                <p className="text-gray-600 text-lg">
                  Securely communicate with donors and healthcare providers. Schedule appointments and coordinate
                  donation logistics seamlessly.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Track & Learn</h3>
                <p className="text-gray-600 text-lg">
                  Monitor your health journey, access personalized educational content, and stay connected with your
                  care team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the ThalaConnect Community Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a movement that's transforming Thalassemia care in India. Every connection saves a life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold">ThalaConnect</span>
              </div>
              <p className="text-gray-400">Empowering Thalassemia patients with AI-driven blood donation solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="hover:text-white transition-colors">
                    Emergency
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-white transition-colors">
                    DPDPA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ThalaConnect by Blood Warriors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
