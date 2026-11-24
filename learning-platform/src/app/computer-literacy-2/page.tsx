import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ComputerLiteracy2Page() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2"
      title="컴퓨터활용능력 2급"
      description=""
      hideIntro
      items={[
        { title: "필기", description: "", href: "/computer-literacy-2/written" },
        { title: "실기", description: "", href: "/computer-literacy-2/practical" },
      ]}
    />
  );
}
