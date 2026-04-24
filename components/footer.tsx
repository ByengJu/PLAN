import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.jpg"
                alt="한국공공정책평가협회 로고"
                width={220}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              공공정책 분석 및 평가 전문인력 양성을 통해
              국가 정책의 질적 향상에 기여합니다.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-foreground mb-4">연락처</h4>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>02-2274-0950</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>kapsaae@naver.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span className="leading-relaxed">
                  (03157) 서울특별시 종로구 종로1가<br />
                  A동 1530호 (종로1가, 르메이르종로타운)
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-foreground mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                  사이트맵
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  고객센터
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Certification */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-foreground mb-4">인증현황</h4>
            <div className="flex items-start gap-3">
              <Image
                src="/images/mois-logo.png"
                alt="행정안전부 인가"
                width={150}
                height={50}
                className="h-auto w-full max-w-[180px]"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 한국공공정책평가협회. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
