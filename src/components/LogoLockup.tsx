type LogoLockupProps = {
  markClassName?: string;
  textClassName?: string;
};

export function LogoLockup({
  markClassName = "h-[52px] md:h-[72px]",
  textClassName = "text-lg md:text-2xl",
}: LogoLockupProps) {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="inline-block rounded-[4px] bg-white px-2 py-1">
        <img
          src="/ajk_mark.PNG"
          alt="AJK Law Group"
          className={`block w-auto ${markClassName}`}
        />
      </div>
      <span
        className={`font-serif font-semibold uppercase leading-none tracking-[0.12em] text-white ${textClassName}`}
      >
        AJK Law Group
      </span>
    </a>
  );
}
