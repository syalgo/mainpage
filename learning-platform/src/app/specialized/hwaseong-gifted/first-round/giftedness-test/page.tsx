import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function GiftednessTestPage() {
  return (
    <ProtectedCoursePage
      permission="specialized"
      eyebrow="GIFTEDNESS TEST"
      title="자기보고식 영재성 판별 검사(객관식)"
      description="자기보고식 영재성 판별 검사의 객관식 문항을 학습합니다."
      hideIntro
      items={[]}
    />
  );
}
