import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Instagram, Code, Wrench, Award, Users, FileText, Download } from "lucide-react"

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12">
        <div className="text-white font-bold text-2xl">HN.</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-purple-300 transition-colors">
            About
          </a>
          <a href="#projects" className="text-white hover:text-purple-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-purple-300 transition-colors">
            Contact
          </a>
          <a href="#resume" className="text-white hover:text-purple-300 transition-colors">
            Resume
          </a>
          <a href="#contact-info" className="text-white hover:text-purple-300 transition-colors">
            Contact Info
          </a>
        </div>

        <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full">Hire me</Button>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[80vh] px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hello,
                <br />
                I'm Henry,
                <br />
                <span className="text-purple-300">AI Engineer</span>
              </h1>
              <p className="text-xl text-purple-200 leading-relaxed">
                Taekwondo National Champion, Full-Stack Developer, XR Trailblazer
              </p>
              <p className="text-lg text-purple-100 leading-relaxed max-w-lg">
                I have a passion for learning and am always looking for ways to improve.
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">About me</Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="3D Avatar"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-purple-100 text-lg leading-relaxed">
            I am someone who is well-rounded and passionate. I learned how to code for a modding project called Perfect
            Storm, which got over 5 million views internationally on YouTube. I started my studies at UCI in 2021, and
            have continued to grow my Computer Science skills since. I graduated in June 2025 with a Bachelors Degree in
            Software Engineering and am interning with Pixel Canvas and MIXR Studios, pushing the boundaries of XR. I am
            seeking full-time employment as a software engineer with experience in cloud deployment/management and
            AI/ML.
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Programming Languages</h3>
                <p className="text-purple-200 text-sm">
                  Python, C, C++, x86 Assembly, Java, JavaScript, TypeScript, CSS, HTML, SQL
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Tools/Frameworks</h3>
                <p className="text-purple-200 text-sm">
                  OpenRouter.ai, Deepseek API, Git, Docker, AWS, GCP, DigitalOcean, React, Svelte, MySQL, MongoDB
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Certifications</h3>
                <p className="text-purple-200 text-sm">In Progress...</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Activities</h3>
                <p className="text-purple-200 text-sm">Taekwondo National Champion, UCI Jazz Band</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Work Experience</h2>
          <div className="space-y-6">
            {/* Pixel Canvas */}
            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-xl">XR Developer Intern</h3>
                    <p className="text-purple-300">Pixel Canvas</p>
                  </div>
                  <span className="text-purple-200 text-sm">2024 - Present</span>
                </div>
                <ul className="text-purple-100 space-y-2 list-disc list-inside">
                  <li>Developing cutting-edge XR applications and experiences</li>
                  <li>Working with Unity and AR/VR frameworks</li>
                  <li>Collaborating on immersive technology solutions</li>
                </ul>
              </CardContent>
            </Card>

            {/* MIXR Studios */}
            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-xl">Software Engineering Intern</h3>
                    <p className="text-purple-300">MIXR Studios</p>
                  </div>
                  <span className="text-purple-200 text-sm">2024 - Present</span>
                </div>
                <ul className="text-purple-100 space-y-2 list-disc list-inside">
                  <li>Pushing the boundaries of XR technology</li>
                  <li>Full-stack development for immersive applications</li>
                  <li>AI/ML integration in XR environments</li>
                </ul>
              </CardContent>
            </Card>

            {/* POW Webmaster */}
            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-xl">Webmaster</h3>
                    <p className="text-purple-300">POW</p>
                  </div>
                  <span className="text-purple-200 text-sm">2023 - 2024</span>
                </div>
                <ul className="text-purple-100 space-y-2 list-disc list-inside">
                  <li>Maintained and developed web applications</li>
                  <li>Managed cloud infrastructure and deployments</li>
                  <li>Implemented responsive design and user experience improvements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-purple-800/50 border-purple-700 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Makapo</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Makapo</h3>
                <p className="text-purple-200 text-sm">AI-powered accessibility application</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">TMGE</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">TMGE</h3>
                <p className="text-purple-200 text-sm">Advanced game engine development</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Eyewi</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Eyewi</h3>
                <p className="text-purple-200 text-sm">Computer vision and AI application</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Perfect Storm</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Perfect Storm</h3>
                <p className="text-purple-200 text-sm">5M+ views modding project on YouTube</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume & Cover Letter Section */}
      <section id="resume" className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Resume + Cover Letter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-xl mb-4">Resume</h3>
                <p className="text-purple-200 mb-6">
                  Download my latest resume with detailed work experience and skills
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-700">
              <CardContent className="p-8 text-center">
                <Mail className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-xl mb-4">Cover Letter</h3>
                <p className="text-purple-200 mb-6">
                  Personalized cover letter highlighting my passion and qualifications
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Cover Letter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Contact Me</h2>
          <Card className="bg-purple-800/50 border-purple-700">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm mb-2 block">First Name</label>
                    <Input className="bg-purple-700/50 border-purple-600 text-white placeholder:text-purple-300" />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">Last Name</label>
                    <Input className="bg-purple-700/50 border-purple-600 text-white placeholder:text-purple-300" />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    className="bg-purple-700/50 border-purple-600 text-white placeholder:text-purple-300"
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Message</label>
                  <Textarea className="bg-purple-700/50 border-purple-600 text-white placeholder:text-purple-300 min-h-[120px]" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Send Message</Button>
              </form>

              <div className="flex justify-center space-x-4 mt-8">
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-300 hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-300 hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-300 hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-purple-300 hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-purple-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-300">© 2024 Henry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
