export default function News() {
  return (
    <section className="bg-angled-gradient dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Latest News
          </h2>
          <p className="font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Stay caught up with the latest crypto news.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <div className="flex-grow">
              <div className="flex-col content-start">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex content-start">
                  <a href="#">
                    Crypto and Artificial Intelligence Could be a $20 Trillion
                    Megatrend, Bitwise Says
                  </a>
                </h2>
                <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">
                  AI and crypto combined could add a total of $20 trillion to
                  the global economy by 2030, the report said. Bitwise notes
                  that bitcoin miners...
                </p>
              </div>
            </div>
            <div id="items" className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7"
                  src="news.svg"
                  alt="Publisher avatar"
                />
                <span className="font-medium dark:text-white">Coindesk</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>

          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <div className="flex-grow">
              <div className="flex-col content-start">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex content-start">
                  <a href="#">
                    A Surprise, Game-Changing Crypto Bill Could Be About To
                    Quietly Blow Up The Price Of Bitcoin, Ethereum And XRP
                  </a>
                </h2>
                <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">
                  A potentially game-changing bill with a surprise crypto
                  provision has been passed by a Senate committee, which could
                  be the most important...
                </p>
              </div>
            </div>
            <div id="items" className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7"
                  src="news.svg"
                  alt="Publisher avatar"
                />
                <span className="font-medium dark:text-white">Forbes</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
