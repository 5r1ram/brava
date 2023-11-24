import Link from "next/link";

const Brandline = () => (
  <div className="flex justify-center items-center bg-yellow py-3 text-gray font-semibold text-sm/[15px]">
    <Link
      href="https://www.tiktok.com/notfound"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button">VISIT US ON TIKTOK @BRAVALAND.COM</button>
    </Link>
  </div>
);

export default Brandline;
