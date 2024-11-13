import { useState } from 'react';
import Pagination from './Pagination';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  time: string;
}

// 페이지네이션 관련 유틸리티 함수
const getPaginatedData = (items: Article[], currentPage: number, itemsPerPage: number) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return items.slice(indexOfFirstItem, indexOfLastItem);
};

const getTotalPages = (totalItems: number, itemsPerPage: number) => {
  return Math.ceil(totalItems / itemsPerPage);
};

export default function MainContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;
  
  const articles: Article[] = [
    {
      id: 1,
      title: "A Kiddie GPS for the Masses?",
      content: "A startup is developing a Global Positioning System that parents can use to keep track of junior. Its main selling point is the inexpensive price tag, around $100.",
      author: "Elisa Batista", 
      time: "11:25 a.m. PDT"
    },
    {
      id: 2,
      title: "AI 기술의 혁신적인 발전",
      content: "최근 인공지능 기술이 급속도로 발전하면서 다양한 산업 분야에서 혁신적인 변화가 일어나고 있습니다. 특히 자연어 처리와 컴퓨터 비전 분야에서 큰 진전이 있었습니다.",
      author: "김철수",
      time: "2:30 p.m. KST"
    },
    {
      id: 3,
      title: "Cybersecurity Threats on the Rise",
      content: "Recent reports show a significant increase in cyber attacks targeting small businesses. Experts recommend implementing stronger security measures and employee training programs.",
      author: "John Smith",
      time: "9:45 a.m. EST"
    },
    {
      id: 4,
      title: "블록체인 기술의 새로운 응용",
      content: "블록체인 기술이 금융을 넘어 의료, 물류, 예술 등 다양한 분야로 확장되고 있습니다. 특히 NFT 시장의 성장이 주목받고 있습니다.",
      author: "박지영",
      time: "4:15 p.m. KST"
    },
    {
      id: 5,
      title: "The Future of Remote Work",
      content: "Companies are adapting to hybrid work models as remote work becomes a permanent fixture in the corporate world. New technologies are emerging to support this transition.",
      author: "Sarah Johnson",
      time: "3:00 p.m. GMT"
    },
    {
      id: 6,
      title: "5G Networks Transform IoT Landscape",
      content: "The rollout of 5G networks is revolutionizing the Internet of Things ecosystem, enabling faster and more reliable connections for smart devices and industrial applications.",
      author: "Mike Chen",
      time: "10:15 a.m. EST"
    },
    {
      id: 7,
      title: "메타버스 플랫폼의 성장",
      content: "메타버스 플랫폼이 교육, 엔터테인먼트, 비즈니스 분야에서 빠르게 확산되고 있습니다. 가상 현실과 증강 현실 기술의 발전이 이를 가속화하고 있습니다.",
      author: "이미래",
      time: "1:45 p.m. KST"
    },
    {
      id: 8,
      title: "Green Tech Innovations",
      content: "Startups are developing breakthrough technologies in renewable energy and sustainable manufacturing, attracting significant investment from venture capital firms.",
      author: "Emma Watson",
      time: "5:30 p.m. GMT"
    },
    {
      id: 9,
      title: "디지털 헬스케어의 혁신",
      content: "AI 기반 진단 시스템과 원격 의료 서비스가 의료 산업을 변화시키고 있습니다. 개인 맞춤형 의료 서비스가 새로운 트렌드로 부상하고 있습니다.",
      author: "김건강",
      time: "11:20 a.m. KST"
    },
    {
      id: 10,
      title: "Quantum Computing Breakthrough",
      content: "Scientists achieve major milestone in quantum computing, demonstrating practical applications in cryptography and drug discovery simulations.",
      author: "David Miller",
      time: "8:00 p.m. PST"
    }
  ];

  const currentArticles = getPaginatedData(articles, currentPage, articlesPerPage);
  const totalPages = getTotalPages(articles.length, articlesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="space-y-4">
      <section>
        <h2 className="text-2xl font-bold mb-4 title">TOP STORIES</h2>
        <div className="space-y-4 content">
          {currentArticles.map((article) => (
            <article key={article.id} className="border-b border-gray-600 pb-4">
              <h3 className="text-xl mb-2 title">
                <a href="#" className="text-[#00ffff] hover:underline">
                  {article.title}
                </a>
              </h3>
              <p className="text-sm mb-2">{article.content}</p>
              <div className="text-xs text-gray-400">
                By {article.author} • Updated {article.time}
              </div>
            </article>
          ))}
        </div>

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
} 