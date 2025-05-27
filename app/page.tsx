"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Phone, Clock, Cake, Gift, Star, Sparkles, Heart, PartyPopper } from "lucide-react"
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

  // Event date - updated to 6:30 PM
  const eventDate = new Date("June 26, 2025 18:30:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPastEvent: true,
        })
      } else {
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
  }, [eventDate])

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Colorful circles */}
        {Array.from({ length: 20 }, (_, i) => (
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
        {Array.from({ length: 60 }, (_, i) => (
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

        {/* Balloons */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`balloon-${i}`}
            className="absolute animate-float-balloon"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-20%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          >
            <div
              className="w-16 h-20 rounded-full relative"
              style={{
                backgroundColor: `hsl(${Math.random() * 360}, 90%, 65%)`,
                boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.1), inset 5px 5px 10px rgba(255,255,255,0.2)",
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-white/30"></div>
            </div>
          </div>
        ))}

        {/* Sparkles */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${1 + Math.random() * 3}s`,
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
              <div
                className="absolute -bottom-4 -right-6 text-pink-300 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <PartyPopper size={40} />
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0205.JPG-21dHWbGnQVi2QzAQVehqDDlMyPQQ3q.jpeg"
                  alt="Joshua Matthew"
                  fill
                  className="object-cover object-center z-0"
                  priority
                  style={{
                    objectPosition: "center 20%",
                  }}
                />
              </div>

              {/* Decorative elements around the image */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={`star-${i}`}
                  className="absolute z-20"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {i % 3 === 0 ? (
                    <Star className="text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ) : i % 3 === 1 ? (
                    <Gift className="text-cyan-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ) : (
                    <Heart className="text-pink-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Countdown Timer */}
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-pink-500/40 to-yellow-500/40 rounded-xl blur-md transform -rotate-1"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-pink-500/30 to-purple-600/30 rounded-xl blur-md transform rotate-1"></div>

                <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-xl overflow-hidden">
                  <div className="flex justify-center items-center space-x-1 sm:space-x-3 text-center">
                    {[
                      { label: "D", value: timeLeft.days },
                      { label: "H", value: timeLeft.hours },
                      { label: "M", value: timeLeft.minutes },
                      { label: "S", value: timeLeft.seconds },
                    ].map((item, index) => (
                      <div key={item.label} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                            {String(item.value).padStart(2, "0")}
                          </div>
                          <div className="text-white/90 font-medium text-xs sm:text-sm">{item.label}</div>
                        </div>
                        {index < 3 && (
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mx-1 sm:mx-2">
                            :
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-1 bg-white/20 mt-3 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full"
                      style={{
                        width: `${100 - (timeLeft.seconds / 60) * 100}%`,
                        transition: "width 1s linear",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Event Details */}
          <motion.div className="grid md:grid-cols-2 gap-6 md:gap-8" variants={itemVariants}>
            <Card className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:opacity-80 transition-opacity"></div>
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Calendar className="text-yellow-300 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Date & Time</h3>
                    <p className="text-white/90 mt-1 text-base sm:text-lg">June 26th, 2025 at 6:30 PM</p>
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

          {/* Contact Info */}
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

          {/* Footer */}
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
