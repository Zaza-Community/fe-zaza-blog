export default function NeonText() {
  const uniqueId = 'zaza-neon';

  return (
    <h1 id={uniqueId} className="text-[#00ffff] text-4xl font-mono tracking-widest relative">
      <span className="relative z-10">
        ZAZA COMMUNITY
      </span>
      
      <span className="absolute inset-0 animate-pulse blur-[3px] z-0">
        ZAZA COMMUNITY
      </span>
      <span className="absolute inset-0 blur-[8px] opacity-50 z-0">
        ZAZA COMMUNITY
      </span>
      <span className="absolute inset-0 blur-[16px] opacity-30 z-0">
        ZAZA COMMUNITY
      </span>
      
      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 1;
              text-shadow: 0 0 4px #00ffff,
                          0 0 8px #00ffff,
                          0 0 12px #00ffff;
            }
            20%, 22%, 24%, 55% {
              opacity: 0.5;
              text-shadow: 0 0 2px #00ffff;
            }
          }

          @keyframes glow {
            0%, 100% {
              text-shadow: 0 0 4px #00ffff,
                          0 0 8px #00ffff;
              opacity: 0.8;
            }
            50% {
              text-shadow: 0 0 6px #00ffff,
                          0 0 12px #00ffff,
                          0 0 16px #00ffff;
              opacity: 1;
            }
          }

          #${uniqueId} {
            animation: flicker 4s linear infinite, glow 2s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            #${uniqueId} {
              animation: none;
            }
          }
        `}
      </style>
    </h1>
  )
} 