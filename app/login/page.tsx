"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: 실제 로그인 로직 구현
    setTimeout(() => {
      setIsLoading(false)
      alert("로그인 기능은 추후 구현 예정입니다.")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="한국공공정책평가협회 로고"
              width={240}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">로그인</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                회원가입
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-16">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo.jpg"
            alt="한국공공정책평가협회 로고"
            width={280}
            height={60}
            className="h-14 w-auto"
          />
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-card rounded-lg border border-border shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center text-foreground mb-2">로그인</h2>
          <p className="text-center text-muted-foreground mb-8">
            계정 정보를 입력해 로그인해주세요
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  비밀번호
                </label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
          </form>
        </div>

        {/* Sign up link */}
        <p className="mt-8 text-muted-foreground">
          아직 계정이 없으신가요?{" "}
          <Link href="/signup" className="text-primary font-medium hover:underline">
            회원가입
          </Link>
        </p>
      </main>
    </div>
  )
}
