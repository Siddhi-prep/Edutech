import React from 'react';



const AndroidIcon = ({ size = 18 }) => (
 <svg width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z"/></svg>
);
const WindowsIcon = ({ size = 18 }) => (
 <svg width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 96L310.6 96L310.6 310.6L96 310.6L96 96zM329.4 96L544 96L544 310.6L329.4 310.6L329.4 96zM96 329.4L310.6 329.4L310.6 544L96 544L96 329.4zM329.4 329.4L544 329.4L544 544L329.4 544L329.4 329.4z"/></svg>
);
const IosIcon = ({ size = 18 }) => (
 <svg width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M496 96L144 96C117.5 96 96 117.5 96 144L96 496C96 522.5 117.5 544 144 544L496 544C522.5 544 544 522.5 544 496L544 144C544 117.5 522.5 96 496 96zM223 448.5C217.5 458.1 205.2 461.3 195.7 455.8C186.1 450.3 182.9 438 188.4 428.5L202.7 403.8C218.8 398.9 232 402.7 242.3 415.2L223 448.5zM361.9 394.6L180 394.6C169 394.6 160 385.6 160 374.6C160 363.6 169 354.6 180 354.6L231 354.6L296.4 241.4L275.9 206C270.4 196.4 273.7 184.2 283.2 178.7C292.8 173.2 305 176.5 310.5 186L319.4 201.4L328.3 186C333.8 176.4 346.1 173.2 355.6 178.7C365.2 184.2 368.4 196.5 362.9 206L277.1 354.6L339.2 354.6C359.4 354.6 370.7 378.3 361.9 394.6zM460 394.6L431 394.6L450.6 428.5C456.1 438.1 452.8 450.3 443.3 455.8C433.7 461.3 421.5 458 416 448.5C383.1 391.6 358.5 348.8 342 320.4C325.3 291.4 337.2 262.4 349.1 252.6C362.2 275.3 381.8 309.3 408 354.6L460 354.6C471 354.6 480 363.6 480 374.6C480 385.7 471 394.6 460 394.6z"/></svg>
);
const MacIcon = ({ size = 18 }) => (
<svg width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z"/></svg>
);



const Downloads = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
              <div className="text-center mb-8 md:mb-12 px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Downloads</h2>
              </div>
      
              <div className="max-w-3xl mx-auto">
                {/* Let's Connect Header */}
                <div className="text-center mb-8">
                  <p className="text-sm text-gray-500 max-w-xl mx-auto">
                    Download our app to access courses, practice tests, and study materials on the go. Stay connected and prepare anytime, anywhere with Siddhi's  app.
                  </p>
                </div>
      
                {/* Downloads grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {/* android */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.siddhiprep.learn&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-100 rounded-xl p-5 flex space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                  >
                    <div className="bg-sky-50 p-1 rounded-lg text-sky-600 flex-shrink-0">
                      <AndroidIcon size={40} />
                    </div>
                    <div className='flex justify-center items-center'>
                      <h4 className="text-lg font-semibold text-gray-900">Download for Android</h4>
                    </div>
                  </a>
      
                  {/* Windows */}
                  <a
                    href="https://apps.microsoft.com/detail/9mwqrx8l7vrt?ocid=webpdpshare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-100 rounded-xl p-5 flex space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                  >
                    <div className="bg-sky-50 p-1 rounded-lg text-sky-500 flex-shrink-0">
                      <WindowsIcon size={40} />
                    </div>
                    <div className='flex justify-center items-center'>
                      <h4 className="text-lg font-semibold text-gray-900">Download for Windows</h4>
                    </div>
                  </a>
      
                  {/* iOS */}
                  <a
                    href="https://apps.apple.com/in/app/siddhi-prep/id6766252052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-100 rounded-xl p-5 flex space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                  >
                    <div className="bg-sky-50 p-1 rounded-lg text-slate-900 flex-shrink-0">
                      <IosIcon size={40} />
                    </div>
                    <div className='flex justify-center items-center'>
                      <h4 className="text-lg font-semibold text-gray-900 mb-0.5">Download for iOS</h4>
                    </div>
                  </a>

                  {/* Mac */}
                  <a
                    href="https://drive.google.com/drive/folders/1TAA_e_UDDHPKpv51-U_mGB5hu6uskDB5?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-100 rounded-xl p-5 flex space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                  >
                    <div className="bg-sky-50 p-1 rounded-lg text-slate-900 flex-shrink-0">
                      <MacIcon size={40} />
                    </div>
                    <div className='flex justify-center items-center'>
                      <h4 className="text-lg font-semibold text-gray-900">Download for Mac</h4>
                    </div>
                  </a>
      
                </div>
              </div>
            </div>
    </section>
  );
};

export default React.memo(Downloads);
