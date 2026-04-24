"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "협회소개", href: "/about" },
    { label: "자격안내", href: "/certification" },
    { label: "시험접수", href: "/apply" },
    { label: "합격자조회", href: "/results" },
    { label: "보수교육", href: "/education" },
    { label: "고객센터", href: "/support" },
  ]

  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              02-1234-5678
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="h-3 w-3" />
              contact@kappea.or.kr
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                로그인
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                회원가입
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="한국공공정책평가협회 로고"
                width={280}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-foreground font-medium hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
