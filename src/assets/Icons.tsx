import { ReactElement } from "react";

interface Props {
  className?: string;
}

export const DubleArrowIcon = ({ className }: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className ? className : ' '}
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
      className={className ? className : ' '}
    >
      <rect x="0.5" width="40" height="40" rx="20" fill="#0E0E0D" />
      <path
        d="M28.5 20.7444V26.2601H25.2713V21.0807C25.2713 19.8027 24.8004 18.9283 23.657 18.9283C22.7825 18.9283 22.2444 19.5336 22.0426 20.0718C21.9753 20.2735 21.9081 20.5426 21.9081 20.8789V26.2601H18.6794C18.6794 26.2601 18.7466 17.5157 18.6794 16.6413H21.9081V17.9865C22.3117 17.3139 23.1188 16.3722 24.8004 16.3722C26.8856 16.3722 28.5 17.7848 28.5 20.7444ZM15.3161 12C14.2399 12 13.5 12.7399 13.5 13.6816C13.5 14.6233 14.1726 15.3632 15.2489 15.3632C16.3924 15.3632 17.065 14.6233 17.065 13.6816C17.1323 12.6726 16.4596 12 15.3161 12ZM13.7018 26.2601H16.9305V16.6413H13.7018V26.2601Z"
        fill="white"
      />
    </svg>
  );
};
