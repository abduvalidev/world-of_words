import BackgrounTop from "../assets/svg/background-top.svg";
import BackgrounBottom from "../assets/svg/background-bottom.svg";
import BackgrounLeft from "../assets/svg/background-left.svg";

export default function Background() {
  return (
    <div className="overflow-hidden top-0 w-full min-h-full h-full">
      <img
        src={BackgrounTop}
        alt="background-top"
        className="min-w-[109.5rem] object-center h-[50.9375rem] absolute top-0 -translate-x-1/2 left-1/2"
      />
      <img
        src={BackgrounLeft}
        alt="background-left"
        className="hidden xl:block min-h-[109.5rem] w-[50.9375rem] absolute top-1/2 -translate-y-1/2 left-0"
      />
      <img
        src={BackgrounLeft}
        alt="background-left"
        className="hidden xl:block min-h-[109.5rem] w-[50.9375rem] absolute top-1/2 -translate-y-1/2 right-0 rotate-180"
      />
      <img
        src={BackgrounBottom}
        alt="background-bottom"
        className="min-w-[109.5rem] object-center h-[50.9375rem] absolute bottom-0 translate-y-full -translate-x-1/2 left-1/2"
      />
    </div>
  );
}