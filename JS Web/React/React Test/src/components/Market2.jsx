export default function Market2() {
  return (
    <section className="bg-angled-gradient py-8 bg-slate-400 flex flex-col items-start justify-center lg:flex-row">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-8 md:px-8 md:py-8">
        <h2 className="text-center text-3xl font-bold lg:text-4xl pb-8">
          Hottest crypto assets
        </h2>

        {/* Item1 */}
        <div className="max-w-sm py-6 px-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://wallet.cex.io/files/web-resources/ic_btc.svg"
            alt="rose-icon"
            loading="lazy"
            className="css-e8qu14"
          />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bitcoin</h5>
          </a>
          <h6 className="text-sm font-bold text-gray-700 dark:text-gray-400">	$69,438.40 </h6>
          <div className="css-1ucrnna">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4918 9.58995L8.69222 6.23047C8.59227 6.11053 8.40806 6.11053 8.30811 6.23047L5.50853 9.58995C5.37284 9.75279 5.48863 10 5.70059 10L11.2997 10C11.5117 10 11.6275 9.75279 11.4918 9.58995Z" fill="#34AB80">
              </path>
            </svg>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-400">3.45%</p>
          </div>
          <a href="#" className="pt-6 inline-flex font-medium items-center text-blue-600 hover:underline">
            See details
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
            </svg>
          </a>
        </div>

        {/* Item2 */}
        <div className="max-w-sm py-6 px-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://wallet.cex.io/files/web-resources/ic_btc.svg"
            alt="rose-icon"
            loading="lazy"
            className="css-e8qu14"
          />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bitcoin</h5>
          </a>
          <h6 className="text-sm font-bold text-gray-700 dark:text-gray-400">	$69,438.40 </h6>
          <div className="css-1ucrnna">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4918 9.58995L8.69222 6.23047C8.59227 6.11053 8.40806 6.11053 8.30811 6.23047L5.50853 9.58995C5.37284 9.75279 5.48863 10 5.70059 10L11.2997 10C11.5117 10 11.6275 9.75279 11.4918 9.58995Z" fill="#34AB80">
              </path>
            </svg>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-400">3.45%</p>
          </div>
          <a href="#" className="pt-6 inline-flex font-medium items-center text-blue-600 hover:underline">
            See details
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}