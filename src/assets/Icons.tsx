import { ReactElement } from "react";

interface Props {
  className?: string;
}
interface StyleProps {
  style: {
    fill?: string,
    width?: string,
    height?: string,
  }
}
export const DubleArrowIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className ? className : " "}
    >
      <path
        d="M40 63.3307L20 43.3307L24.6667 38.6641L40 53.9141L55.3333 38.6641L60 43.3307L40 63.3307ZM40 43.3307L20 23.3307L24.6667 18.6641L40 33.9141L55.3333 18.6641L60 23.3307L40 43.3307Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};
export const LinkedInIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      className={className ? className : " "}
    >
      <rect x="0.5" width="40" height="40" rx="20" fill="#0E0E0D" />
      <path
        d="M28.5 20.7444V26.2601H25.2713V21.0807C25.2713 19.8027 24.8004 18.9283 23.657 18.9283C22.7825 18.9283 22.2444 19.5336 22.0426 20.0718C21.9753 20.2735 21.9081 20.5426 21.9081 20.8789V26.2601H18.6794C18.6794 26.2601 18.7466 17.5157 18.6794 16.6413H21.9081V17.9865C22.3117 17.3139 23.1188 16.3722 24.8004 16.3722C26.8856 16.3722 28.5 17.7848 28.5 20.7444ZM15.3161 12C14.2399 12 13.5 12.7399 13.5 13.6816C13.5 14.6233 14.1726 15.3632 15.2489 15.3632C16.3924 15.3632 17.065 14.6233 17.065 13.6816C17.1323 12.6726 16.4596 12 15.3161 12ZM13.7018 26.2601H16.9305V16.6413H13.7018V26.2601Z"
        fill="white"
      />
    </svg>
  );
};

export const ToUpIcon = ({style}: StyleProps): ReactElement => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={style.width ? style.width : "1280.000000pt"}
      height={style.height ? style.height : "1130.000000pt"}
      viewBox="0 0 1280.000000 1130.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)"
        fill={style?.fill ? style.fill : "#000000"}
        stroke="none"
      >
        <path
          d="M6266 11289 c-200 -27 -402 -141 -536 -301 -38 -46 -432 -718 -1284
   -2194 -3554 -6153 -4323 -7485 -4358 -7554 -61 -121 -81 -211 -81 -375 -1
   -115 3 -154 21 -220 91 -327 350 -567 681 -629 75 -14 614 -16 5691 -16 5077
   0 5616 2 5691 16 331 62 590 302 681 629 18 66 22 105 21 220 0 164 -20 254
   -81 375 -21 41 -756 1317 -1633 2835 -877 1518 -2126 3680 -2775 4804 -817
   1416 -1196 2063 -1234 2109 -112 134 -277 239 -445 283 -93 24 -256 32 -359
   18z"
        />
      </g>
    </svg>
  );
};
