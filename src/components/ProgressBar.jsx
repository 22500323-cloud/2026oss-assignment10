import { useEffect, useState } from 'react';

function ProgressBar({ completed, total }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const remaining=total-completed;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getProgressColor = () => {
    if (percentage >= 80) return 'from-emerald-400 to-teal-600';
    if (percentage >= 50) return 'from-green-400 to-emerald-500';
    if (percentage >= 20) return 'from-lime-400 to-green-500';
    return 'from-teal-300 to-emerald-400';
  };

  return (
    <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">📊</div>
          <h2 className="text-xl font-semibold text-gray-800">Today's Habit Dashboard</h2>
        </div>
        <div className="text-2xl font-bold text-emerald-600">{percentage}%</div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <div
          className="bg-emerald-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500 mb-1">전체 습관</p></div>
      </div>

      <div className="bg-green-50 rounded-lg p-3 text-conter">
          <p className="text-sm text-gray-500 mb-1">완료</p>
          <p className="text-2xl font-bold text-green-700">{completed}</p>
      </div>

      <div className="bg-teal-50 rounded-lg p-3 text-conter">
          <p className="text-sm text-gray-500 mb-1">남은 습관</p>
          <p className="text-2xl font-bold text-teal-700">{remaining}</p>
      </div>

      <div className="w-full bg-emerald-50 rounded-full h-5 overflow-hidden shadow-inner">
        <div className={'h-5 rounded-full bg-gradient-to-r ${getProgressColor()} transition-all duration-1000 ease-out'} style={{width:`${animatedPercentage}%`}}></div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-sm text-gray-600">
          {total ===0? '새로운 습관을 추가해 보세요.':percentage ===100 ? '오늘의 습관을 모두 완료했습니다.':`오늘의 습관 중 ${completed}개를 완료했어요.`}
        </p>
        {percentage === 100 && total > 0 && (
          <span className="text-2xl animate-bounce">🎉</span>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;