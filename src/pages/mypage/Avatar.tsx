import profileImage from '../../assets/logo.png'

export default function Avatar() {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="text-center">

        <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-full overflow-hidden mb-4">
          <img
            src={profileImage}
            alt="프로필 이미지"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold mb-1">ZAZA Community</h2>
        <p className="text-sm text-gray-400">zaza-community@gmail.com</p>

      </div>
    </div>
  );
} 