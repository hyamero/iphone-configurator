export const Overlay = () => {
  return (
    <>
      {" "}
      <a
        href="https://github.com/hyamero"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-3 left-3 text-[13px] md:bottom-10 md:left-10"
      >
        developed by
        <br />
        Dale Bañares
      </a>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        <div className="absolute -top-[10vw] right-0 origin-bottom-right -rotate-90">
          <h1 className="text-gradient m-0 p-0 text-[8vw] font-medium tracking-tighter text-black/25">
            Oh. So. Pro.
          </h1>
        </div>
        <div className="absolute top-5 left-5 text-[13px] md:top-10 md:left-10">
          iPhone 13 Configurator —
        </div>
      </div>
    </>
  );
};
