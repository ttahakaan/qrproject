import { CiSearch } from "react-icons/ci";
import GlobalHeaders from "../components/header";
export default function Index() {
  return (
    <div className="bg-gray-50 h-screen font-Ropa-sans">
      <GlobalHeaders />
      <div className="mt-4">
        <div className="bg-gray-200 h-[1px]"></div>
        <div className="bg-gray-100">
          <div className="text-center mt-3 text-2xl ">Günün Sözü</div>
          <div className="text-center text-lg mt-2 mb-5">
            <div className="">"Başarısızlık yoktur. Sadece deneyimler ve onlara karşı tepkileriniz vardır."</div>
          </div>
        </div>
        <div className="bg-gray-200 h-[1px]"></div>
      </div>
      <div className="flex mt-10  ">
        <div className=" w-1/3 border-2 border-purple-500 rounded-md ml-2 ">
          <h3 className="text-center text-2xl mt-4">En Popüler Yazarlar</h3>
          <div className="p-5">
            <div className="max-w-lg mx-auto rounded-lg mt-3">
              <div className="flex items-center mb-6 border border-sky-500 p-4 rounded-lg cursor-pointer">
                <img src="https://randomuser.me/api/portraits/men/61.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="text-lg font-medium text-gray-800">Yaşar Kemal</div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto rounded-lg ">
              <div className="flex items-center mb-6 border border-sky-500 p-4 rounded-lg cursor-pointer">
                <img src="https://randomuser.me/api/portraits/men/98.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="text-lg font-medium text-gray-800">George Orwell</div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto rounded-lg ">
              <div className="flex items-center mb-6 border border-sky-500 p-4 rounded-lg cursor-pointer" >
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="text-lg font-medium text-gray-800">Gabriel Garcia Marquez</div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto rounded-lg ">
              <div className="flex items-center mb-6 border border-sky-500 p-4 rounded-lg cursor-pointer">
                <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="text-lg font-medium text-gray-800">Ray Bradbury</div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto rounded-lg ">
              <div className="flex items-center mb-6 border border-sky-500 p-4 rounded-lg cursor-pointer">
                <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="text-lg font-medium text-gray-800">Sabahattin Ali</div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto rounded-lg ">
              <div className="flex items-center mb-6 border border-sky-500 p-4 rounded-lg cursor-pointer">
                <img src="https://randomuser.me/api/portraits/men/99.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="text-lg font-medium text-gray-800">Fyodor Dostoyevski</div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className=" w-1/3 border border-red-800 rounded-md ml-2 mr-2">
          <div className="text-center text-2xl mt-4">En Sevilen Sözler</div>
          <div className="max-w-lg mx-auto border border-sky-500 px-6 py-4 rounded-lg mt-3">
            <div className="flex items-center mb-6">
              <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4 cursor-pointer" />
              <div className="">
                <div className="text-lg font-medium text-gray-800 cursor-pointer">Elbert Hubbard </div>
                <div className="text-gray-500">Yazar ve Yayımcı</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6 ">Hayatta yapabileceğiniz en büyük hata, sürekli olarak bir hata yapabileceğiniz korkusudur. </p>
            <div className="flex justify-between items-center">
              <div>
                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  <i className="far fa-thumbs-up"></i> Beğen
                </a>
              </div>
              <div className="flex items-center">
                <a href="#" className="text-gray-500 hover:text-gray-700 mr-2">
                  <i className="far fa-flag"></i> Sorun Bildir
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto border border-sky-500 px-6 py-4 rounded-lg mt-3">
            <div className="flex items-center mb-6">
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4 cursor-pointer" />
              <div>
                <div className="text-lg font-medium text-gray-800 cursor-pointer">Dalai Lama</div>
                <div className="text-gray-500">Dini Lider</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">Olumlu yönü, potansiyeli görün ve çaba gösterin.</p>
            <div className="flex justify-between items-center">
              <div>
                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  <i className="far fa-thumbs-up"></i> Beğen
                </a>
              </div>
              <div className="flex items-center">
                <a href="#" className="text-gray-500 hover:text-gray-700 mr-2">
                  <i className="far fa-flag"></i> Sorun Bildir
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto border border-sky-500 px-6 py-4 rounded-lg mt-3">
            <div className="flex items-center mb-6">
              <img src="https://randomuser.me/api/portraits/men/61.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4 cursor-pointer" />
              <div>
                <div className="text-lg font-medium text-gray-800 cursor-pointer">Lao Tzu</div>
                <div className="text-gray-500">Yazar</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">Eksik hiçbir şey olmadığını anladığınızda, tüm dünya size aittir.</p>
            <div className="flex justify-between items-center">
              <div>
                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  <i className="far fa-thumbs-up"></i> Beğen
                </a>
              </div>
              <div className="flex items-center">
                <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  <i className="far fa-flag"></i> Sorun Bildir
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3 border border-green-900 rounded-md mr-2">
          <div className="text-center text-2xl mt-4">En Popüler Konular</div>
          <div className="flex justify-center mt-3 w-full">
            <div className="block w-full max-w-[30rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white cursor-pointer">
              <ul className="w-full">
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 mt-2 dark:border-white/10 ">Başarı Sözleri</li>

                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Motivasyon Sözleri</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Doğum Günü Tebrik Mesajları</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 mt-2 dark:border-white/10">Mezuniyet Mesajları</li>

                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Evlilik Mesajları</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Sevgi sözleri</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 mt-2 dark:border-white/10">Aşk Sözleri</li>

                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Gurur Sözleri</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Karma Sözler</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 mt-2 dark:border-white/10">Başarı Sözleri</li>

                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">İstikrar Sözleri</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3  dark:border-white/10">Albert Einstein Sözleri</li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-4 py-3 mt-2 dark:border-white/10">Milli Sözler</li>

               
              </ul>
              <div className="p-3 text-end bg-white text-lg cursor-pointer">Tüm konular...</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
