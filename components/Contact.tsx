"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Github, Send, Copy, Check, Linkedin, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "neerajpundir2005@gmail.com",
    href: "mailto:neerajpundir2005@gmail.com",
    gradient: "from-yellow-500 to-orange-500",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8279386280",
    href: "tel:+918279386280",
    gradient: "from-green-500 to-emerald-500",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chandigarh, India",
    href: "#",
    gradient: "from-orange-500 to-green-500",
    copyable: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "harshitpundir7",
    href: "https://github.com/harshitpundir7",
    gradient: "from-orange-500 to-red-500",
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/harshitpundir7",
    gradient: "from-gray-800 to-gray-900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    gradient: "from-yellow-600 to-orange-600",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block mb-4"
          >
            <Send className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            <br />
            Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isCopied = copied === method.label;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  
                  <div className={`h-1 bg-gradient-to-r ${method.gradient}`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {method.label}
                        </CardTitle>
                      </div>
                      {method.copyable && (
                        <motion.button
                          onClick={() => handleCopy(method.value, method.label)}
                          className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="Copy to clipboard"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <span className="truncate">{method.value}</span>
                      {method.href.startsWith("http") && (
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all flex-shrink-0" />
                      )}
                    </a>
                  </CardContent>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${method.gradient}`}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center">Connect on Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </motion.a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-green-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-green-500" />
            <CardContent className="pt-8 pb-8 relative">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="mailto:neerajpundir2005@gmail.com" className="flex items-center gap-2">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Me an Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
