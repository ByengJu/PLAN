import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, ArrowRight } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              국가공인 자격시험
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              정책분석사 자격시험
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              공공정책 분석 및 평가 전문가로서의 역량을 인증받으세요.
              2024년 제2회 정기시험 원서접수가 진행 중입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                <Link href="/applications/new">
                  원서접수 바로가기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/certification">
                  자격안내 보기
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative element */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 lg:w-60 lg:h-60 bg-primary-foreground/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-primary-foreground rounded-full flex items-center justify-center">
                    <Award className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
