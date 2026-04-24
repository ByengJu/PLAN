import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/application-form"
import { FileText } from "lucide-react"

export const metadata = {
  title: "시험 원서접수 - 한국공공정책평가협회 자격관리시스템",
  description: "정책분석사 자격시험 원서접수 페이지입니다.",
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center gap-3 text-primary-foreground">
              <FileText className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">시험 원서접수</h1>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  정책분석사 자격시험에 응시하기 위한 원서를 작성해 주세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="text-sm text-muted-foreground">
              <span>홈</span>
              <span className="mx-2">/</span>
              <span>시험접수</span>
              <span className="mx-2">/</span>
              <span className="text-foreground font-medium">원서접수</span>
            </nav>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h2 className="font-medium text-blue-900 mb-2">원서접수 안내</h2>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• 모든 필수 항목(*)을 정확히 입력해 주세요.</li>
              <li>• 증명사진은 최근 6개월 이내 촬영한 사진을 첨부해 주세요.</li>
              <li>• 접수 완료 후 입력하신 이메일로 확인 메일이 발송됩니다.</li>
              <li>• 응시료는 접수 완료 후 별도 결제 페이지에서 납부하실 수 있습니다.</li>
            </ul>
          </div>

          <ApplicationForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
