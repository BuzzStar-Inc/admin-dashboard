type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  spinner: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg {...props} width="357" height="69" viewBox="0 0 357 69" fill="none">
      <path
        d="M355.706 63.2035C355.706 65.3978 356.044 66.5794 357 67.7047H340.064C339.164 66.8045 338.77 65.5104 338.77 63.2035V58.1959C338.77 55.3264 338.095 54.7075 336.351 54.7075H332.975V67.7047H316.546V26.6313H339.783C351.486 26.6313 356.55 31.6389 356.55 38.1094C356.55 44.8612 351.599 48.1245 346.76 48.9685V49.081C352.836 49.8687 355.706 52.8508 355.706 58.5335V63.2035ZM332.75 44.2422H337.307C339.389 44.2422 340.177 43.4545 340.177 41.9917C340.177 40.4725 339.389 39.6285 337.307 39.6285H332.75V44.2422Z"
        fill="white"
      />
      <path
        d="M317.019 67.7047H300.871L299.802 62.6971H290.743L289.674 67.7047H273.583L285.567 26.6313H304.978L317.019 67.7047ZM292.825 51.6129H297.72L295.245 39.6848L292.825 51.6129Z"
        fill="white"
      />
      <path
        d="M239.312 41.2039V26.6313H279.204V41.2039H267.783V67.7047H250.791V41.2039H239.312Z"
        fill="white"
      />
      <path
        d="M214.525 53.4134C214.637 55.439 215.763 56.6205 218.97 56.6205C221.952 56.6205 222.852 55.7203 222.852 54.595C222.852 53.4134 222.064 52.4569 217.338 52.0068C201.696 50.4877 197.702 46.0427 197.702 38.8408C197.702 31.4701 203.384 25.5623 218.294 25.5623C232.53 25.5623 238.662 32.089 239.056 40.7538H222.177C222.064 38.8408 220.939 37.7155 218.013 37.7155C215.256 37.7155 214.356 38.5595 214.356 39.6848C214.356 40.8664 215.144 41.8229 219.982 42.273C235.624 43.6796 239.788 48.012 239.788 55.2702C239.788 63.091 234.105 68.7737 218.632 68.7737C203.328 68.7737 197.589 62.8659 197.251 53.4134H214.525Z"
        fill="white"
      />
      <path
        d="M142.613 53.9198H157.974V67.7047H121.458V54.4262L137.718 40.1349H121.739V26.6313H157.861V39.9661L142.613 53.9198Z"
        fill="white"
      />
      <path
        d="M104.837 53.9198H120.197V67.7047H83.6812V54.4262L99.9418 40.1349H83.9626V26.6313H120.085V39.9661L104.837 53.9198Z"
        fill="white"
      />
      <path
        d="M42.0715 52.4569V26.6313H58.8384V50.2063C58.8384 53.0196 60.02 54.2011 61.9893 54.2011C63.9023 54.2011 65.1401 53.0758 65.1401 50.2063V26.6313H81.9071V52.4569C81.9071 62.1345 75.2678 68.7737 61.9893 68.7737C48.7108 68.7737 42.0715 62.1345 42.0715 52.4569Z"
        fill="white"
      />
      <path
        d="M29.9288 47.2243C35.1052 48.0683 40.9004 51.1066 40.9004 57.1269C40.9004 62.9785 36.2305 67.7047 23.3458 67.7047H0.783569V26.6313H23.3458C35.1052 26.6313 39.8314 31.3013 39.8314 37.2091C39.8314 43.2295 34.9364 46.2678 29.9288 47.1118V47.2243ZM16.1439 55.2702H21.4328C23.4583 55.2702 24.1898 54.5387 24.1898 53.3009C24.1898 52.0631 23.4583 51.3316 21.4891 51.3316H16.1439V55.2702ZM16.1439 43.0044H21.4891C23.0645 43.0044 23.7959 42.273 23.7959 41.0351C23.7959 39.7973 23.0645 39.0659 21.4328 39.0659H16.1439V43.0044Z"
        fill="white"
      />
      <path
        d="M176.606 2.79157L176.152 1.80059L175.698 2.79157L166.217 23.4637L143.74 26.1439L142.669 26.2717L143.459 27.0065L160.078 42.4638L155.667 64.7945L155.456 65.8598L156.402 65.3271L176.152 54.2086L195.902 65.3271L196.848 65.8598L196.637 64.7945L192.226 42.4638L208.845 27.0065L209.635 26.2717L208.564 26.1439L186.087 23.4637L176.606 2.79157Z"
        fill="#5AD7FF"
        stroke="black"
      />
    </svg>
  ),
  dashboard: (props: IconProps) => (
    <svg {...props} width="22" height="23" viewBox="0 0 22 23">
      <path
        d="M1 11.5743C1 6.86034 1 4.50334 2.464 3.03834C3.93 1.57434 6.286 1.57434 11 1.57434C15.714 1.57434 18.071 1.57434 19.535 3.03834C21 4.50434 21 6.86034 21 11.5743C21 16.2883 21 18.6453 19.535 20.1093C18.072 21.5743 15.714 21.5743 11 21.5743C6.286 21.5743 3.929 21.5743 2.464 20.1093C1 18.6463 1 16.2883 1 11.5743Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M6 13.5743L8.293 11.2813C8.48053 11.0939 8.73484 10.9886 9 10.9886C9.26516 10.9886 9.51947 11.0939 9.707 11.2813L11.293 12.8673C11.4805 13.0548 11.7348 13.1601 12 13.1601C12.2652 13.1601 12.5195 13.0548 12.707 12.8673L16 9.57434M16 9.57434V12.0743M16 9.57434H13.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  creators: (props: IconProps) => (
    <svg {...props} width="24" height="25" viewBox="0 0 24 25">
      <path
        d="M11.5 5.57534H5.59501C5.12223 5.57534 4.6541 5.66859 4.21741 5.84976C3.78072 6.03092 3.38406 6.29644 3.05013 6.63112C2.7162 6.96579 2.45156 7.36305 2.27136 7.80014C2.09117 8.23723 1.99896 8.70557 2.00001 9.17834V15.3403C2.00001 16.2938 2.37877 17.2082 3.05296 17.8824C3.38679 18.2162 3.7831 18.481 4.21926 18.6617C4.65543 18.8424 5.12291 18.9353 5.59501 18.9353H11.5C12.4535 18.9353 13.3679 18.5566 14.0421 17.8824C14.7163 17.2082 15.095 16.2938 15.095 15.3403V9.17934C15.0965 8.70636 15.0045 8.23775 14.8245 7.80037C14.6445 7.36299 14.3799 6.96544 14.0459 6.63053C13.7119 6.29562 13.3151 6.02992 12.8782 5.84868C12.4413 5.66744 11.973 5.57421 11.5 5.57434M21 9.69334V14.8283C21 15.0783 20.929 15.3243 20.795 15.5363C20.6593 15.749 20.4671 15.9197 20.24 16.0293C20.0144 16.1423 19.7603 16.1854 19.51 16.1533C19.2633 16.1238 19.0293 16.0277 18.833 15.8753L15.608 13.2873C15.4531 13.1599 15.3279 13.0002 15.241 12.8193C15.1541 12.6385 15.1077 12.4409 15.105 12.2403C15.105 12.0403 15.15 11.8433 15.238 11.6653C15.33 11.4973 15.456 11.3503 15.608 11.2333L18.833 8.66634C19.0293 8.51339 19.2638 8.41723 19.511 8.38834C19.761 8.35634 20.015 8.39934 20.24 8.51134C20.4637 8.61869 20.6532 8.78603 20.7874 8.99472C20.9216 9.20342 20.9952 9.44527 21 9.69334Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  person: (props: IconProps) => (
    <svg {...props} width="16" height="21" viewBox="0 0 16 21">
      <path
        d="M13.755 12.5743C14.3514 12.5749 14.9232 12.8122 15.3447 13.2341C15.7663 13.656 16.003 14.228 16.003 14.8243V15.3993C16.003 16.2933 15.683 17.1583 15.103 17.8373C13.533 19.6703 11.146 20.5753 8.00003 20.5753C4.85403 20.5753 2.46803 19.6703 0.902028 17.8353C0.322636 17.1567 0.00423557 16.2937 0.00402832 15.4013V14.8233C0.00429332 14.227 0.241326 13.6551 0.663038 13.2334C1.08475 12.8116 1.65664 12.5746 2.25303 12.5743H13.755ZM13.755 14.0743H2.25203C2.05312 14.0743 1.86235 14.1534 1.7217 14.294C1.58105 14.4347 1.50203 14.6254 1.50203 14.8243V15.4013C1.50203 15.9363 1.69403 16.4543 2.04203 16.8613C3.29503 18.3303 5.26203 19.0753 7.99903 19.0753C10.738 19.0753 12.705 18.3303 13.962 16.8623C14.3107 16.4546 14.5022 15.9358 14.502 15.3993V14.8233C14.5018 14.625 14.4229 14.4347 14.2827 14.2944C14.1425 14.154 13.9534 14.0749 13.755 14.0743ZM8.00003 0.579346C8.65664 0.579346 9.30682 0.708674 9.91344 0.959948C10.5201 1.21122 11.0713 1.57952 11.5356 2.04381C11.9999 2.5081 12.3682 3.0593 12.6194 3.66593C12.8707 4.27256 13 4.92274 13 5.57935C13 6.23596 12.8707 6.88613 12.6194 7.49276C12.3682 8.09939 11.9999 8.65059 11.5356 9.11488C11.0713 9.57917 10.5201 9.94747 9.91344 10.1987C9.30682 10.45 8.65664 10.5793 8.00003 10.5793C6.67395 10.5793 5.40218 10.0526 4.46449 9.11488C3.52681 8.1772 3.00003 6.90543 3.00003 5.57935C3.00003 4.25326 3.52681 2.98149 4.46449 2.04381C5.40218 1.10613 6.67395 0.579346 8.00003 0.579346ZM8.00003 2.07935C7.5404 2.07935 7.08528 2.16988 6.66064 2.34577C6.236 2.52166 5.85016 2.77947 5.52515 3.10447C5.20015 3.42948 4.94234 3.81531 4.76645 4.23995C4.59056 4.66459 4.50003 5.11972 4.50003 5.57935C4.50003 6.03897 4.59056 6.4941 4.76645 6.91874C4.94234 7.34338 5.20015 7.72921 5.52515 8.05422C5.85016 8.37922 6.236 8.63703 6.66064 8.81292C7.08528 8.98882 7.5404 9.07935 8.00003 9.07935C8.92829 9.07935 9.81852 8.7106 10.4749 8.05422C11.1313 7.39784 11.5 6.5076 11.5 5.57935C11.5 4.65109 11.1313 3.76085 10.4749 3.10447C9.81852 2.44809 8.92829 2.07935 8.00003 2.07935Z"
        fill="white"
      />
    </svg>
  ),

  payment: (props: IconProps) => (
    <svg {...props} width="22" height="19" viewBox="0 0 22 19">
      <path
        d="M13 16.0743C13 16.0743 14 16.0743 15 18.0743C15 18.0743 18.177 13.0743 21 12.0743M4.5 9.07434H4.491M10 17.0743H9.5C5.741 17.0743 3.862 17.0743 2.607 16.0843C2.40756 15.9264 2.2222 15.7514 2.053 15.5613C1 14.3813 1 12.6113 1 9.07434C1 5.53734 1 3.76834 2.053 2.58734C2.22167 2.39801 2.40633 2.22401 2.607 2.06534C3.862 1.07434 5.741 1.07434 9.5 1.07434H12.5C16.259 1.07434 18.138 1.07434 19.392 2.06434C19.5933 2.22434 19.7783 2.39867 19.947 2.58734C20.896 3.65134 20.99 5.19234 21 8.07434V8.57434"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 9.07434C13.5 9.73738 13.2366 10.3733 12.7678 10.8421C12.2989 11.3109 11.663 11.5743 11 11.5743C10.337 11.5743 9.70107 11.3109 9.23223 10.8421C8.76339 10.3733 8.5 9.73738 8.5 9.07434C8.5 8.4113 8.76339 7.77541 9.23223 7.30657C9.70107 6.83773 10.337 6.57434 11 6.57434C11.663 6.57434 12.2989 6.83773 12.7678 7.30657C13.2366 7.77541 13.5 8.4113 13.5 9.07434Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  logout: (props: IconProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
     
    >
      <path
        d="M12 3.25C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4C12.75 4.19891 12.671 4.38968 12.5303 4.53033C12.3897 4.67098 12.1989 4.75 12 4.75C10.0772 4.75 8.23311 5.51384 6.87348 6.87348C5.51384 8.23311 4.75 10.0772 4.75 12C4.75 13.9228 5.51384 15.7669 6.87348 17.1265C8.23311 18.4862 10.0772 19.25 12 19.25C12.1989 19.25 12.3897 19.329 12.5303 19.4697C12.671 19.6103 12.75 19.8011 12.75 20C12.75 20.1989 12.671 20.3897 12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C9.67936 20.75 7.45376 19.8281 5.81282 18.1872C4.17187 16.5462 3.25 14.3206 3.25 12C3.25 9.67936 4.17187 7.45376 5.81282 5.81282C7.45376 4.17187 9.67936 3.25 12 3.25Z"
        fill="white"
      />
      <path
        d="M16.47 9.53C16.3375 9.38782 16.2654 9.19978 16.2688 9.00548C16.2723 8.81118 16.351 8.62579 16.4884 8.48838C16.6258 8.35097 16.8112 8.27225 17.0055 8.26882C17.1998 8.2654 17.3878 8.33752 17.53 8.47L20.53 11.47C20.6705 11.6106 20.7493 11.8012 20.7493 12C20.7493 12.1988 20.6705 12.3894 20.53 12.53L17.53 15.53C17.4613 15.6037 17.3785 15.6628 17.2865 15.7038C17.1945 15.7448 17.0952 15.7668 16.9945 15.7686C16.8938 15.7704 16.7938 15.7518 16.7004 15.7141C16.607 15.6764 16.5222 15.6203 16.451 15.549C16.3797 15.4778 16.3236 15.393 16.2859 15.2996C16.2482 15.2062 16.2296 15.1062 16.2314 15.0055C16.2332 14.9048 16.2552 14.8055 16.2962 14.7135C16.3372 14.6215 16.3963 14.5387 16.47 14.47L18.19 12.75H10C9.80109 12.75 9.61032 12.671 9.46967 12.5303C9.32902 12.3897 9.25 12.1989 9.25 12C9.25 11.8011 9.32902 11.6103 9.46967 11.4697C9.61032 11.329 9.80109 11.25 10 11.25H18.19L16.47 9.53Z"
        fill="white"
      />
    </svg>
  ),
};
