"use client";
import { useState } from "react";

type Q={number:number;question:string;choices:string[];answer:number;explanation:string};

const questions:Q[]=[
{number:1,question:"다음 중 멀티미디어에 관련된 설명으로 옳지 않은 것은?",choices:["다중(Multi)과 매체(Media)의 합성어로 그래픽, 이미지, 텍스트, 오디오, 비디오 등의 매체들이 통합된 것을 의미한다.","멀티미디어는 매체 정보를 디지털화하고, 대용량으로 생성되므로 이를 저장할 수 있는 저장장치를 사용해야 한다.","대용량의 멀티미디어 정보를 효율적으로 저장하기 위해 다양한 압축 기술이 개발되었으나 아직 동영상 압축 기술의 개발은 미비하다.","초고속 통신망의 기술이 발달되어 대용량의 멀티미디어 정보를 통신망을 통해 전송할 수 있다."],answer:2,explanation:"대용량의 멀티미디어 정보를 효율적으로 저장하기 위해 MPEG과 같은 동영상 압축 기술이 개발되어 활용되고 있습니다."},
{number:2,question:"다음 중 멀티미디어의 특징에 대한 설명으로 옳지 않은 것은?",choices:["다양한 아날로그 데이터를 디지털 데이터로 변환하여 통합 처리한다.","정보 제공자와 사용자 간의 상호 작용에 의해 데이터가 전달된다.","미디어별 파일 형식이 획일화되어 멀티미디어의 제작이 용이해진다.","텍스트, 그래픽, 사운드, 동영상 등의 여러 미디어를 통합 처리한다."],answer:2,explanation:"멀티미디어는 그래픽, 비디오, 오디오 등 각 미디어별로 다양한 파일 형식이 있어 용도에 맞는 멀티미디어의 제작이 용이합니다."},
{number:3,question:"다음 중 하이퍼텍스트(Hypertext)에 대한 설명으로 옳지 않은 것은?",choices:["하이퍼텍스트는 텍스트가 링크로 연결되어 있는 문서이다.","동영상, 그래픽 등의 정보를 연결해 놓은 멀티미디어 형식이다.","사용자가 하이퍼링크(Hyperlink)를 클릭함으로써 원하는 데이터를 찾을 수 있다.","하이퍼텍스트는 사용자의 의도에 따라 문서를 읽는 순서가 결정되는 비선형 구조이다."],answer:1,explanation:"동영상, 그래픽 등의 정보를 연결해 놓은 멀티미디어 형식은 하이퍼미디어(Hypermedia)입니다."},
{number:4,question:"다음 중 아래에서 설명하는 그래픽 기법은? 컴퓨터 프로그램을 이용하여 3차원 애니메이션을 만드는 과정으로 사물 모형에 명암과 색상을 추가하여 사실감을 더해주는 작업이다.",choices:["안티앨리어싱(Anti-Aliasing)","렌더링(Rendering)","인터레이싱(Interlacing)","메조틴트(Mezzotint)"],answer:1,explanation:"사물 모형에 명암과 색상을 입혀 사실감을 더하는 작업은 렌더링(Rendering)입니다."},
{number:5,question:"다음 중 그래픽 데이터의 표현에서 벡터(Vector) 방식에 관한 설명으로 옳은 것은?",choices:["점과 점을 연결하는 직선 또는 곡선을 이용하여 이미지를 표현한다.","이미지를 확대하면 테두리에 계단 현상과 같은 앨리어싱이 발생한다.","래스터 방식이라고도 하며 화면 표시 속도가 빠르다.","많은 픽셀로 정교하고 다양한 색상을 표시할 수 있다."],answer:0,explanation:"벡터 방식은 점과 점을 연결하는 직선이나 곡선을 이용하여 이미지를 표현하며 확대해도 테두리가 거칠어지지 않습니다."},
{number:6,question:"다음 중 컴퓨터에서 사용하는 소리 파일인 웨이브(wave) 파일에 관한 설명으로 옳지 않은 것은?",choices:["파일의 확장자는 .wav 이다.","녹음 조건에 따라 파일의 크기가 가변적이다.","Windows Media Player로 파일을 재생할 수 있다.","음높이, 음길이, 세기 등 다양한 음악 기호가 정의되어 있다."],answer:3,explanation:"④번은 MIDI에 대한 설명입니다. WAVE는 아날로그 형태의 소리를 디지털 형태로 변환하여 저장한 데이터입니다."},
{number:7,question:"다음 중 멀티미디어 파일 형식 중에서 형식이 다른 것은?",choices:["jpg","png","wmv","gif"],answer:2,explanation:"jpg, png, gif는 그래픽 파일 형식이고 wmv는 동영상 파일 형식입니다."},
{number:8,question:"다음 중 연속적 소리 신호인 아날로그 신호를 일정한 간격으로 측정하여 그 값을 디지털화시키는 작업으로 옳은 것은?",choices:["시퀀싱","샘플링","멀티플렉싱","디더링"],answer:1,explanation:"연속적 소리 신호인 아날로그 신호를 일정한 간격으로 측정하여 값을 디지털화하는 작업은 샘플링입니다."},
{number:9,question:"다음 중 멀티미디어와 관련하여 동영상 전문가 그룹에 의해서 제안된 비디오 또는 오디오 압축에 관한 일련의 표준으로 옳은 것은?",choices:["XML","SVG","JPEG","MPEG"],answer:3,explanation:"동영상 전문가 그룹에 의해 제안된 비디오 또는 오디오 압축에 관한 표준은 MPEG입니다."},
{number:10,question:"다음 중 실감미디어에 대한 설명으로 옳지 않은 것은?",choices:["홀로그램 - 기록 매체에 레이저와 같이 간섭성이 있는 광원을 이용하여 간섭 패턴을 기록한 결과물로, 광원을 이용하여 재생하면 3차원 영상으로 표현된다.","증강현실 - 가상 세계에서 일상 생활이나 경제적 활동이 가능하며, 사용자를 대신하는 캐릭터에게 가상 세계에서의 사회적 책임과 의무를 요구한다.","가상현실 - 다양한 장치를 통해 컴퓨터가 만들어낸 가상세계에서 여러 다른 경험을 체험할 수 있도록 한 모든 기술을 말한다.","혼합현실 - 가상현실과 현실 세계를 합쳐, 현실의 물리적인 객체와 가상의 객체가 상호 작용할 수 있는 환경을 구현하는 기술이다."],answer:1,explanation:"②번은 메타버스(Metaverse)에 대한 설명입니다. 증강현실은 실제 촬영한 화면에 가상의 정보를 부가하여 보여주는 기술입니다."}
];

export default function ComputerLiteracyMultimediaStudy(){
 const [selected,setSelected]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 function printTheory(){document.body.classList.add("print-win10-theory");const cleanup=()=>document.body.classList.remove("print-win10-theory");window.addEventListener("afterprint",cleanup,{once:true});window.print();window.setTimeout(cleanup,1000);}
 return <section className="win10-study-page">
  <header className="win10-study-hero"><span className="eyebrow">COMPUTER LITERACY 2 · COMPUTER GENERAL</span><h1>7장 멀티미디어 활용</h1></header>
  <div className="win10-print-actions"><button type="button" className="primary-button" onClick={printTheory}>이론 출력하기</button></div>
  <section className="win10-print-area">
   <div className="win10-section-title"><span>핵심요약</span><h2>멀티미디어 활용</h2></div>

   <article className="win10-theory-card"><h3><span>01</span> 멀티미디어의 개요</h3><ul>
    <li>Multi(다중)와 Media(매체)의 합성어로 텍스트, 그래픽, 사운드 등의 매체를 디지털로 통합하여 전달함</li>
    <li>초고속 통신망 기술이 발달되어 대용량의 멀티미디어 정보를 통신망을 통해 전송할 수 있음</li>
    <li>멀티미디어 데이터는 다양한 하드웨어와 소프트웨어 환경에서 생성, 처리, 전송, 이용되므로 상호 호환되기 위한 표준이 필요함</li>
    <li>가상현실, 전자출판, 화상회의, 방송, 교육, 의료 등 사회 전 분야에서 활용되고 있음</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>02</span> 멀티미디어의 특징</h3><ul>
    <li><b>디지털화(Digitalization)</b> : 다양한 아날로그 데이터를 디지털 데이터로 변환하여 통합 처리함</li>
    <li><b>쌍방향성(Interactive)</b> : 정보 제공자의 선택에 의해 일방적으로 데이터가 전달되는 것이 아니라 정보 제공자와 사용자 간의 의견을 통한 상호 작용에 의해 데이터가 전달됨</li>
    <li><b>비선형성(Non-Linear)</b> : 데이터가 일정한 방향으로 순차적으로 처리되는 것이 아니라 사용자의 선택에 따라 다양한 방향으로 처리됨</li>
    <li><b>정보의 통합성(Integration)</b> : 텍스트, 그래픽, 사운드, 동영상, 애니메이션 등의 여러 미디어를 통합하여 처리함</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>03</span> 하이퍼텍스트와 하이퍼미디어</h3><ul>
    <li><b>하이퍼텍스트(Hypertext)</b> : 문서와 문서가 하이퍼링크로 연결되어 있는 것으로, 문서 내의 특정 문자를 선택하면 그와 연결된 문서로 이동하는 문서 형식</li>
    <li><b>하이퍼미디어(Hypermedia)</b> : 하이퍼텍스트와 멀티미디어를 결합한 개념으로, 문자뿐만 아니라 그래픽, 사운드, 동영상의 정보를 연결해 놓은 미디어 형식</li>
    <li><b>하이퍼링크(Hyperlink)</b> : 웹상에서 정보를 효과적으로 나타내기 위해 문서와 문서를 연결하여 관련된 정보를 쉽게 찾아볼 수 있도록 하는 기능</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>04</span> 그래픽 기법</h3><table className="win10-table"><tbody>
    <tr><th>디더링(Dithering)</th><td>제한된 색상을 조합하여 복잡한 색이나 새로운 색을 만드는 작업</td></tr>
    <tr><th>렌더링(Rendering)</th><td>3차원 애니메이션을 만드는 과정 중 하나로 물체의 모형에 명암과 색상을 입혀 사실감을 더해주는 작업</td></tr>
    <tr><th>모델링(Modeling)</th><td>렌더링을 하기 전에 수행되는 작업으로 어떠한 방법으로 렌더링할 것인지를 정함</td></tr>
    <tr><th>모핑(Morphing)</th><td>2개의 이미지를 부드럽게 연결하여 변환·통합하는 것으로, 컴퓨터 그래픽, 영화 등에서 많이 응용되고 있음</td></tr>
    <tr><th>필터링(Filtering)</th><td>이미 작성된 그림을 필터 기능을 이용하여 여러 가지 형태의 새로운 이미지로 바꾸는 작업</td></tr>
    <tr><th>리터칭(Retouching)</th><td>기존의 이미지를 다른 형태로 새롭게 변형·수정하는 작업</td></tr>
    <tr><th>인터레이싱(Interlacing)</th><td>그림 파일을 표시하는 데 있어서 이미지의 대략적인 모습을 먼저 보여준 다음 점차 자세한 모습을 보여주는 기법</td></tr>
    <tr><th>메조틴트(Mezzotint)</th><td>무수히 많은 점과 선으로 이미지를 만드는 것</td></tr>
    <tr><th>클레이메이션(Claymation)</th><td>점토, 찰흙 등의 점성이 있는 소재를 이용하여 인물을 만들고 소재의 질감을 이용하여 조금씩 변형된 형태를 만들어서 촬영하는 형식의 애니메이션 기법</td></tr>
    <tr><th>솔러리제이션(Solarization)</th><td>필름을 일시적으로 빛에 노출시켜 반전된 것처럼 표현하는 것</td></tr>
    <tr><th>안티앨리어싱(Anti-Aliasing)</th><td>픽셀 단위로 표현하는 비트맵 이미지에서 나타나는 매끄럽지 않은 계단 현상을 보정하기 위해 가장자리 픽셀들을 주변 색상과 혼합한 중간 색상을 넣어 외형을 부드럽게 만드는 기법</td></tr>
    <tr><th>셀 애니메이션(Cel Animation)</th><td>종이에 그린 그림을 셀룰로이드라는 투명한 플라스틱이나 필름 위에 그대로 옮겨 뒤 배경하고 촬영하는 기법</td></tr>
    <tr><th>키 프레임 애니메이션(Key-frame Animation)</th><td>핵심이 되는 두 프레임을 선정한 후 중간 프레임을 자동으로 생성하여 애니메이션을 만드는 기법</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>05</span> 그래픽 데이터의 표현 방식</h3><table className="win10-table"><tbody>
    <tr><th>비트맵(Bitmap)</th><td>점(Pixel, 화소)으로 이미지를 표현하는 방식으로 래스터 이미지라고도 함. 이미지를 확대하면 테두리가 거칠게 표현되는 계단 현상이 나타남. 다양한 색상을 사용하여 사실적인 이미지를 표현할 수 있으며 BMP, TIF, GIF, JPEG, PCX, PNG 등의 파일 형식이 있음</td></tr>
    <tr><th>벡터(Vector)</th><td>점과 점을 연결하는 직선이나 곡선을 이용하여 이미지를 표현하는 방식으로, 이미지를 확대해도 테두리가 거칠어지지 않고 매끄럽게 표현됨. 파일 형식에는 DXF, AI, CDR, WMF 등이 있음</td></tr>
    <tr><th>3D 그래픽</th><td>입체감이 있는 이미지</td></tr>
   </tbody></table><p><b>한 픽셀의 색 표현 수</b> : n비트일 때 2ⁿ가지 색 표현</p></article>

   <article className="win10-theory-card"><h3><span>06</span> 그래픽 파일 형식</h3><table className="win10-table"><tbody>
    <tr><th>BMP</th><td>Windows 표준 비트맵 파일 형식으로 고해상도의 이미지를 표현할 수 있지만 압축을 하지 않으므로 파일의 크기가 큼</td></tr>
    <tr><th>GIF</th><td>인터넷 표준 그래픽 형식으로 8비트 컬러를 사용하여 256(2⁸)가지 색으로 표현. 표현이 제한되었으나 애니메이션 표현이 가능하고 무손실 압축 기법을 사용하므로 여러 번 압축해도 화질 손상이 없음. 선명한 화질을 제공하며 배경을 투명하게 처리할 수 있음</td></tr>
    <tr><th>JPEG/JPG</th><td>사진과 같은 선명한 정지 영상을 표현하기 위한 국제 표준 압축 방식으로 손실 압축 기법과 무손실 압축 기법을 사용함. 24비트 트루 컬러를 사용하여 16,777,215가지의 색을 표현할 수 있으며 파일 크기가 작아 전송 시간을 단축할 수 있어 주로 인터넷에서 그림 전송에 사용함. 고주파 성분과 선·격자 등이 많은 이미지 변환에서는 GIF, PNG보다 품질이 나쁨</td></tr>
    <tr><th>PNG</th><td>웹에서 최상의 이미지를 표현하기 위해 저장한 그래픽 형식. GIF 포맷의 문제점을 개선하기 위해 고안된 것으로 무손실 압축 기법을 사용함. GIF를 대체하여 인터넷에서 사용할 수 있지만 애니메이션은 표현할 수 없으며 트루 컬러를 지원하고 투명색을 표현할 수 있음</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>07</span> 오디오 데이터</h3><table className="win10-table"><tbody>
    <tr><th>WAVE</th><td>아날로그 형태의 소리를 디지털 형태로 변환하는 샘플링 과정을 통하여 작성된 데이터. 실제 소리가 저장되어 있으므로 재생은 쉽지만 용량이 큼</td></tr>
    <tr><th>MIDI</th><td>전자악기 간의 디지털 신호에 의한 통신이나 컴퓨터와 전자악기 간의 통신 규약. 음높이나 효과음의 저장이 불가능하고 연주 정보만 저장되어 있으므로 크기가 작음. 시퀀싱 작업을 통해 작성되며 16개 이상의 악기를 동시에 연주할 수 있음. 음높이, 음길이, 세기 등 다양한 음악 기호가 정의되어 있음</td></tr>
    <tr><th>MP3</th><td>고음질 오디오 압축의 표준 형식. MPEG에서 규정한 MPEG-1의 압축 기술을 이용하며 음반 CD 수준의 음질을 유지하면서 용량을 1/12 크기까지 압축할 수 있음</td></tr>
   </tbody></table></article>

   <article className="win10-theory-card"><h3><span>08</span> 오디오 데이터 관련 용어</h3><ul>
    <li><b>샘플링(Sampling)</b> : 음성, 영상 등의 아날로그 신호를 일정 시간 간격으로 검출하는 단계. 아날로그 신호를 디지털 신호로 변환하는 과정 중 한 단계임</li>
    <li><b>시퀀싱(Sequencing)</b> : 컴퓨터를 이용하여 음악을 제작, 녹음, 편집하는 것을 의미함. 시퀀싱 작업에 필요한 소프트웨어를 시퀀서라고 하며 이를 통해 해당 음에 대한 악기를 지정하고 음표 등을 입력할 수 있음</li>
    <li><b>PCM(Pulse Code Modulation)</b> : 아날로그 데이터를 디지털 데이터로 변경하는 것을 디지털화라고 하며, 가장 대표적인 디지털화 방법임</li>
   </ul></article>

   <article className="win10-theory-card"><h3><span>09</span> 비디오 데이터</h3><table className="win10-table"><tbody>
    <tr><th>AVI</th><td>Windows의 표준 동영상 파일 형식으로 Windows에서 기본적으로 지원하므로 별도의 하드웨어 장치 없이 재생할 수 있음</td></tr>
    <tr><th>퀵 타임 MOV</th><td>Apple사가 개발한 동영상 압축 기술로 JPEG의 압축 방식을 사용함</td></tr>
    <tr><th>MPEG</th><td>동영상 전문가 그룹에서 제정한 동영상 압축 기술에 대한 국제 표준 규격</td></tr>
    <tr><th>ASF</th><td>인터넷을 통해 오디오, 비디오 및 생방송 수신 등을 지원하는 마이크로소프트사의 통합 멀티미디어 형식으로 스트리밍을 위한 표준 기술 규격</td></tr>
    <tr><th>DivX</th><td>동영상 압축 고화질 파일 형식으로 비표준 동영상 파일 형식. MPEG-4와 MP3를 재조합한 것으로 이 형식의 동영상을 보려면 소프트웨어와 코덱이 필요함</td></tr>
   </tbody></table><p><b>스트리밍(Streaming) 기술</b> : 웹에서 오디오·비디오 등의 멀티미디어 데이터를 다운로드하면서 동시에 실시간으로 재생해 주는 기술. 스트리밍 전송이 가능한 파일 형식에는 ASF, WMV, RAM 등이 있음</p></article>

   <article className="win10-theory-card"><h3><span>10</span> 멀티미디어 활용</h3><ul>
    <li><b>가상현실(VR; Virtual Reality)</b> : 다양한 장치를 통해 컴퓨터가 만들어낸 가상세계에서 여러 다른 경험을 체험할 수 있도록 한 모든 기술</li>
    <li><b>증강현실(AR; Augmented Reality)</b> : 실제 촬영한 화면에 가상의 정보를 부가하여 보여주는 기술</li>
    <li><b>혼합현실(MR; Mixed Reality)</b> : 가상현실과 현실 세계를 합쳐 현실의 물리적인 객체와 가상의 객체가 상호 작용할 수 있는 환경을 구현하는 기술</li>
    <li><b>메타버스(Metaverse)</b> : 가공(Meta)과 현실 세계(Universe)의 합성어로 현실 세계와 같은 사회·경제·문화 활동이 이뤄지는 3차원 가상 세계를 가리킴. 1992년 미국 SF 작가 닐 스티븐슨의 소설 '스노 크래시'에 처음 등장함</li>
    <li><b>교육(CAI; Computer Aided Instruction)</b> : 컴퓨터를 수업 매체로 활용하여 학습자에게 필요한 지식, 정보, 기술, 태도 등을 가르치는 것</li>
    <li><b>홀로그램(Hologram)</b> : 기록 매체에 레이저와 같이 간섭성이 있는 광원을 이용하여 간섭 패턴을 기록한 결과물</li>
   </ul><p><b>AR/VR을 위한 핵심 기술</b> : 인터랙션(사용자와 가상 환경 간의 상호작용), 렌더링(가상 세계를 그래픽으로 구현), 트래킹(사용자의 위치 및 움직임을 감지하여 가상 환경과 동기화)</p></article>
  </section>

  <section className="win10-quiz"><div className="win10-section-title"><span>대표기출문제</span><h2>7장 문제</h2></div><div className="win10-quiz-list">
  {questions.map(q=>{const picked=selected[q.number];const isChecked=checked[q.number];return <article className="win10-question-card" key={q.number}><div className="win10-question-title"><span>{q.number}</span><h3>{q.question}</h3></div><div className="win10-choice-list">{q.choices.map((choice,index)=><button key={choice} type="button" className={"win10-choice "+(picked===index?"selected ":"")+(isChecked&&index===q.answer?"correct ":"")+(isChecked&&picked===index&&picked!==q.answer?"wrong":"")} onClick={()=>{setSelected(c=>({...c,[q.number]:index}));setChecked(c=>({...c,[q.number]:false}));}}><span>{["①","②","③","④"][index]}</span><p>{choice}</p></button>)}</div><button type="button" className="win10-check-button" disabled={picked===undefined} onClick={()=>setChecked(c=>({...c,[q.number]:true}))}>확인</button>{isChecked&&<div className={"win10-explanation "+(picked===q.answer?"correct":"wrong")}><strong>{picked===q.answer?"정답입니다.":"다시 확인해 보세요."} 정답 {["①","②","③","④"][q.answer]}</strong><p>{q.explanation}</p></div>}</article>})}
  </div></section>
 </section>
}
