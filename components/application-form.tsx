"use client"

import { useState } from "react"
import { Upload, Check, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  name: string
  birthDate: string
  phone: string
  email: string
  address: string
  certificateType: string
  examSession: string
  file: File | null
  agreeTerms: boolean
  agreePrivacy: boolean
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    birthDate: "",
    phone: "",
    email: "",
    address: "",
    certificateType: "",
    examSession: "",
    file: null,
    agreeTerms: false,
    agreePrivacy: false,
  })

  const [dragActive, setDragActive] = useState(false)

  const certificateTypes = [
    { id: "policy-analyst-1", name: "정책분석사 1급", fee: "100,000원" },
    { id: "policy-analyst-2", name: "정책분석사 2급", fee: "80,000원" },
    { id: "policy-analyst-3", name: "정책분석사 3급", fee: "60,000원" },
  ]

  const examSessions = [
    { id: "2024-1", name: "2024년 제1회 정기시험", date: "2024.06.15 (토)", location: "서울/부산/대전" },
    { id: "2024-2", name: "2024년 제2회 정기시험", date: "2024.09.21 (토)", location: "서울/부산/광주" },
    { id: "2024-3", name: "2024년 제3회 정기시험", date: "2024.12.07 (토)", location: "서울/대전/대구" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.dataTransfer.files[0] }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("원서가 제출되었습니다. 접수 확인 이메일을 확인해주세요.")
  }

  const isFormValid =
    formData.name &&
    formData.birthDate &&
    formData.phone &&
    formData.email &&
    formData.certificateType &&
    formData.examSession &&
    formData.agreeTerms &&
    formData.agreePrivacy

  const selectedCertificate = certificateTypes.find((c) => c.id === formData.certificateType)
  const selectedExam = examSessions.find((e) => e.id === formData.examSession)

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Main Form */}
      <div className="lg:col-span-2 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Applicant Information */}
          <Card>
            <CardHeader className="bg-muted/50 border-b border-border">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                지원자 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    이름 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">
                    생년월일 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    연락처 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    이메일 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">주소</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="서울특별시 종로구..."
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Certificate Type Selection */}
          <Card>
            <CardHeader className="bg-muted/50 border-b border-border">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                자격증 종류 선택
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-3 gap-3">
                {certificateTypes.map((cert) => (
                  <label
                    key={cert.id}
                    className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.certificateType === cert.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="certificateType"
                      value={cert.id}
                      checked={formData.certificateType === cert.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    {formData.certificateType === cert.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                    <span className="font-medium text-foreground">{cert.name}</span>
                    <span className="text-sm text-muted-foreground mt-1">응시료: {cert.fee}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Exam Session Selection */}
          <Card>
            <CardHeader className="bg-muted/50 border-b border-border">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                시험 회차 선택
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {examSessions.map((exam) => (
                  <label
                    key={exam.id}
                    className={`relative flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.examSession === exam.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="examSession"
                      value={exam.id}
                      checked={formData.examSession === exam.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.examSession === exam.id ? "border-primary bg-primary" : "border-border"
                        }`}
                      >
                        {formData.examSession === exam.id && (
                          <Check className="h-3 w-3 text-primary-foreground" />
                        )}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">{exam.name}</span>
                        <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                          <span>일시: {exam.date}</span>
                          <span>장소: {exam.location}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader className="bg-muted/50 border-b border-border">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                서류 첨부
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? "border-primary bg-primary/5" : "border-border"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="file-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                {formData.file ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <p className="font-medium text-foreground">{formData.file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setFormData((prev) => ({ ...prev, file: null }))}
                    >
                      삭제
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-foreground font-medium mb-1">파일을 드래그하거나 클릭하여 업로드</p>
                    <p className="text-sm text-muted-foreground">
                      증명사진, 학력증명서 등 (PDF, JPG, PNG / 최대 10MB)
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Consent */}
          <Card>
            <CardHeader className="bg-muted/50 border-b border-border">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                약관 동의
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                  }
                />
                <div className="flex-1">
                  <Label htmlFor="agreeTerms" className="font-medium cursor-pointer">
                    이용약관에 동의합니다 <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    시험 응시 및 자격증 취득에 관한 규정을 확인하였습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Checkbox
                  id="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreePrivacy: checked as boolean }))
                  }
                />
                <div className="flex-1">
                  <Label htmlFor="agreePrivacy" className="font-medium cursor-pointer">
                    개인정보 수집 및 이용에 동의합니다 <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    수집된 개인정보는 자격시험 운영 목적으로만 사용됩니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto px-12"
              disabled={!isFormValid}
            >
              원서 제출하기
            </Button>
          </div>
        </form>
      </div>

      {/* Application Summary Panel */}
      <div className="lg:col-span-1">
        <div className="sticky top-6">
          <Card>
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-lg">접수 현황</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {/* Progress Steps */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      formData.name && formData.phone && formData.email
                        ? "bg-green-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {formData.name && formData.phone && formData.email ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      "1"
                    )}
                  </div>
                  <span
                    className={
                      formData.name && formData.phone && formData.email
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    지원자 정보 입력
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      formData.certificateType
                        ? "bg-green-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {formData.certificateType ? <Check className="h-4 w-4" /> : "2"}
                  </div>
                  <span
                    className={formData.certificateType ? "text-foreground" : "text-muted-foreground"}
                  >
                    자격증 선택
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      formData.examSession
                        ? "bg-green-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {formData.examSession ? <Check className="h-4 w-4" /> : "3"}
                  </div>
                  <span
                    className={formData.examSession ? "text-foreground" : "text-muted-foreground"}
                  >
                    시험 회차 선택
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      formData.file ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {formData.file ? <Check className="h-4 w-4" /> : "4"}
                  </div>
                  <span className={formData.file ? "text-foreground" : "text-muted-foreground"}>
                    서류 첨부
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      formData.agreeTerms && formData.agreePrivacy
                        ? "bg-green-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {formData.agreeTerms && formData.agreePrivacy ? <Check className="h-4 w-4" /> : "5"}
                  </div>
                  <span
                    className={
                      formData.agreeTerms && formData.agreePrivacy
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    약관 동의
                  </span>
                </div>
              </div>

              {/* Summary */}
              {(selectedCertificate || selectedExam) && (
                <div className="pt-4 border-t border-border space-y-3">
                  <h4 className="font-medium text-foreground">선택 내역</h4>
                  {selectedCertificate && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">자격증: </span>
                      <span className="text-foreground">{selectedCertificate.name}</span>
                    </div>
                  )}
                  {selectedExam && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">시험: </span>
                      <span className="text-foreground">{selectedExam.name}</span>
                    </div>
                  )}
                  {selectedCertificate && (
                    <div className="pt-3 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">응시료</span>
                        <span className="text-lg font-bold text-primary">
                          {selectedCertificate.fee}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Warning */}
              {!isFormValid && (
                <div className="flex items-start gap-2 p-3 bg-amber-50 text-amber-800 rounded-lg text-sm">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>필수 항목을 모두 입력해주세요.</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
