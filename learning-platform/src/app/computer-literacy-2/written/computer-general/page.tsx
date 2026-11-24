import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ComputerGeneralPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="1과목 컴퓨터 일반"
      description=""
      hideIntro
      items={[
        { title: "1장 한글 Windows 10의 기본", description: "", href: "/computer-literacy-2/written/computer-general/windows10-basic" },
        { title: "2장 한글 Windows 10의 고급 기능", description: "", href: "/computer-literacy-2/written/computer-general/windows10-advanced" },
        { title: "3장 컴퓨터 시스템의 개요", description: "", href: "/computer-literacy-2/written/computer-general/computer-system-overview" },
        { title: "4장 컴퓨터 하드웨어", description: "", href: "/computer-literacy-2/written/computer-general/computer-hardware" },
        { title: "5장 컴퓨터 소프트웨어", description: "", href: "/computer-literacy-2/written/computer-general/computer-software" },
        { title: "6장 인터넷 활용", description: "", href: "/computer-literacy-2/written/computer-general/internet" },
        { title: "7장 멀티미디어 활용", description: "", href: "/computer-literacy-2/written/computer-general/multimedia" },
        { title: "8장 컴퓨터 시스템 보호", description: "", href: "/computer-literacy-2/written/computer-general/system-security" },
      ]}
    />
  );
}
