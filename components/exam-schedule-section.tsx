import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Settings } from "lucide-react"

export function ExamScheduleSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-2">시험일정</h2>
        <p className="text-center text-muted-foreground mb-10">
          자격증별 시험 일정을 확인하거나 관리하세요
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 일반 사용자용 */}
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>시험일정 보기</CardTitle>
              <CardDescription>
                예정된 시험 회차, 접수 마감일, 결과 발표일을 확인합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a
                  href="https://id-preview--fe790128-97de-4f16-8a4e-1b5356a2156b.lovable.app/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  일정 보기
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* 관리자용 */}
          <Card>
            <CardHeader>
              <Settings className="h-10 w-10 text-primary mb-2" />
              <CardTitle>시험일정 관리</CardTitle>
              <CardDescription>
                관리자 전용 페이지에서 시험 일정을 등록하고 수정합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://id-preview--fe790128-97de-4f16-8a4e-1b5356a2156b.lovable.app/admin/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  일정 관리
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
