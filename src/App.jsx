/* eslint-disable react/no-unescaped-entities */
import './App.css';
import image from './assets/images/party/archer.png'

function App() {
  
  return (
    <div className='my-14'>
      <header>
        <h1 className="text-6xl text-center my-12">DUNGEON PARTY</h1>
      </header>
      <div className='flex flex-wrap gap-6 justify-center'>
          <div className="flex justify-center">
              <div className="w-full rounded-3xl inline-block overflow-hidden shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
                <div className="relative group w-full overflow-hidden bg-white rounded-t-3xl">
                    <img src={image} className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" />
                </div>
                <div className='bg-white'>
                    <div className="text-center px-3 py-2">
                      <h1 className="font-bold text-2xl mb-2">Archer</h1>
                    </div>
                    <div className="flex justify-center pb-3 text-sm">
                      <div className="text-center px-1 border-r last:border-r-0">
                          <h2>ATK</h2>
                          <span>10</span>
                      </div>
                      <div className="text-center border-r px-2 last:border-r-0">
                          <h2>DEF</h2>
                          <span>10</span>
                      </div>
                      <div className="text-center border-r px-2 last:border-r-0">
                          <h2>AGI</h2>
                          <span>10</span>
                      </div>
                      <div className="text-center border-r px-2 last:border-r-0">
                          <h2>ACU</h2>
                          <span>10</span>
                      </div>
                      <div className="text-center border-r px-2 last:border-r-0">
                          <h2>UTI</h2>
                          <span>10</span>
                      </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
      <div className="flex justify-center my-8">
          <div className='p-8 bg-white text-2xl text-center w-3/4 rounded-3xl'>
              <span>
                  Your have total stats of <br/>
                  Atk 10, Def 10, Agi 10, Acu 10, and Uti 10
                      <p className='mt-6'>Your Party through Forest Of Trial</p>
                      <p className='mt-6'>Your Party can't pass any stage.</p>
              </span>
              <span>
                  Your Party Summary will be here! <br/>
                  It will show when your party is complete
              </span>
          </div>
      </div>
    </div>
  )
}

export default App;
