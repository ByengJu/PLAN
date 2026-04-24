import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const examSchedules = [
  {
    id: 1,
    title: "제2회 정기시험",
    status: "접수중",
    statusColor: "bg-green-500",
    registrationPeriod: "2024.03.15 ~ 2024.04.15",
    examDate: "2024.05.18 (토)",
    examTime: "09:00 ~ 12:00",
    location: "서울, 부산, 대구, 광주, 대전",
    capacity: "각 시험장 200명",
  },
  {
    id: 2,
    title: "제3회 정기시험",
    status: "예정",
    statusColor: "bg-muted-foreground",
    registrationPeriod: "2024.07.01 ~ 2024.08.01",
    examDate: "2024.09.14 (토)",
    examTime: "09:00 ~ 12:00",
    location: "서울, 부산, 대구, 광주, 대전",
    capacity: "각 시험장 200명",
  },
]

export function ExamSchedule() {
  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">시험일정</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {examSchedules.map((exam) => (
            <Card key={exam.id} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{exam.title}</CardTitle>
                  <Badge className={`${exam.statusColor} text-primary-foreground`}>
                    {exam.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">원서접수 기간</p>
                    <p className="font-medium text-foreground">{exam.registrationPeriod}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">시험일시</p>
                    <p className="font-medium text-foreground">{exam.examDate} {exam.examTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">시험장소</p>
                    <p className="font-medium text-foreground">{exam.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">모집인원</p>
                    <p className="font-medium text-foreground">{exam.capacity}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
