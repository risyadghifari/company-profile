export default function MovingCard(){
    return(
        <div className="bg-black min-h-screen flex items-center justify-center py-10 overflow-hidden">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 max-w-7xl">
    {/* First Column - Moves Up */}
    <div className="space-y-4 animate-column-up">
      <div className="bg-pink-600 text-white rounded-lg shadow-lg p-4 aspect-[3/4] flex items-center justify-center">
        <h3 className="text-lg font-bold">Feeling Fake:</h3>
      </div>
      <div className="bg-blue-600 text-white rounded-lg shadow-lg p-4 aspect-square flex items-center justify-center">
        <h3 className="text-lg font-bold uppercase text-center">Your gender<br />IS NOT<br />a trend</h3>
      </div>
    </div>

    {/* Second Column - Moves Down */}
    <div className="space-y-4 animate-column-down">
      <div className="bg-red-600 text-white rounded-lg shadow-lg p-4 aspect-[2/3] flex flex-col justify-center">
        <h3 className="text-base font-semibold mb-2">Safeword:</h3>
        <p className="text-5xl font-extrabold">EP.02</p>
      </div>
      <div className="bg-purple-900 text-white rounded-lg shadow-lg p-4 aspect-square flex items-center justify-center">
        <h3 className="text-lg font-bold">Consent Manifesto</h3>
      </div>
    </div>

    {/* Third Column - Moves Up */}
    <div className="space-y-4 animate-column-up">
      <div className="bg-green-600 text-white rounded-lg shadow-lg p-4 aspect-[3/4] flex flex-col justify-center text-center">
        <h3 className="text-5xl font-bold">7</h3>
        <p className="text-sm mt-2">Steps for queer folks</p>
      </div>
      <div className="bg-orange-500 text-white rounded-lg shadow-lg p-4 aspect-[2/3] flex flex-col justify-center">
        <h3 className="text-lg font-bold">"COMING OUT"</h3>
        <p className="text-xs mt-2">Doesn’t have to be a moment.</p>
      </div>
    </div>

    {/* Fourth Column - Moves Down */}
    <div className="space-y-4 animate-column-down">
      <div className="bg-indigo-700 text-white rounded-lg shadow-lg p-4 aspect-[3/4] flex items-center justify-center">
        <h3 className="text-sm font-bold">Non-binary + Trans Lesbians</h3>
      </div>
      <div className="bg-pink-500 text-white rounded-lg shadow-lg p-4 aspect-square flex items-center justify-center">
        <h3 className="text-lg font-bold">Navigating S-X</h3>
      </div>
    </div>
  </div>
</div>
    )
}