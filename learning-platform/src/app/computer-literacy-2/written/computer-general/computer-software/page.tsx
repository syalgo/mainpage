import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ChapterPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="5장 컴퓨터 소프트웨어"
      description=""
      hideIntro
      items={[]}
    />
  );
}
