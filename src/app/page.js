import Image from 'next/image'
// import video from '../../login.mp4'

export default function Home() {
  return (
    <div className='relative flex flex-col items-center justify-between h-full w-full overflow-hidden md:rounded-lg login-container'>
      {/* <video className='w-full h-full' autoPlay loop muted src={'../../login.mp4'} /> */}
      <video className='object-cover h-full	w-full' src='/login.mp4' autoPlay loop muted type='video/mp4' />
      <div className='absolute z-20 flex flex-col items-center justify-between mt-32'>
        <svg className='w-24' viewBox='-114.507 0 331.888 125.996' width='331.888' height='45.996'>
          <g fill='white' id='g14' transform='matrix(1, 0, 0, 1, -114.619141, 0)'>
            <path
              d='M 87.482 48.091 C 85.811 48.997 84.078 49.785 82.295 50.448 C 78.449 51.832 74.471 52.55 70.402 52.818 C 69.522 52.874 68.638 52.891 67.756 52.95 C 64.601 53.162 60.811 37.454 66.369 37.169 C 66.972 37.138 75.959 36.954 76.858 36.856 C 82.863 36.2 87.212 33.22 89.854 27.798 C 90.203 27.081 90.511 27.022 91.207 27.296 C 94.871 28.738 98.555 30.135 102.242 31.519 C 102.809 31.731 103.053 31.989 103.051 32.639 C 103.032 52.294 103.032 71.949 103.051 91.604 C 103.051 92.344 102.829 92.522 102.12 92.518 C 97.604 92.488 93.084 92.503 88.572 92.502 C 87.61 92.502 87.607 92.502 87.607 91.498 C 87.607 77.36 87.607 63.221 87.607 49.083 C 87.605 48.79 87.678 48.476 87.482 48.091 Z'
              id='path4'></path>
            <path
              d='m 239.097,87.3385 c -0.205,-0.0531 -0.312,0.1004 -0.431,0.1994 -4.625,3.6675 -9.896,5.6884 -15.777,6.1373 -6.215,0.4748 -12.201,-0.4374 -17.834,-3.1669 -8.012,-3.8841 -13.058,-10.2953 -15.618,-18.739 -1.459,-4.825 -1.852,-9.7704 -1.484,-14.7962 0.407,-5.5823 1.805,-10.8619 4.703,-15.6826 4.472,-7.4368 11.095,-11.8716 19.49,-13.7692 2.891,-0.6545 5.853,-0.9403 8.815,-0.8505 7.482,0.2237 14.029,2.7682 19.507,7.9345 0.136,0.1305 0.28,0.2524 0.477,0.4303 0.34,-0.8233 0.345,-1.6595 0.491,-2.4598 0.241,-1.3124 0.43,-2.6334 0.62,-3.9558 0.081,-0.5737 0.286,-0.8462 0.949,-0.8405 3.679,0.0373 7.358,0.0315 11.044,0 0.648,0 0.861,0.1793 0.861,0.8434 0.018,22.1612 0.143,44.3196 0.05,66.4823 -0.037,9.4078 -3.586,17.3898 -10.934,23.4778 -4.016,3.329 -8.694,5.33 -13.776,6.366 -6.975,1.421 -13.957,1.533 -20.829,-0.52 -9.339,-2.789 -16.17,-8.581 -20.322,-17.445 -0.339,-0.739 -0.61,-1.507 -0.811,-2.295 -0.103,-0.389 0,-0.605 0.431,-0.717 4.302,-1.181 8.601,-2.376 12.895,-3.586 0.346,-0.097 0.525,-0.043 0.631,0.327 1.333,4.657 4.527,7.651 8.791,9.6 3.279,1.499 6.77,1.888 10.356,1.652 3.099,-0.203 6.113,-0.748 8.934,-2.088 5.511,-2.616 8.58,-6.938 8.854,-13.0707 0.132,-2.9805 0.044,-5.9695 0.051,-8.9543 -0.017,-0.1621 0.038,-0.3686 -0.134,-0.5135 z m 0.517,-27.6818 c 0.036,-1.0614 -0.127,-2.6492 -0.461,-4.2169 -1.211,-5.6626 -4.229,-9.9726 -9.564,-12.4468 -3.873,-1.7957 -7.969,-2.0955 -12.119,-1.3396 -5.677,1.0356 -9.956,4.0863 -12.403,9.3602 -2.526,5.4417 -2.641,11.0928 -0.699,16.7282 1.736,5.0358 5.198,8.4881 10.234,10.2939 3.066,1.1001 6.24,1.3181 9.466,0.928 5.178,-0.6268 9.388,-2.9389 12.351,-7.2948 2.336,-3.4466 3.197,-7.3407 3.197,-12.0065 z'
              id='path6'></path>
            <path
              d='m 281.179,65.7194 c 0.338,1.5965 0.941,3.1251 1.784,4.5223 2.734,4.6199 6.83,7.335 12.048,8.2946 5.02,0.9236 9.947,0.5579 14.63,-1.6208 2.747,-1.2765 5.007,-3.2272 7.103,-5.38 0.196,-0.2008 0.35,-0.4576 0.694,-0.5651 l 10.027,10.2853 c 0.173,0.0731 0,0.1893 -0.125,0.3227 -5.059,5.3456 -11.005,9.1981 -18.271,10.8203 -4.576,1.0126 -9.275,1.3442 -13.947,0.9839 -5.251,-0.3858 -10.192,-1.7971 -14.711,-4.5252 -7.149,-4.3186 -11.576,-10.6697 -13.729,-18.6673 -0.996,-3.7428 -1.421,-7.6146 -1.26,-11.4844 0.265,-7.1198 2.074,-13.7692 6.372,-19.568 4.447,-6.0097 10.435,-9.7375 17.662,-11.4357 7.351,-1.7211 14.67,-1.4343 21.801,1.0786 10.38,3.6517 16.839,10.9738 19.56,21.5804 1.222,4.7576 1.535,9.5954 0.763,14.4792 -0.109,0.6885 -0.346,0.8936 -1.041,0.8921 -16.106,-0.0191 -32.211,-0.0234 -48.316,-0.0129 z m 0.348,-12.6002 h 34.224 c 0.121,-0.2138 0.027,-0.3443 -0.019,-0.4734 -1.595,-4.4936 -4.488,-7.8341 -8.846,-9.8335 -3.556,-1.6322 -7.307,-1.9592 -11.142,-1.4673 -4.334,0.5537 -8.032,2.3853 -10.901,5.7214 -1.521,1.762 -2.651,3.8264 -3.316,6.0571 z'
              id='path8'></path>
            <path
              d='m 133.361,34.4346 c 0.479,-0.4302 0.963,-0.8792 1.465,-1.308 3.938,-3.3735 8.424,-5.6899 13.593,-6.2536 7.678,-0.8376 14.478,1.2909 20.033,6.7986 4.264,4.2269 6.57,9.4792 7.699,15.3039 0.54,2.7768 0.667,5.5851 0.667,8.405 0,11.3175 0,22.636 0,33.9554 0,1.1718 0,1.1733 -1.167,1.1733 h -13.339 c -1.102,0 -1.105,0 -1.105,-1.0887 0,-11.1999 0,-22.3993 0,-33.5983 0,-2.6348 -0.169,-5.2423 -0.928,-7.7868 -1.529,-5.1261 -5.473,-8.2758 -10.803,-8.7104 -2.233,-0.1807 -4.446,-0.1693 -6.616,0.3614 -4.458,1.0858 -7.137,4.0074 -8.444,8.3089 -0.78,2.5659 -0.928,5.2022 -0.928,7.8585 0,11.1291 0,22.2569 0,33.3831 0,1.5778 -0.064,1.2651 -1.291,1.268 -4.419,0.0129 -8.839,0 -13.26,0 -0.939,0 -0.942,0 -0.942,-0.9553 0,-20.9187 0,-41.8369 0,-62.7546 0,-0.9897 0,-0.9925 0.978,-0.9925 h 12.4 c 1.067,0 1.052,0 1.164,1.0413 0.19,1.7541 0.398,3.5054 0.598,5.2581 0.003,0.0709 0.026,0.1397 0.065,0.1985 0.04,0.0589 0.096,0.1053 0.161,0.1342 z'
              id='path10'></path>
            <path
              d='M 86.7403,9.25846 C 86.7561,4.07636 90.9098,-0.0228528 96.1249,9.58848e-5 101.238,0.0216103 105.346,4.21405 105.326,9.3775 c -0.017,2.4646 -1.012,4.8217 -2.766,6.5527 -1.754,1.7311 -4.1247,2.6942 -6.5893,2.6777 C 93.5061,18.5913 91.149,17.5964 89.418,15.842 87.687,14.0876 86.7238,11.7173 86.7403,9.25272 Z'
              id='path12'></path>
            <path
              d='M 67.406 53.03 C 67.388 57.581 65.955 68.324 63.757 73.968 C 63.041 75.806 61.504 78.788 59.867 80.767 C 56.624 84.687 52.787 87.253 52.746 87.287 C 48.121 90.954 41.059 92.321 35.178 92.77 C 28.963 93.245 22.977 92.333 17.344 89.603 C 9.332 85.719 4.286 79.308 1.726 70.864 C 0.267 66.039 -0.126 61.094 0.242 56.068 C 0.649 50.486 0.164 11.006 0.281 1.687 C 0.29 1.007 15.129 1.224 15.134 1.612 C 15.215 7.728 15.344 26.383 15.156 32.187 C 15.052 35.412 20.131 32.03 23.294 30.59 C 26.164 29.283 31.974 27.987 34.936 28.077 C 42.418 28.3 47.279 30.534 52.757 35.7 C 52.893 35.831 54.633 37.057 55.296 37.071 C 58.979 37.146 62.582 37.075 66.34 37.071 C 66.988 37.07 67.201 37.251 67.201 37.915 C 67.219 60.076 67.499 30.867 67.406 53.03 Z M 51.903 58.752 C 51.939 57.69 51.776 56.102 51.442 54.535 C 50.231 48.872 47.213 46.562 41.878 44.088 C 38.005 42.292 33.909 41.992 29.759 42.748 C 24.082 43.784 19.803 46.835 17.356 52.109 C 14.83 57.55 14.715 61.201 16.657 66.837 C 18.393 71.873 21.906 74.16 26.942 75.966 C 30.008 77.066 33.187 76.894 36.413 76.504 C 41.591 75.877 45.745 75.12 48.708 70.764 C 51.044 67.317 51.905 63.423 51.905 58.757 L 51.903 58.752 Z'
              id='path-1'></path>
          </g>
        </svg>
        <p className='font-bold text-lg text-white'>Designed by an idiot.</p>
      </div>
      <div className='absolute z-20 flex flex-col items-center justify-between mt-32 p-6 bottom-2 text-center	text-white text-xs'>
        <p>
          By tapping Log in, you agree to our <strong>Terms of Service</strong>. Learn how we collect, abuse and
          profiteer using your data in our <strong>Data Policy</strong> and <strong>Cookies Policy</strong>.
        </p>
        <a className='btn mt-4 w-full' href='https://giphy.com/clips/Rin3bJMT1guHPZes5u'>
          Log in
        </a>
      </div>
    </div>
  )
}
