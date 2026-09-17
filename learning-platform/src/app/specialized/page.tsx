import CoursePage from "@/components/CoursePage";

export default function SpecializedPage() {
  return (
    <CoursePage
      eyebrow="SPECIALIZED HIGH SCHOOL"
      title="특성화고 대비반"
      description="특성화고 지원 학생을 위한 전형 준비, 알고리즘, 면접, 프로젝트 자료를 과정별로 제공합니다."
      items={["전형·일정 안내", "지필평가 대비", "심층면접 대비", "포트폴리오·프로젝트"]}
    />
  );
}
