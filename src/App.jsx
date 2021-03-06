import "./App.css";
import cover1 from "./assets/1.png";
import cover2 from "./assets/2.png";
import cover3 from "./assets/3.png";
import Logo from "./assets/lualogo.png";

function App() {
  return (
    <>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>

      <header>
        <div class="aside">
          <div class="logo">
            <img src={Logo} alt="" />
          </div>
          <div class="title">
            <span>مركز رياضة LUA </span>
          </div>
          <div class="description">
            <span>
              مركز رياضي متقدم ومختص في الجمباز الأرضي، التزلج على العجلات
              ورياضة الكابويرا البرازيلية. مركز لوا الرياضي يضم مدربين محترفين
              ومؤهلين خريجين وحاصلين على شهادات من أعلى المعاهد والجامعات
              الرياضية في البلاد. يقدم المركز خدماته للأطفال من الجنسين حتى جيل
              15 عام، وللنساء في كافة الأجيال.
            </span>
          </div>
          <div class="lines_cover">
            <a href="#">
              شارع المدينة، حي البير، ام الفحم
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                class="icon_s"
                data-name="Layer 1"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#4285f4"
                  d="M25.3959 8.8345l-.0039.0038c.0837.2319.1617.4667.2285.7062C25.5527 9.3047 25.48 9.067 25.3959 8.8345zM16 2.23L8.929 5.1593 12.9916 9.222A4.2486 4.2486 0 0 1 19.0208 15.21L25 9.23l.392-.392A9.9872 9.9872 0 0 0 16 2.23z"
                />
                <path
                  fill="#ffba00"
                  d="M16,16.4733A4.25,4.25,0,0,1,12.9916,9.222L8.929,5.1593A9.9683,9.9683,0,0,0,6,12.23c0,4.4057,2.2651,7.1668,4.93,10,.1787.1828.3274.3852.4959.5746l7.5608-7.5609A4.2341,4.2341,0,0,1,16,16.4733Z"
                />
                <path
                  fill="#0066da"
                  d="M16,2.23a10,10,0,0,0-10,10,11.0918,11.0918,0,0,0,.5454,3.4546l12.8505-12.85A9.9563,9.9563,0,0,0,16,2.23Z"
                />
                <path
                  fill="#00ac47"
                  d="M16.9011,29.12a21.83,21.83,0,0,1,4.032-6.8966C23.7976,19.3129,26,16.636,26,12.23a9.9585,9.9585,0,0,0-.6041-3.3958l-13.97,13.97A18.0436,18.0436,0,0,1,15.0173,29.08.9975.9975,0,0,0,16.9011,29.12Z"
                />
                <path
                  fill="#0066da"
                  d="M10.93 22.23c.1787.1828.3274.3852.4959.5746h0C11.257 22.6155 11.1083 22.4131 10.93 22.23zM7.207 7.4637A9.9357 9.9357 0 0 0 6.45 9.2566 9.9429 9.9429 0 0 1 7.207 7.4637zM6.45 9.2566a9.9522 9.9522 0 0 0-.398 1.9513A9.9537 9.9537 0 0 1 6.45 9.2566z"
                  opacity=".5"
                />
                <path
                  fill="#fff"
                  d="M15.1957 29.3989c.02.0248.0445.0422.0664.0644C15.24 29.4411 15.2156 29.4236 15.1957 29.3989zM15.7874 29.7429l.04.0066zM13.6216 25.9269c-.0371-.067-.0679-.1382-.1059-.2047C13.5533 25.789 13.5849 25.86 13.6216 25.9269zM15.0173 29.08q-.3069-.9036-.6906-1.7566C14.5793 27.8937 14.8127 28.4771 15.0173 29.08zM15.5269 29.6563c-.0229-.0112-.0463-.0207-.0684-.0338C15.4809 29.6356 15.5036 29.6452 15.5269 29.6563zM19.7117 23.7529c-.249.3474-.4679.7125-.6927 1.0741C19.2431 24.465 19.4633 24.1006 19.7117 23.7529z"
                />
                <polygon
                  fill="#fff"
                  points="23.322 19.553 23.322 19.553 23.322 19.553 23.322 19.553"
                />
                <path
                  fill="#fff"
                  d="M17.0468 28.774h0q.3516-.887.7561-1.7428C17.5316 27.6006 17.2812 28.1826 17.0468 28.774zM18.68 25.3584c-.2879.4957-.55 1.0068-.8 1.5242C18.13 26.3647 18.3931 25.8547 18.68 25.3584z"
                />
                <path
                  fill="#ea4435"
                  d="M8.929,5.1593A9.9683,9.9683,0,0,0,6,12.23a11.0918,11.0918,0,0,0,.5454,3.4546L13,9.23Z"
                />
              </svg>
            </a>
            <a href="tel: 972546320707">
              054-632-0707
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="470"
                height="468"
                class="icon_s"
                viewBox="0 0 470 468"
              >
                <defs>
                  <filter
                    id="a"
                    width="111.8%"
                    height="111.9%"
                    x="-5.9%"
                    y="-3.9%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="5"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="4"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      result="shadowMatrixOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078125 0"
                    />
                    <feOffset
                      dy="4"
                      in="SourceAlpha"
                      result="shadowOffsetOuter2"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter2"
                      result="shadowBlurOuter2"
                      stdDeviation="5.5"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter2"
                      result="shadowMatrixOuter2"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.210824275 0"
                    />
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1" />
                      <feMergeNode in="shadowMatrixOuter2" />
                    </feMerge>
                  </filter>
                  <path
                    id="b"
                    d="M9.635 132.808C24.782 59.782 71.388 19.109 144.085 6.822c53.74-9.081 107.5-9.196 161.15.255 74.852 13.185 119.85 56.23 134.185 130.36 11.075 57.29 11.249 115.191-.174 172.427-15.324 72.52-63.132 117.285-135.561 129.527-53.74 9.08-107.5 9.195-161.15-.255-74.852-13.186-120.05-58.38-134.384-132.509-11.64-57.668-10.52-115.935 1.484-173.82z"
                  />
                </defs>
                <g
                  fill="none"
                  fill-rule="evenodd"
                  transform="translate(-21 -26)"
                >
                  <g transform="translate(32 33)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                    <use fill="#0BCD74" xlinkHref="#b" />
                  </g>
                  <path
                    fill="#FFF"
                    d="M142.802 185.926l18.935-6.963s14.595 29.09 43.41 57.905c28.814 28.814 60.712 44.448 60.712 44.448l-8.173 19.126s-35.922-20.794-65.62-50.492c-29.699-29.698-49.264-64.024-49.264-64.024zM354.55 276c12.825 6.377 15.614 23.454 5.486 33.582l-43.41 43.41a28.307 28.307 0 0 1-24.433 7.955 212.55 212.55 0 0 1-8.853-1.597c-26.501-3.598-78.636-17.094-128.75-67.21-52.9-52.9-67.984-112.162-72.243-139.154a28.309 28.309 0 0 1 7.953-24.433l43.412-43.411c10.127-10.128 27.205-7.338 33.582 5.487l33.504 67.38-16.745 8.269L153 103.382c-1.804-3.653-6.662-4.454-9.543-1.573l-35.546 35.545a18.807 18.807 0 0 0-5.493 14.046c.606 15.378 5.157 44.93 27.353 80.562 9.118 13.6 20.96 28.27 36.349 43.66 53.234 53.235 101.455 63.534 124.62 65.086 3.156-.063 5.637-.29 7.37-.51 2.291-.29 4.52-1.004 6.474-2.232a18.591 18.591 0 0 0 3.24-2.583l35.546-35.546c2.882-2.881 2.08-7.74-1.572-9.543L278.9 259.24l8.267-16.746L354.55 276z"
                    transform="translate(32 33)"
                  />
                </g>
              </svg>
            </a>
            <a target="_blank" href="https://www.facebook.com/luasportcenter/">
              Facebook
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Ebene 1"
                viewBox="0 0 1024 1024"
                class="icon_s"
              >
                <path
                  fill="#1877f2"
                  d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                />
                <path
                  fill="#fff"
                  d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                />
              </svg>
            </a>
          </div>
          <form action="">
            <input type="text" placeholder="رقم الهاتف" />
            <button>أرسال</button>
          </form>
        </div>
        <div class="cover">
          <img
            src="https://html.dynamiclayers.net/tm/tenda/templates/demo-1/img/hero-moc.png"
            alt=""
          />
        </div>
      </header>

      <section>
        <div class="card">
          <div class="cover_card">
            <img src={cover1} alt="" />
          </div>
          <div class="title_card">
            <span>جمباز </span>
          </div>
        </div>
        <div class="card">
          <div class="cover_card">
            <img src={cover2} alt="" />
          </div>
          <div class="title_card">
            <span>كابويرا </span>
          </div>
        </div>
        <div class="card">
          <div class="cover_card">
            <img src={cover3} alt="" />
          </div>
          <div class="title_card">
            <span>تزلج على العجلات</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
