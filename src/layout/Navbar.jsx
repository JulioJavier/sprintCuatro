import React from "react";
import { NavLink, useLocation, useNavigation } from "react-router-dom";

NavLink
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 flex w-screen h-10 justify-around items-center bg-white">
      <NavLink
        to="/"
        className={
          location.pathname === "/"
            ? "fill-yellow-1000"
            : "fill-black hover:fill-yellow-1000 "
        }
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.9999 14.9998C29.7915 14.9984 29.5887 14.932 29.4199 14.8098L15.9999 5.22978L2.5799 14.8098C2.3646 14.9373 2.10933 14.9795 1.86446 14.9279C1.61959 14.8764 1.40294 14.735 1.25726 14.5315C1.11158 14.3281 1.04747 14.0774 1.07758 13.829C1.10769 13.5806 1.22984 13.3525 1.4199 13.1898L15.4199 3.18978C15.5893 3.06919 15.792 3.00439 15.9999 3.00439C16.2078 3.00439 16.4105 3.06919 16.5799 3.18978L30.5799 13.1898C30.7506 13.3134 30.878 13.4878 30.9437 13.688C31.0094 13.8883 31.0101 14.1042 30.9458 14.305C30.8815 14.5057 30.7554 14.6809 30.5855 14.8057C30.4156 14.9305 30.2107 14.9984 29.9999 14.9998Z"
            fill="inherit"
          />
          <path
            d="M5 9C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8V4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H9C9.26522 3 9.51957 3.10536 9.70711 3.29289C9.89464 3.48043 10 3.73478 10 4C10 4.26522 9.89464 4.51957 9.70711 4.70711C9.51957 4.89464 9.26522 5 9 5H6V8C6 8.26522 5.89464 8.51957 5.70711 8.70711C5.51957 8.89464 5.26522 9 5 9Z"
            fill="inherit"
          />
          <path
            d="M25 29H20C19.7348 29 19.4804 28.8946 19.2929 28.7071C19.1054 28.5196 19 28.2652 19 28V21H13V28C13 28.2652 12.8946 28.5196 12.7071 28.7071C12.5196 28.8946 12.2652 29 12 29H7C6.20435 29 5.44129 28.6839 4.87868 28.1213C4.31607 27.5587 4 26.7956 4 26V16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15C5.26522 15 5.51957 15.1054 5.70711 15.2929C5.89464 15.4804 6 15.7348 6 16V26C6 26.2652 6.10536 26.5196 6.29289 26.7071C6.48043 26.8946 6.73478 27 7 27H11V20C11 19.7348 11.1054 19.4804 11.2929 19.2929C11.4804 19.1054 11.7348 19 12 19H20C20.2652 19 20.5196 19.1054 20.7071 19.2929C20.8946 19.4804 21 19.7348 21 20V27H25C25.2652 27 25.5196 26.8946 25.7071 26.7071C25.8946 26.5196 26 26.2652 26 26V16C26 15.7348 26.1054 15.4804 26.2929 15.2929C26.4804 15.1054 26.7348 15 27 15C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16V26C28 26.7956 27.6839 27.5587 27.1213 28.1213C26.5587 28.6839 25.7956 29 25 29Z"
            fill="inherit"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/search"
        className={
          location.pathname === "/search"
            ? "fill-yellow-1000"
            : "fill-black hover:fill-yellow-1000"
        }
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7925 3.2243C16.7133 1.14507 13.9489 0 11.0084 0C8.06792 0 5.30349 1.14507 3.2243 3.2243C1.14507 5.30349 0 8.06792 0 11.0084C0 13.9488 1.14507 16.7133 3.2243 18.7925C5.30349 20.8717 8.06797 22.0168 11.0084 22.0168C13.9488 22.0168 16.7133 20.8717 18.7925 18.7925C20.8717 16.7133 22.0168 13.9488 22.0168 11.0084C22.0168 8.06792 20.8717 5.30349 18.7925 3.2243ZM11.0084 19.9162C6.09654 19.9162 2.10052 15.9202 2.10052 11.0084C2.10052 6.09654 6.09659 2.10052 11.0084 2.10052C15.9202 2.10052 19.9162 6.09654 19.9162 11.0084C19.9162 15.9202 15.9202 19.9162 11.0084 19.9162Z"
            fill="inherit"
          />
          <path
            d="M24.0975 24.3822L17.8677 18.1526C17.4976 17.7825 16.8976 17.7825 16.5275 18.1526C16.1575 18.5226 16.1575 19.1227 16.5275 19.4927L22.7572 25.7224C22.9423 25.9075 23.1848 26 23.4274 26C23.6699 26 23.9124 25.9075 24.0975 25.7224C24.4675 25.3523 24.4675 24.7523 24.0975 24.3822Z"
            fill="inherit"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/orders"
        className={
          location.pathname === "/orders"
            ? "fill-yellow-1000"
            : "fill-black hover:fill-yellow-1000"
        }
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g path="url(#clip0_432_578)">
            <path
              d="M17.0002 28C16.735 28 16.4806 27.8947 16.2931 27.7071C16.1056 27.5196 16.0002 27.2652 16.0002 27C16.0002 26.7348 16.1056 26.4804 16.2931 26.2929C16.4806 26.1054 16.735 26 17.0002 26C19.2397 26.0004 21.4146 25.2489 23.1762 23.8662C24.9378 22.4834 26.1843 20.5493 26.7159 18.3738C27.2475 16.1983 27.0335 13.9073 26.1081 11.8679C25.1827 9.8285 23.5995 8.15877 21.6122 7.12625C19.6249 6.09373 17.3485 5.75818 15.1478 6.17337C12.9471 6.58856 10.9495 7.73045 9.47501 9.41608C8.00052 11.1017 7.13454 13.2335 7.01581 15.4699C6.89708 17.7062 7.53249 19.9177 8.82021 21.75C8.97204 21.9664 9.03202 22.2341 8.98704 22.4945C8.94207 22.755 8.7958 22.9871 8.58021 23.14C8.47273 23.2167 8.35112 23.2714 8.22239 23.3009C8.09366 23.3304 7.96036 23.3341 7.8302 23.3118C7.70003 23.2895 7.57558 23.2416 7.46402 23.1709C7.35246 23.1002 7.256 23.0082 7.18021 22.9C5.63504 20.7014 4.87255 18.0478 5.0149 15.3643C5.15725 12.6809 6.19621 10.1228 7.96531 8.10005C9.73441 6.07727 12.1313 4.70684 14.7719 4.20832C17.4125 3.70979 20.144 4.11203 22.5288 5.35058C24.9136 6.58912 26.8137 8.5923 27.9246 11.0392C29.0356 13.4861 29.293 16.235 28.6558 18.8456C28.0185 21.4562 26.5235 23.7774 24.4101 25.4372C22.2968 27.0971 19.6875 27.9995 17.0002 28Z"
              fill="inherit"
            />
            <path
              d="M9 24H4C3.73478 24 3.48043 23.8946 3.29289 23.7071C3.10536 23.5196 3 23.2652 3 23C3 22.7348 3.10536 22.4804 3.29289 22.2929C3.48043 22.1054 3.73478 22 4 22H8V18C8 17.7348 8.10536 17.4804 8.29289 17.2929C8.48043 17.1054 8.73478 17 9 17C9.26522 17 9.51957 17.1054 9.70711 17.2929C9.89464 17.4804 10 17.7348 10 18V23C10 23.2652 9.89464 23.5196 9.70711 23.7071C9.51957 23.8946 9.26522 24 9 24Z"
              fill="inherit"
            />
            <path
              d="M13.9999 20C13.8683 20.0008 13.7379 19.9755 13.616 19.9258C13.4942 19.876 13.3834 19.8027 13.2899 19.71C13.1962 19.617 13.1218 19.5064 13.071 19.3846C13.0203 19.2627 12.9941 19.132 12.9941 19C12.9941 18.868 13.0203 18.7373 13.071 18.6154C13.1218 18.4936 13.1962 18.383 13.2899 18.29L15.9999 15.59V11C15.9999 10.7348 16.1053 10.4804 16.2928 10.2929C16.4804 10.1054 16.7347 10 16.9999 10C17.2652 10 17.5195 10.1054 17.707 10.2929C17.8946 10.4804 17.9999 10.7348 17.9999 11V16C18.0007 16.1316 17.9755 16.2621 17.9257 16.3839C17.8759 16.5057 17.8026 16.6166 17.7099 16.71L14.7099 19.71C14.6165 19.8027 14.5057 19.876 14.3838 19.9258C14.262 19.9755 14.1315 20.0008 13.9999 20Z"
              fill="inherit"
            />
          </g>
          <defs>
            <clipPath id="clip0_432_578">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </NavLink>
      <NavLink
        to="/profile"
        className={
          location.pathname === "/profile"
            ? "fill-yellow-1000"
            : "fill-black hover:fill-yellow-1000"
        }
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16C17.3845 16 18.7378 15.5895 19.889 14.8203C21.0401 14.0511 21.9373 12.9579 22.4672 11.6788C22.997 10.3997 23.1356 8.99224 22.8655 7.63437C22.5954 6.2765 21.9287 5.02922 20.9497 4.05026C19.9708 3.07129 18.7235 2.4046 17.3656 2.13451C16.0078 1.86441 14.6003 2.00303 13.3212 2.53285C12.0421 3.06266 10.9489 3.95987 10.1797 5.11101C9.41054 6.26216 9 7.61553 9 9C9 10.8565 9.7375 12.637 11.0503 13.9497C12.363 15.2625 14.1435 16 16 16ZM16 4C16.9889 4 17.9556 4.29325 18.7779 4.84265C19.6001 5.39206 20.241 6.17296 20.6194 7.08659C20.9978 8.00022 21.0969 9.00555 20.9039 9.97545C20.711 10.9454 20.2348 11.8363 19.5355 12.5355C18.8363 13.2348 17.9454 13.711 16.9755 13.9039C16.0055 14.0969 15.0002 13.9978 14.0866 13.6194C13.173 13.241 12.3921 12.6001 11.8427 11.7779C11.2932 10.9556 11 9.98891 11 9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52679 14.6739 4 16 4Z"
            fill="inherit"
          />
          <path
            d="M17 18H15C12.0826 18 9.28473 19.1589 7.22183 21.2218C5.15893 23.2847 4 26.0826 4 29C4 29.2652 4.10536 29.5196 4.29289 29.7071C4.48043 29.8946 4.73478 30 5 30H27C27.2652 30 27.5196 29.8946 27.7071 29.7071C27.8946 29.5196 28 29.2652 28 29C28 26.0826 26.8411 23.2847 24.7782 21.2218C22.7153 19.1589 19.9174 18 17 18ZM6.06 28C6.3059 25.8006 7.35351 23.769 9.00268 22.2932C10.6518 20.8175 12.7869 20.0011 15 20H17C19.2131 20.0011 21.3482 20.8175 22.9973 22.2932C24.6465 23.769 25.6941 25.8006 25.94 28H6.06Z"
            fill="inherit"
          />
        </svg>
      </NavLink>
    </nav>
  );
};
export default Navbar;
