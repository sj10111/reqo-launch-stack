import React from "react";
import {motion} from 'framer-motion'

function StatusBar() {
  return (
    <div className="bg-[#FFDC61] w-[789px]  fixed h-[126px] rounded-[49px] flex justify-center items-center">
      <div className=" absolute left-[150px] -z-10 ">
        <div className="absolute top-[px]">
          <svg
            width="47"
            height="44"
            viewBox="0 0 47 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M45.4242 33.342L46.041 34.7093L43.3064 35.9429L42.6896 34.5756L45.4242 33.342ZM28.2985 2.67617C27.9579 1.92103 28.2939 1.0327 29.049 0.692033C29.8041 0.351362 30.6925 0.687354 31.0331 1.44249L28.2985 2.67617ZM42.6896 34.5756L28.2985 2.67617L31.0331 1.44249L45.4242 33.342L42.6896 34.5756Z"
              fill="#3263F3"
              strokeWidth="12"
              
            />
            <motion.path
              d="M35.4009 39.8627L36.7992 40.4055L35.7137 43.2022L34.3153 42.6594L35.4009 39.8627ZM1.6913 29.9965C0.91901 29.6967 0.53595 28.8276 0.835714 28.0554C1.13548 27.2831 2.00455 26.9 2.77684 27.1998L1.6913 29.9965ZM34.3153 42.6594L1.6913 29.9965L2.77684 27.1998L35.4009 39.8627L34.3153 42.6594Z"
              fill="#3263F3"
            
            />
            <motion.path
            
              d="M31.5858 32.3511L32.6038 33.4528L34.8071 31.4168L33.7891 30.3151L31.5858 32.3511ZM20.9445 16.415C20.3822 15.8066 19.4332 15.7691 18.8248 16.3313C18.2164 16.8936 18.1789 17.8426 18.7411 18.451L20.9445 16.415ZM33.7891 30.3151L20.9445 16.415L18.7411 18.451L31.5858 32.3511L33.7891 30.3151Z"
              fill="#3263F3"
              initial={{pathLength:0}}
              animate={{pathLength:1}}
              transition={{delay:10}}
            />
          </svg>
        </div>
        <svg
          width="94"
          height="108"
          viewBox="0 0 94 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M5.96631 52.9586L62.4753 6.00775L5.6717 79.0342L88.6706 15.7612L25.7733 101.991"
            stroke="white"
            stroke-width="10.4146"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial={{pathLength:0,opacity:0}}
            animate={{pathLength:1,opacity:1}}
            transition={{duration:1,delay:2}}
            

          />
        </svg>
      </div>
      <div className="text-[48px] mt-1 font-basic-sans tracking-tighter font-[500]">
        We’re launching soon.
      </div>
      <div className="absolute left-[563px] top-[71px] z-[-10]">
        <svg
          width="62"
          height="31"
          viewBox="0 0 62 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M59 3L3 27"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial={{pathLength:0,opacity:0}}
            animate={{pathLength:1,opacity:1}}
            transition={{duration:1,delay:2}}
          />
          <path
            d="M57 13L22 28"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial={{pathLength:0,opacity:0}}
            animate={{pathLength:1,opacity:1}}
            transition={{duration:1,delay:2}}
          />
        </svg>
      </div>
      <div className="absolute left-[580px] top-[-18px]">
        <svg
          width="146"
          height="185"
          viewBox="0 0 146 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.6649 46.2109C30.8267 46.4248 30.9438 46.6691 31.0094 46.9292C31.075 47.1893 31.0877 47.4599 31.0468 47.725C31.0059 47.9901 30.9122 48.2443 30.7712 48.4726C30.6303 48.7008 30.4449 48.8984 30.2262 49.0537L26.8391 51.6114L29.2902 54.8574C29.5035 55.057 29.6706 55.3009 29.7798 55.572C29.8889 55.843 29.9375 56.1346 29.9221 56.4264C29.9067 56.7182 29.8276 57.0031 29.6905 57.2611C29.5534 57.5192 29.3616 57.7441 29.1284 57.9202C28.8952 58.0963 28.6263 58.2192 28.3406 58.2805C28.0549 58.3417 27.7593 58.3397 27.4744 58.2747C27.1896 58.2096 26.9224 58.0831 26.6916 57.9039C26.4607 57.7248 26.2719 57.4973 26.1383 57.2374L23.6871 53.9914L20.5822 56.336C20.3707 56.5055 20.1279 56.6317 19.8676 56.7074C19.6072 56.7831 19.3346 56.8067 19.0651 56.7769C18.7957 56.7471 18.5347 56.6645 18.2972 56.5339C18.0597 56.4032 17.8503 56.227 17.6809 56.0153C17.3602 55.5651 17.2278 55.0075 17.3118 54.4612C17.3959 53.9149 17.6899 53.4229 18.1311 53.09L21.236 50.7454L18.7849 47.4994C18.5716 47.2997 18.4045 47.0558 18.2953 46.7848C18.1862 46.5137 18.1376 46.2221 18.153 45.9303C18.1684 45.6385 18.2474 45.3536 18.3845 45.0956C18.5216 44.8376 18.7135 44.6126 18.9467 44.4366C19.1799 44.2605 19.4487 44.1375 19.7344 44.0763C20.0201 44.0151 20.3158 44.017 20.6006 44.0821C20.8855 44.1471 21.1527 44.2737 21.3835 44.4528C21.6143 44.632 21.8032 44.8595 21.9368 45.1193L24.3879 48.3653L27.7751 45.8076C28.2118 45.4779 28.7616 45.3351 29.3035 45.4107C29.8455 45.4864 30.3352 45.7742 30.6649 46.2109V46.2109Z"
            fill="#0043FF"
          />
          <path
            d="M29.4121 58.2373C29.1259 58.4738 28.7942 58.6489 28.4375 58.752C28.0808 58.855 27.7068 58.8837 27.3386 58.8363C26.9703 58.7888 26.6158 58.6663 26.2968 58.4762C25.9779 58.2862 25.7014 58.0326 25.4844 57.7313L23.4951 55.0969L21.0489 56.9441C20.7593 57.1726 20.427 57.341 20.0715 57.4394C19.716 57.5377 19.3445 57.5641 18.9786 57.517C18.6128 57.4699 18.2601 57.3502 17.9411 57.1649C17.6221 56.9797 17.3434 56.7326 17.1212 56.4382C16.6874 55.8382 16.5061 55.0921 16.6161 54.36C16.7262 53.6279 17.1187 52.968 17.7097 52.522L20.1559 50.6748L18.1311 47.9933C17.8118 47.41 17.713 46.7313 17.8527 46.0811C17.9924 45.431 18.3612 44.8528 18.8919 44.4521C19.4226 44.0513 20.0797 43.8548 20.7432 43.8985C21.4068 43.9421 22.0325 44.2229 22.5061 44.6896L24.531 47.3711L27.3536 45.2397C27.94 44.7969 28.6783 44.6052 29.4061 44.7067C30.1338 44.8083 30.7915 45.1947 31.2343 45.7812C31.4581 46.0645 31.6231 46.3898 31.7195 46.7378C31.8159 47.0858 31.8419 47.4495 31.7958 47.8077C31.7498 48.1659 31.6326 48.5112 31.4513 48.8235C31.27 49.1358 31.0281 49.4087 30.7399 49.6263L27.9172 51.7577L29.9065 54.3921C30.1304 54.6755 30.2953 55.0008 30.3918 55.3488C30.4882 55.6968 30.5142 56.0605 30.4681 56.4187C30.4221 56.7769 30.3049 57.1222 30.1236 57.4345C29.9423 57.7468 29.7004 58.0197 29.4121 58.2373V58.2373ZM18.5977 53.6981C18.3185 53.9085 18.1314 54.2186 18.0754 54.5637C18.0194 54.9088 18.0989 55.2622 18.2972 55.5501C18.5309 55.7648 18.8351 55.8864 19.1523 55.8918C19.4695 55.8973 19.7778 55.7863 20.0187 55.5799L23.6881 52.809L26.5655 56.6196C26.6468 56.7953 26.7664 56.9507 26.9155 57.0742C27.0647 57.1977 27.2396 57.2862 27.4275 57.3332C27.6153 57.3803 27.8113 57.3847 28.0011 57.3461C28.1909 57.3075 28.3696 57.2269 28.5241 57.1102C28.6787 56.9935 28.8051 56.8436 28.8942 56.6717C28.9832 56.4997 29.0327 56.31 29.0388 56.1165C29.045 55.9229 29.0077 55.7304 28.9298 55.5532C28.8518 55.3759 28.7352 55.2183 28.5884 55.0921L25.711 51.2815L29.7097 48.262C29.8436 48.1611 29.9556 48.0341 30.0389 47.8887C30.1223 47.7432 30.1752 47.5823 30.1945 47.4158C30.2138 47.2492 30.1991 47.0805 30.1512 46.9198C30.1034 46.7592 30.0234 46.6099 29.9161 46.4811C29.7151 46.2143 29.419 46.0354 29.0893 45.9816C28.7597 45.9278 28.422 46.0032 28.1466 46.1921L24.1479 49.2116L21.3771 45.5422C21.1526 45.349 20.8687 45.2385 20.5726 45.2291C20.2766 45.2197 19.9862 45.3119 19.7498 45.4904C19.5134 45.6689 19.3453 45.9229 19.2733 46.2102C19.2013 46.4975 19.2299 46.8008 19.3542 47.0697L22.2671 50.9273L18.5977 53.6981Z"
            fill="#0043FF"
          />
          <motion.path
            d="M36.2657 42.2958L37.8496 41.5383L39.4332 40.781L41.0161 40.0243L42.5979 39.2682L44.1784 38.5132L45.7571 37.7594L47.3338 37.0072L48.908 36.2566L50.4795 35.5081L52.0479 34.7617L53.6128 34.0179L55.174 33.2768L56.731 32.5387L58.2836 31.8037L59.8313 31.0723L61.3739 30.3445L62.9111 29.6207L64.4424 28.9011L65.9676 28.1859L67.4863 27.4753L68.9982 26.7697L70.5029 26.0692L72.0002 25.3741L73.4897 24.6846L74.9711 24.0009L76.4441 23.3233L77.9083 22.652L79.3635 21.9872L80.8093 21.3292L82.2454 20.6782L83.6715 20.0343L85.0873 19.3979L86.4925 18.7692L87.8867 18.1482L89.2698 17.5354L90.6413 16.9309L92.0011 16.3348L93.3488 15.7475L94.684 15.1691L96.0066 14.5998L97.3163 14.0398L98.6128 13.4893L99.8957 12.9486L101.165 12.4178L102.42 11.8971L103.661 11.3867L104.887 10.8868L106.099 10.3976L107.295 9.91923L108.476 9.45191L109.641 8.9958L110.791 8.55109L111.925 8.11794L113.042 7.69652L114.143 7.287L115.227 6.88955L116.294 6.50432L117.344 6.13147L118.376 5.77116L119.391 5.42353L120.388 5.08874L121.367 4.76692L122.328 4.45823L123.27 4.16279L124.194 3.88075L125.099 3.61224L125.985 3.35738L126.852 3.1163L127.7 2.88913L128.528 2.67597L129.336 2.47694L130.125 2.29217L130.894 2.12175L131.643 1.96579L132.371 1.82438L133.079 1.69763L133.767 1.58564L134.434 1.48848L135.081 1.40625L135.706 1.33903L136.311 1.28689L136.894 1.24992L137.457 1.22818L137.998 1.22174L138.518 1.23067L139.016 1.25503L139.493 1.29486L139.948 1.35024L140.382 1.42119L140.794 1.50777L141.184 1.61002L141.553 1.72798L141.899 1.86168L142.224 2.01114L142.527 2.1764L142.808 2.35747L143.067 2.55438L143.304 2.76713L143.518 2.99574L143.711 3.24021L143.882 3.50054L144.031 3.77674L144.157 4.06879L144.262 4.37669L144.345 4.70042L144.406 5.03997L144.445 5.39531L144.462 5.76641L144.457 6.15326L144.43 6.55581L144.382 6.97404L144.312 7.40789L144.22 7.85732L144.107 8.32229L143.972 8.80273L143.816 9.29861L143.638 9.80985L143.439 10.3364L143.219 10.8782L142.978 11.4351L142.716 12.0071L142.433 12.5942L142.13 13.1961L141.806 13.8129L141.461 14.4445L141.096 15.0907L140.711 15.7515L140.306 16.4267L139.881 17.1163L139.436 17.8201L138.971 18.5381L138.487 19.27L137.984 20.0159L137.461 20.7756L136.92 21.5489L136.36 22.3357L135.781 23.136L135.184 23.9495L134.568 24.7761L133.935 25.6157L133.284 26.4681L132.615 27.3332L131.929 28.2109L131.225 29.1009L130.505 30.0032L129.767 30.9175L129.014 31.8437L128.244 32.7817L127.458 33.7312L126.656 34.6921L125.838 35.6642L125.006 36.6474L124.158 37.6414L123.295 38.6461L122.418 39.6613L121.526 40.6868L120.621 41.7224L119.701 42.768L118.769 43.8232L117.823 44.888L116.864 45.9621L115.892 47.0453L114.908 48.1375L113.912 49.2383L112.904 50.3477L111.884 51.4653L110.854 52.591L109.812 53.7246L108.76 54.8658L107.697 56.0145L106.625 57.1703L105.543 58.3331L104.451 59.5027L103.35 60.6788L102.241 61.8612L101.123 63.0497L99.9973 64.244L98.8636 65.4439L97.7224 66.6492L96.5741 67.8597L95.419 69.075L94.2574 70.295L93.0897 71.5194L91.9162 72.7481L90.7372 73.9806L89.553 75.2169L88.3641 76.4566L87.1706 77.6996L85.9731 78.9455L84.7717 80.1941L83.567 81.4452L82.3591 82.6986L81.1484 83.9539L79.9354 85.211L78.7202 86.4696L77.5034 87.7294L76.2851 88.9903L75.0658 90.2518L73.8458 91.5139L72.6255 92.7762L71.4052 94.0385L70.1852 95.3006L68.9659 96.5622L67.7477 97.823L66.5308 99.0828L65.3157 100.341L64.1026 101.598L62.892 102.854L61.6841 104.107L60.4793 105.358L59.278 106.607L58.0804 107.853L56.887 109.096L55.698 110.336L54.5139 111.572L53.3349 112.804L52.1613 114.033L50.9936 115.257L49.832 116.477L48.6769 117.693L47.5286 118.903L46.3875 120.108L45.2538 121.308L44.1279 122.503L43.0101 123.691L41.9007 124.874L40.8001 126.05L39.7085 127.219L38.6263 128.382L37.5538 129.538L36.4913 130.687L35.4391 131.828L34.3975 132.961L33.3668 134.087L32.3474 135.205L31.3394 136.314L30.3433 137.415L29.3592 138.507L28.3875 139.59L27.4285 140.664L26.4825 141.729L25.5496 142.784L24.6303 143.83L23.7247 144.866L22.8332 145.891L21.9559 146.906L21.0933 147.911L20.2454 148.905L19.4126 149.888L18.5952 150.86L17.7934 151.821L17.0073 152.771L16.2373 153.709L15.4836 154.635L14.7464 155.549L14.026 156.452L13.3225 157.342L12.6363 158.219L11.9674 159.084L11.3161 159.937L10.6827 160.776L10.0673 161.603L9.47008 162.416L8.89127 163.217L8.33108 164.004L7.78967 164.777L7.2672 165.537L6.76387 166.282L6.27985 167.014L5.81529 167.732L5.37035 168.436L4.94518 169.126L4.53996 169.801L4.15479 170.462L3.78985 171.108L3.44526 171.739L3.12113 172.356L2.81763 172.958L2.53483 173.545L2.27288 174.117L2.03187 174.674L1.81191 175.216L1.61311 175.743L1.43555 176.254L1.27932 176.75L1.14451 177.23L1.03119 177.695L0.939451 178.145L0.869337 178.578L0.820907 178.997L0.794253 179.399L0.789392 179.786L0.806379 180.157L0.845268 180.512L0.906078 180.852L0.988844 181.176L1.09359 181.484L1.22034 181.776L1.3691 182.052L1.5399 182.312L1.7327 182.557L1.94753 182.785L2.18438 182.998L2.44324 183.195L2.72407 183.376L3.02686 183.541L3.35157 183.691L3.69818 183.824L4.06664 183.942L4.45689 184.045L4.86892 184.131L5.30263 184.202L5.75797 184.258L6.23489 184.297L6.73329 184.322L7.25312 184.331L7.79427 184.324L8.35668 184.303L8.94024 184.266L9.54484 184.213L10.1704 184.146L10.8168 184.064L11.4839 183.967L12.1716 183.855L12.8798 183.728L13.6083 183.587L14.3571 183.431L15.1259 183.26L15.9147 183.075L16.7232 182.876L17.5514 182.663L18.399 182.436L19.2659 182.195L20.152 181.94L21.057 181.672L21.9808 181.39L22.9232 181.094L23.884 180.786L24.863 180.464L25.8601 180.129L26.8749 179.781L27.9074 179.421L28.9572 179.048L30.0243 178.663L31.1084 178.265L32.2091 177.856L33.3264 177.434L34.46 177.001L35.6097 176.557L36.7751 176.101L37.9561 175.633L39.1525 175.155L40.364 174.666L41.5902 174.166L42.8311 173.655L44.0862 173.135L45.3554 172.604L46.6383 172.063L47.9348 171.513L49.2444 170.953L50.567 170.383L51.9023 169.805L53.25 169.218L54.6097 168.622L55.9813 168.017L57.3643 167.404L58.7586 166.783L60.1638 166.155L61.5796 165.518L63.0057 164.874L64.4418 164.223L65.8876 163.565L67.3427 162.9L68.807 162.229L70.2799 161.552L71.7613 160.868L73.2508 160.178L74.7481 159.483L76.2529 158.783L77.7648 158.077L79.2835 157.367L80.8087 156.651L82.34 155.932L83.8771 155.208L85.4197 154.48L86.9675 153.749L88.52 153.014L90.0771 152.276L91.6382 151.535L93.2031 150.791L94.7715 150.044L96.343 149.296L97.9173 148.545L99.4939 147.793L101.073 147.039L102.653 146.284L104.235 145.528L105.818 144.771L107.401 144.014"
            stroke="black"
            strokeWidth="1.28745"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2.57 2.57"
            strikethroughThickness={20}
            initial={{pathLength:0,opacity:0}}
            animate={{pathLength:1,opacity:1}}
            transition={{duration:1,delay:2}}
          />
          <path
            d="M119.754 140.475C119.327 140.788 118.796 140.925 118.27 140.857L110.886 139.785C110.361 139.71 109.887 139.431 109.567 139.008C109.247 138.585 109.109 138.052 109.181 137.527C109.274 136.999 109.564 136.526 109.992 136.203C110.419 135.881 110.953 135.731 111.486 135.786L116.688 136.512L117.276 125.356C117.35 124.831 117.63 124.357 118.053 124.037C118.476 123.718 119.009 123.579 119.534 123.651C120.068 123.731 120.55 124.017 120.875 124.448C121.201 124.879 121.344 125.421 121.275 125.956L120.551 138.987C120.54 139.259 120.471 139.526 120.35 139.77C120.229 140.014 120.058 140.23 119.848 140.404L119.754 140.475Z"
            fill="#0043FF"
          />
        </svg>
      </div>
    </div>
  );
}

export default StatusBar;