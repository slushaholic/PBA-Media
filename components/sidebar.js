import React from "react";
export default function SideBar() {
  return (
    <>
      <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-gray-600">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <svg width="48" height="48" viewBox="0 0 97 107" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_2_8" fill="white">
                <path d="M49.9325 0V8.88492C49.9658 8.88446 49.9988 8.88263 50.0321 8.88218C51.3122 8.86618 52.5921 8.90983 53.87 9.00009V0H49.9325ZM65.0033 3.29977L62.9276 4.79197L65.1599 8.18017L67.2357 6.68774L65.0033 3.29977ZM23.6543 7.23115L22.1926 11.0508L24.5324 12.0277L25.9938 8.20851L23.6543 7.23115ZM50.1471 12.9904C44.798 13.0512 39.5181 14.1767 34.4901 16.7698C31.7321 18.1924 27.5658 21.9508 24.9996 25.2005C24.0546 26.3974 23.3938 27.4916 23.0156 28.2777L80.3543 31.3535C80.0308 29.4877 79.3238 27.2603 78.2379 25.1678C76.3098 21.4514 73.3296 18.1757 70.7326 17.1768C64.0154 14.5937 57.0242 12.9123 50.1469 12.9904H50.1471ZM7.51691 16.3421L5.21719 17.4172L6.82522 21.1717L9.12559 20.0966L7.51713 16.3421H7.51691ZM37.4955 19.5328L37.7532 22.1514L33.8363 22.5719L33.5786 19.9531L37.4955 19.5326V19.5328ZM93.3538 21.6416L90.953 24.902L92.9504 26.5064L95.3512 23.2467L93.3538 21.6416ZM20.2029 32.2463C16.2041 33.4588 14.385 35.8696 13.1712 38.9973C12.2887 41.2715 11.8597 43.8643 11.4664 46.4074C13.7692 46.3386 16.7239 46.2957 20.1902 46.2822C27.5741 46.2532 37.1525 46.3535 46.9361 46.6053C56.7197 46.8569 66.7041 47.2593 74.9112 47.8384C80.113 48.2054 84.4891 48.5879 87.8183 49.1215C87.6131 47.074 87.5383 45.1401 87.1933 43.3814C86.6322 40.5211 85.5778 38.073 82.1082 35.5664L20.2029 32.2461V32.2463ZM78.3053 37.166L80.6551 38.1162L79.2337 41.9523L76.8843 41.0021L78.3053 37.166ZM9.73066 37.1749L6.02131 38.5552L6.86678 41.0346L10.5761 39.6548L9.73066 37.1749ZM27.6889 39.7873L28.7182 42.1892L25.1241 43.8702L24.0951 41.4667L27.6892 39.7871L27.6889 39.7873ZM23.0565 50.3904C22.0741 50.39 21.1221 50.3918 20.2051 50.3955C16.5364 50.4099 13.4194 50.4567 11.1217 50.5319C9.97281 50.5696 9.02759 50.6144 8.33613 50.664C7.65734 50.7127 7.119 50.813 7.23669 50.7782L7.23297 50.7791C6.47762 50.9866 5.76559 51.6217 5.16797 52.7711C4.57034 53.9205 4.17266 55.5149 4.09916 57.1143C4.02544 58.7137 4.27788 60.3112 4.77072 61.4623C5.24103 62.561 5.83625 63.1843 6.59422 63.4677C26.2675 66.009 47.7785 67.1541 65.3586 67.3863C66.3309 60.8805 69.3114 54.9943 74.7924 55.3705C82.5029 55.8997 81.6598 61.8489 81.6288 67.3269C86.1525 67.2218 90.0874 67.0419 93.2385 66.8008L93.2494 66.7999L93.2603 66.7995C94.1782 66.7398 94.516 66.408 94.9338 65.3984C95.3514 64.3886 95.5255 62.7241 95.3194 61.0023C95.1136 59.2804 94.547 57.5067 93.7993 56.2382C93.0517 54.9697 92.2068 54.3147 91.506 54.1863L91.3432 54.1566L91.1877 54.099C89.3014 53.3998 82.761 52.515 74.6458 51.9423C66.5308 51.3696 56.5852 50.9679 46.839 50.7172C38.3112 50.4978 29.9331 50.3936 23.0565 50.3904ZM49.1636 56.4123L52.82 57.939L51.8844 60.3832L48.2285 58.8563L49.1636 56.4123ZM8.64675 67.8705C8.13881 69.8543 8.19569 72.0715 8.79703 74.0292C9.65716 76.829 11.4614 78.9346 14.0188 79.5088C40.2189 83.6749 65.273 84.7453 89.4957 83.5307C91.1216 80.8881 91.9951 77.7355 91.8656 75.1309C91.7822 73.4506 91.39 72.0951 90.6231 71.0944C73.0675 72.115 39.1573 71.6051 8.64653 67.8705H8.64675ZM21.7858 74.6437L24.1351 75.5941L22.7141 79.4302L20.3639 78.48L21.7858 74.644V74.6437ZM84.3073 79.0381L86.0103 80.9777L83.1084 83.7578L81.4054 81.818L84.3073 79.0378V79.0381ZM3.70891 81.8479L0 83.2281L0.84525 85.7075L4.55459 84.3278L3.70891 81.8479ZM17.7815 84.2405C18.2597 85.2014 18.695 86.1335 19.1531 86.9904C20.3857 89.2961 21.6713 91.1183 24.5954 92.4958C36.2825 98.0019 46.622 99.9427 59.5411 99.3088L58.875 99.0309L59.8106 96.5863L63.4666 98.1132L63.0984 99.0752C64.2447 98.9822 65.4098 98.873 66.6013 98.7443C70.4552 98.3275 74.1519 96.081 76.9385 93.3532C78.7327 91.5968 80.0544 89.627 80.8773 88.0288L80.4843 87.9982C65.6226 88.3807 50.4337 87.8823 34.8604 86.3375L36.0187 86.8058L34.5975 90.6419L32.2472 89.6919L33.5394 86.2066C28.2743 85.6652 23.0206 85.0098 17.7815 84.2407V84.2405ZM3.89178 88.9445L1.491 92.2047L3.48819 93.8098L5.88897 90.5493L3.89178 88.9445ZM95.6305 92.9622L93.2453 93.8112L94.5151 97.7048L96.9003 96.8559L95.6305 92.962V92.9622ZM78.3895 100.499L76.9278 104.319L79.2676 105.296L80.729 101.476L78.3895 100.499ZM25.5524 103L24.6428 105.455L28.3146 106.94L29.2241 104.485L25.5524 103Z" />
              </mask>
              <path d="M49.9325 0V8.88492C49.9658 8.88446 49.9988 8.88263 50.0321 8.88218C51.3122 8.86618 52.5921 8.90983 53.87 9.00009V0H49.9325ZM65.0033 3.29977L62.9276 4.79197L65.1599 8.18017L67.2357 6.68774L65.0033 3.29977ZM23.6543 7.23115L22.1926 11.0508L24.5324 12.0277L25.9938 8.20851L23.6543 7.23115ZM50.1471 12.9904C44.798 13.0512 39.5181 14.1767 34.4901 16.7698C31.7321 18.1924 27.5658 21.9508 24.9996 25.2005C24.0546 26.3974 23.3938 27.4916 23.0156 28.2777L80.3543 31.3535C80.0308 29.4877 79.3238 27.2603 78.2379 25.1678C76.3098 21.4514 73.3296 18.1757 70.7326 17.1768C64.0154 14.5937 57.0242 12.9123 50.1469 12.9904H50.1471ZM7.51691 16.3421L5.21719 17.4172L6.82522 21.1717L9.12559 20.0966L7.51713 16.3421H7.51691ZM37.4955 19.5328L37.7532 22.1514L33.8363 22.5719L33.5786 19.9531L37.4955 19.5326V19.5328ZM93.3538 21.6416L90.953 24.902L92.9504 26.5064L95.3512 23.2467L93.3538 21.6416ZM20.2029 32.2463C16.2041 33.4588 14.385 35.8696 13.1712 38.9973C12.2887 41.2715 11.8597 43.8643 11.4664 46.4074C13.7692 46.3386 16.7239 46.2957 20.1902 46.2822C27.5741 46.2532 37.1525 46.3535 46.9361 46.6053C56.7197 46.8569 66.7041 47.2593 74.9112 47.8384C80.113 48.2054 84.4891 48.5879 87.8183 49.1215C87.6131 47.074 87.5383 45.1401 87.1933 43.3814C86.6322 40.5211 85.5778 38.073 82.1082 35.5664L20.2029 32.2461V32.2463ZM78.3053 37.166L80.6551 38.1162L79.2337 41.9523L76.8843 41.0021L78.3053 37.166ZM9.73066 37.1749L6.02131 38.5552L6.86678 41.0346L10.5761 39.6548L9.73066 37.1749ZM27.6889 39.7873L28.7182 42.1892L25.1241 43.8702L24.0951 41.4667L27.6892 39.7871L27.6889 39.7873ZM23.0565 50.3904C22.0741 50.39 21.1221 50.3918 20.2051 50.3955C16.5364 50.4099 13.4194 50.4567 11.1217 50.5319C9.97281 50.5696 9.02759 50.6144 8.33613 50.664C7.65734 50.7127 7.119 50.813 7.23669 50.7782L7.23297 50.7791C6.47762 50.9866 5.76559 51.6217 5.16797 52.7711C4.57034 53.9205 4.17266 55.5149 4.09916 57.1143C4.02544 58.7137 4.27788 60.3112 4.77072 61.4623C5.24103 62.561 5.83625 63.1843 6.59422 63.4677C26.2675 66.009 47.7785 67.1541 65.3586 67.3863C66.3309 60.8805 69.3114 54.9943 74.7924 55.3705C82.5029 55.8997 81.6598 61.8489 81.6288 67.3269C86.1525 67.2218 90.0874 67.0419 93.2385 66.8008L93.2494 66.7999L93.2603 66.7995C94.1782 66.7398 94.516 66.408 94.9338 65.3984C95.3514 64.3886 95.5255 62.7241 95.3194 61.0023C95.1136 59.2804 94.547 57.5067 93.7993 56.2382C93.0517 54.9697 92.2068 54.3147 91.506 54.1863L91.3432 54.1566L91.1877 54.099C89.3014 53.3998 82.761 52.515 74.6458 51.9423C66.5308 51.3696 56.5852 50.9679 46.839 50.7172C38.3112 50.4978 29.9331 50.3936 23.0565 50.3904ZM49.1636 56.4123L52.82 57.939L51.8844 60.3832L48.2285 58.8563L49.1636 56.4123ZM8.64675 67.8705C8.13881 69.8543 8.19569 72.0715 8.79703 74.0292C9.65716 76.829 11.4614 78.9346 14.0188 79.5088C40.2189 83.6749 65.273 84.7453 89.4957 83.5307C91.1216 80.8881 91.9951 77.7355 91.8656 75.1309C91.7822 73.4506 91.39 72.0951 90.6231 71.0944C73.0675 72.115 39.1573 71.6051 8.64653 67.8705H8.64675ZM21.7858 74.6437L24.1351 75.5941L22.7141 79.4302L20.3639 78.48L21.7858 74.644V74.6437ZM84.3073 79.0381L86.0103 80.9777L83.1084 83.7578L81.4054 81.818L84.3073 79.0378V79.0381ZM3.70891 81.8479L0 83.2281L0.84525 85.7075L4.55459 84.3278L3.70891 81.8479ZM17.7815 84.2405C18.2597 85.2014 18.695 86.1335 19.1531 86.9904C20.3857 89.2961 21.6713 91.1183 24.5954 92.4958C36.2825 98.0019 46.622 99.9427 59.5411 99.3088L58.875 99.0309L59.8106 96.5863L63.4666 98.1132L63.0984 99.0752C64.2447 98.9822 65.4098 98.873 66.6013 98.7443C70.4552 98.3275 74.1519 96.081 76.9385 93.3532C78.7327 91.5968 80.0544 89.627 80.8773 88.0288L80.4843 87.9982C65.6226 88.3807 50.4337 87.8823 34.8604 86.3375L36.0187 86.8058L34.5975 90.6419L32.2472 89.6919L33.5394 86.2066C28.2743 85.6652 23.0206 85.0098 17.7815 84.2407V84.2405ZM3.89178 88.9445L1.491 92.2047L3.48819 93.8098L5.88897 90.5493L3.89178 88.9445ZM95.6305 92.9622L93.2453 93.8112L94.5151 97.7048L96.9003 96.8559L95.6305 92.962V92.9622ZM78.3895 100.499L76.9278 104.319L79.2676 105.296L80.729 101.476L78.3895 100.499ZM25.5524 103L24.6428 105.455L28.3146 106.94L29.2241 104.485L25.5524 103Z" fill="#FFF200" stroke="black" stroke-width="2" mask="url(#path-1-inside-1_2_8)" />
            </svg>
            <h1 className="font-bold text-gray-200 text-[30px] ml-6">Hive</h1>
          </div>
          <div className="my-2 bg-white h-[1px]" />
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" /></svg>
          <ul>
            <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/'>Home</a></li>
          </ul>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <ul>
            <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/profile'>Profile</a></li>
          </ul>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" /></svg>
          <ul>
            <i className="bi bi-house-door-fill" />
            <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/directmessage'>Messages</a></li>
          </ul>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" /></svg>
          <ul>
            <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/about'>About Us</a></li>
          </ul>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" /></svg>
          <ul>
            <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/'>Share Post</a></li>
          </ul>
        </div>
        <div className="absolute bottom-10 left-0">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <ul>
              <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/login'>Login</a></li>
            </ul>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

            <ul>
              <li><a className="text-[25px] ml-4 text-gray-200 font-bold" href='/register'>Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}