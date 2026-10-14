type LogoLockupProps = {
  markClassName?: string;
  textClassName?: string;
};

const DEFAULT_TEXT =
  "hidden text-[13px] leading-none xl:block xl:text-lg 2xl:text-xl";

export function LogoLockup({
  markClassName = "h-[52px] md:h-[72px]",
  textClassName = DEFAULT_TEXT,
}: LogoLockupProps) {
  return (
    <a href="/" className="flex items-center gap-2 md:gap-3">
      <div className="inline-block rounded-[4px] bg-white px-2 py-1">
        <img
          src="/ajk_mark.PNG"
          alt="Abusharar Jubran Khatib, APC"
          className={`block w-auto ${markClassName}`}
        />
      </div>
      <span
        className={`font-serif font-semibold tracking-[0.08em] text-white ${textClassName}`}
      >
        Abusharar Jubran Khatib, APC
      </span>
    </a>
  );
}
