import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function SpreadsheetGeneralPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · SPREADSHEET GENERAL"
      title="2과목 스프레드시트 일반"
      description=""
      hideIntro
      items={[]}
    />
  );
}
