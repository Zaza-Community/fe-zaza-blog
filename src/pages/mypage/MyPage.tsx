import Avatar from "./Avatar.tsx";

export default function MyPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-4">

            <div className="bg-black/20 rounded p-4 h-full">
                <Avatar />
            </div>

            <main className="space-y-4">
                {/* Header */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 title">
                        <span className="text-yellow-400 content">프로필</span>
                    </h2>
                    <div className="flex justify-end space-x-2 mb-4">
                        <button className="px-4 py-2 border border-white/20 rounded hover:bg-white/10">
                            회원정보 관리
                        </button>
                    </div>

                    {/* Profile Content */}
                    <div className="border-b border-gray-600 pb-4">
                        <div className="space-y-6">
                            {/* Personal Info */}
                            <div>
                                <h3 className="text-xl mb-4 text-[#00ffff]">개인</h3>
                                <div className="bg-black/20 p-4 rounded">
                                    {/* Add personal info fields here */}
                                </div>
                            </div>

                            {/* Mileage */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl text-[#00ffff]">마일리지</h3>
                                    <a href="#" className="text-sm text-yellow-400 hover:underline">
                                        마일리지 내역보기 ›
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-black/20 p-4 rounded">
                                        <div className="flex justify-between items-center">
                                            <span>마일리지</span>
                                            <span className="text-[#ff4b4b] text-xl">4 M</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span>방문수</span>
                                            <span className="text-xl">6</span>
                                        </div>
                                    </div>
                                    <div className="bg-black/20 p-4 rounded">
                                        <div className="flex justify-between items-center">
                                            <span>사용 가능 마일리지</span>
                                            <span className="text-[#ff4b4b] text-xl">4 M</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span>총 획득 마일리지</span>
                                            <span className="text-xl">4 M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Other sections with consistent styling */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl text-[#00ffff]">친구 초대</h3>
                                    <a href="#" className="text-sm text-yellow-400 hover:underline">
                                        친구 초대하기 ›
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl text-[#00ffff]">차단 회원 관리</h3>
                                    <a href="#" className="text-sm text-yellow-400 hover:underline">
                                        차단 회원 내역보기 ›
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl text-[#00ffff] mb-4">커뮤니티 글 분석 관리</h3>
                            </div>

                            <div>
                                <h3 className="text-xl text-[#00ffff] mb-4">업데이트 관리</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    )
}