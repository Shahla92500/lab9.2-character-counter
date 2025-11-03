
import type { TextStats } from "../types";

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  minWords?:number;
  maxWords?: number;
}

function StatsDisplay({stats, showReadingTime = true , minWords, maxWords}: StatsDisplayProps){
    const min = typeof minWords === 'number' && stats.wordCount < minWords;
    const totalSeconds = Math.round(stats.readingTime * 60);
    const mm =Math.floor(stats.readingTime);
 
    // const totalReadingTime = stats.readingTime < 0.5 ? "< 1 min" : `${stats.readingTime.toFixed(1)} min`;
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 text-center gap-6">
           <div>
              <div className="text-gray-500">Characters</div>
                <div className="text-3xl font-semibold text-slate-800">{stats.characterCount}</div>
            </div>    
            <div>
                <div className="text-gray-500">Words</div>
                 <div className={`text-3xl font-semibold ${min ? 'text-red-600' : 'text-slate-800'}`}>
                    {stats.wordCount}
                </div>
            </div>
            {/* {showReadingTime && stats.wordCount && (<p>Reading time: <strong> {totalReadingTime}</strong></p> )}             */}
            <div>
                <div className="text-gray-500">Reading Time</div>
                    <div className="text-3xl font-semibold text-slate-800">
                        {showReadingTime ? `${mm}:${totalSeconds}` : '—'}
                    </div>
            </div>
        </div>
       {(minWords || maxWords) && (
        <div className="mt-4 text-center text-gray-500">
          {typeof minWords === 'number' ? `Min: ${minWords}` : null}
          {typeof minWords === 'number' && typeof maxWords === 'number' ? ' | ' : null}
          {typeof maxWords === 'number' ? `Max: ${maxWords}` : null}
        </div>
      )}
      </div>
    );
}

export default StatsDisplay;