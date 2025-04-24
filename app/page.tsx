"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Phone, Clock, Cake, Gift, Star, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function BirthdayInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPastEvent: false,
  })

  // Event date
  const eventDate = new Date("June 26, 2025 19:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        // Event has passed
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPastEvent: true,
        })
      } else {
        // Calculate time remaining
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isPastEvent: false,
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Colorful circles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full mix-blend-screen animate-float opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 100}px`,
              height: `${30 + Math.random() * 100}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 80%, 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}

        {/* Confetti */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 15}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 90%, 70%)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content with glassmorphism effect */}
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <motion.div className="space-y-8 md:space-y-12" variants={containerVariants} initial="hidden" animate="visible">
          {/* Header with enhanced typography */}
          <motion.div className="text-center space-y-2" variants={itemVariants}>
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-wide">
                Joshua Matthew&apos;s
              </h1>
              <div className="absolute -top-6 -right-6 text-yellow-300 animate-pulse">
                <Sparkles size={40} />
              </div>
            </div>

            <div className="relative mt-4">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-wider">
                1st Birthday!
              </h2>
              <div className="absolute -top-4 -left-6 text-cyan-300 animate-bounce">
                <Cake size={40} />
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
                Join us for a day filled with joy, laughter, and celebration!
              </p>
              <p className="text-xl md:text-2xl text-yellow-300 font-bold drop-shadow-md">June 26th, 2025</p>
            </div>
          </motion.div>

          {/* Baby Image with styled frame */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full animate-spin-slow opacity-80"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 rounded-full animate-reverse-spin opacity-80"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/30 z-10"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-25%20at%202.45.34%20PM.jpg-TgFqxj276YbElOysS3ZTN4yRcTRIK2.jpeg"
                  alt="Joshua Matthew"
                  fill
                  className="object-cover z-0"
                  priority
                />
              </div>

              {/* Decorative elements around the image */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`star-${i}`}
                  className="absolute z-20"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {i % 2 === 0 ? (
                    <Star className="text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ) : (
                    <Gift className="text-cyan-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Countdown Timer with enhanced styling - Improved for mobile */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2 drop-shadow-md">
                <Clock className="text-yellow-300" />
                Counting Down To The Magical Celebration
              </h3>
            </div>

            {timeLeft.isPastEvent ? (
              <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/30">
                <h3 className="text-3xl font-bold text-white">Today is the day!</h3>
                <p className="text-xl text-white/90 mt-2">We can&apos;t wait to celebrate with you!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 text-center">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <Card
                    key={item.label}
                    className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                    <CardContent className="p-3 sm:p-6 relative z-10">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                        {item.value}
                      </div>
                      <div className="text-white/90 font-medium mt-1 sm:mt-2 text-sm sm:text-base">{item.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>

          {/* Event Details with enhanced styling */}
          <motion.div className="grid md:grid-cols-2 gap-6 md:gap-8" variants={itemVariants}>
            <Card className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:opacity-80 transition-opacity"></div>
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Calendar className="text-yellow-300 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Date & Time</h3>
                    <p className="text-white/90 mt-1 text-base sm:text-lg">June 26th, 2025 at 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 group-hover:opacity-80 transition-opacity"></div>
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="text-cyan-300 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Venue</h3>
                    <p className="text-white/90 mt-1 text-base sm:text-lg">The Vijay Park</p>
                    <p className="text-white/90 text-base sm:text-lg">
                      J N Salai 12, 100 Feet Rd, Annai Sathya Nagar, Arumbakkam, Chennai, Tamil Nadu 600106
                    </p>
                    <Link
                      href="https://maps.app.goo.gl/TL4M9t5iSj62iWddA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 sm:mt-3 text-yellow-300 hover:text-yellow-100 font-medium transition-colors"
                    >
                      View on Map
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info with enhanced styling */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 group-hover:opacity-80 transition-opacity"></div>
              <CardContent className="p-4 sm:p-6 relative z-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="text-pink-300 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">For More Details</h3>
                    <p className="text-white/90 mt-1 text-base sm:text-lg">
                      Contact John Francis at{" "}
                      <a
                        href="tel:+917010749186"
                        className="text-yellow-300 hover:text-yellow-100 font-medium transition-colors"
                      >
                        +91 7010749186
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer - Updated text */}
          <motion.div
            className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <p className="text-white/80">With love, from the Joshua&apos;s family ❤️</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
