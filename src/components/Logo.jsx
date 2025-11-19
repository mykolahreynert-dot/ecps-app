// src/components/Logo.jsx
function Logo() {
  return (
    <svg
      width="230"
      height="65"
      viewBox="0 0 260 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="28" fill="#0D9488" />
      <path
        d="M30 15 C22 25, 22 40, 30 47 C38 40, 38 25, 30 15 Z"
        fill="#F5F9F8"
      />
      <text
        x="70"
        y="32"
        fontSize="20"
        fontFamily="sans-serif"
        fontWeight="700"
        fill="#0F766E"
      >
        European Care
      </text>
      <text
        x="70"
        y="50"
        fontSize="14"
        fontFamily="sans-serif"
        fontWeight="500"
        fill="#444"
      >
        & Property Services
      </text>
    </svg>
  );
}

export default Logo;
