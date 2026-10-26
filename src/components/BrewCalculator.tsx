import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Droplets, Scale, Sparkles, Coffee } from 'lucide-react';

interface BrewMethod {
  id: string;
  name: string;
  ratio: number; // e.g. 16 means 1:16
  recommendedTemp: string;
  grindSize: string;
  totalTimeSeconds: number;
  bloomTimeSeconds: number;
  steps: { time: string; action: string }[];
}

const BREW_METHODS: BrewMethod[] = [
  {
    id: 'v60',
    name: 'Hario V60',
    ratio: 16,
    recommendedTemp: '203°F (95°C)',
    grindSize: 'Medium-Fine (Kosher Salt)',
    totalTimeSeconds: 180,
    bloomTimeSeconds: 45,
    steps: [
      { time: '0:00 - 0:45', action: 'Pour bloom water (2.5x dose) in gentle circles. Gently swirl.' },
      { time: '0:45 - 1:30', action: 'Slow spiral pour up to 60% of total water.' },
      { time: '1:30 - 2:15', action: 'Gentle center pour up to final brew weight.' },
      { time: '2:15 - 3:00', action: 'Single gentle stir; let draw down complete flat bed.' }
    ]
  },
  {
    id: 'chemex',
    name: 'Chemex',
    ratio: 15,
    recommendedTemp: '205°F (96°C)',
    grindSize: 'Medium-Coarse (Sea Salt)',
    totalTimeSeconds: 240,
    bloomTimeSeconds: 45,
    steps: [
      { time: '0:00 - 0:45', action: 'Wet all grounds with 3x bloom water.' },
      { time: '0:45 - 2:00', action: 'Pour steadily in concentric rings avoiding paper walls.' },
      { time: '2:00 - 3:15', action: 'Top off to target weight.' },
      { time: '3:15 - 4:00', action: 'Allow thick filter to yield ultra-clean, tea-like clarity.' }
    ]
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    ratio: 12,
    recommendedTemp: '195°F (90°C)',
    grindSize: 'Fine-Medium (Table Salt)',
    totalTimeSeconds: 120,
    bloomTimeSeconds: 30,
    steps: [
      { time: '0:00 - 0:30', action: 'Inverted method: add grounds and water, stir vigorously 5 times.' },
      { time: '0:30 - 1:30', action: 'Attach rinsed filter cap and steep.' },
      { time: '1:30 - 2:00', action: 'Flip onto mug and plunge with gentle body weight until hiss.' }
    ]
  },
  {
    id: 'french-press',
    name: 'French Press',
    ratio: 14,
    recommendedTemp: '200°F (93°C)',
    grindSize: 'Coarse (Breadcrumbs)',
    totalTimeSeconds: 300,
    bloomTimeSeconds: 60,
    steps: [
      { time: '0:00 - 1:00', action: 'Pour all water aggressively to saturate crust.' },
      { time: '1:00 - 4:00', action: 'Place plunger lid gently on top (do not press).' },
      { time: '4:00', action: 'Break crust with spoon, skim floating foam, plunge slowly.' }
    ]
  },
  {
    id: 'espresso',
    name: 'Double Espresso',
    ratio: 2,
    recommendedTemp: '200°F (93°C)',
    grindSize: 'Extra Fine (Flour-like)',
    totalTimeSeconds: 30,
    bloomTimeSeconds: 5,
    steps: [
      { time: '0:00 - 0:05', action: 'Pre-infusion saturation under low 3-bar pressure.' },
      { time: '0:05 - 0:27', action: 'Full 9-bar extraction. Watch for honey-like warm flow.' },
      { time: '0:27 - 0:30', action: 'Stop pump when liquid yield reaches target 1:2 weight.' }
    ]
  }
];

export const BrewCalculator: React.FC = () => {
  const [selectedMethodId, setSelectedMethodId] = useState<string>('v60');
  const [coffeeDose, setCoffeeDose] = useState<number>(20);

  // Timer states
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const method = BREW_METHODS.find(m => m.id === selectedMethodId) || BREW_METHODS[0];

  const totalWater = Math.round(coffeeDose * method.ratio);
  const bloomWater = method.id === 'espresso' ? Math.round(coffeeDose * 1.5) : Math.round(coffeeDose * 2.5);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <section id="brew-lab" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E07A5F]/15 text-[#9A3412] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Barista Dial-In Tool</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            The Punch Love Brew Lab
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            Never guess your pour-over ratio again. Dial in your dry coffee dose, calculate precise water weight down to the gram, and use our built-in brew timer.
          </p>
        </div>

        {/* Method Picker Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BREW_METHODS.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setSelectedMethodId(m.id);
                if (m.id === 'espresso') {
                  setCoffeeDose(18);
                } else if (coffeeDose < 15) {
                  setCoffeeDose(20);
                }
                handleResetTimer();
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedMethodId === m.id
                  ? 'bg-[#2C241D] text-white shadow-xs'
                  : 'bg-white border border-[#E2D8CF] text-[#4A3E37] hover:border-[#2C241D]'
              }`}
            >
              {m.name} (1:{m.ratio})
            </button>
          ))}
        </div>

        {/* Calculator Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dose slider & computed values */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D8CF] shadow-xs space-y-6">
            
            {/* Coffee Dose Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#E07A5F]" />
                  <span>Dry Coffee Dose (Grams)</span>
                </label>
                <div className="font-display text-2xl font-extrabold text-[#2C241D]">
                  {coffeeDose} g
                </div>
              </div>
              <input
                type="range"
                min={method.id === 'espresso' ? 14 : 12}
                max={method.id === 'espresso' ? 24 : 50}
                value={coffeeDose}
                onChange={(e) => setCoffeeDose(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[#FAF7F2] rounded-lg appearance-none cursor-pointer accent-[#9A3412]"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-medium">
                <span>{method.id === 'espresso' ? '14g (Single)' : '12g (1 Cup)'}</span>
                <span>{method.id === 'espresso' ? '18g (Double Basket)' : '30g (2 Mugs)'}</span>
                <span>{method.id === 'espresso' ? '24g (Triple)' : '50g (Batch / Chemex)'}</span>
              </div>
            </div>

            {/* Computed Output Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8]">
                <div className="text-[11px] font-bold text-neutral-500 uppercase flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-blue-500" />
                  Total Water
                </div>
                <div className="font-display text-2xl font-bold text-[#2C241D] mt-1">
                  {totalWater} g
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  {(totalWater * 0.0338).toFixed(1)} fl oz yield
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8]">
                <div className="text-[11px] font-bold text-neutral-500 uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Bloom Water
                </div>
                <div className="font-display text-2xl font-bold text-[#2C241D] mt-1">
                  {bloomWater} g
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Wait {method.bloomTimeSeconds}s to degas
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] col-span-2 sm:col-span-1">
                <div className="text-[11px] font-bold text-neutral-500 uppercase">
                  Water Temp
                </div>
                <div className="font-display text-2xl font-bold text-[#9A3412] mt-1">
                  {method.recommendedTemp.split(' ')[0]}
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  {method.recommendedTemp.split(' ')[1] || 'Off the boil'}
                </div>
              </div>
            </div>

            {/* Grind Specification */}
            <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E8DFD8] flex items-center justify-between text-xs">
              <span className="font-semibold text-neutral-600">Recommended Grind Size:</span>
              <span className="font-bold text-[#2C241D] bg-white px-2.5 py-1 rounded-md border border-[#E2D8CF]">
                {method.grindSize}
              </span>
            </div>

            {/* Step-by-Step Instructions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-3">
                Pour Schedule for {method.name}:
              </h4>
              <div className="space-y-2">
                {method.steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-start gap-3 text-xs"
                  >
                    <span className="font-mono font-bold text-[#E07A5F] shrink-0 bg-white px-2 py-0.5 rounded border border-[#E2D8CF]">
                      {st.time}
                    </span>
                    <span className="text-[#4A3E37] font-medium leading-relaxed">
                      {st.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Brew Stopwatch */}
          <div className="lg:col-span-5 bg-[#2C241D] text-white rounded-3xl p-6 sm:p-8 border border-[#3D332A] shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F]">
                Digital Brew Timer
              </span>
              <span className="text-xs text-neutral-400">
                Target: {formatTimer(method.totalTimeSeconds)}
              </span>
            </div>

            {/* Giant Clock Display */}
            <div className="text-center py-6 bg-black/30 rounded-2xl border border-white/10">
              <div className="font-mono text-6xl font-black tracking-wider text-white">
                {formatTimer(timerSeconds)}
              </div>
              <div className="text-xs text-neutral-400 mt-2 font-medium">
                {timerSeconds === 0
                  ? 'Ready to brew'
                  : timerSeconds <= method.bloomTimeSeconds
                  ? '✨ Bloom Phase (Degassing)'
                  : timerSeconds <= method.totalTimeSeconds
                  ? '🌊 Active Pouring Phase'
                  : '☕ Brew Complete! Enjoy your cup.'}
              </div>
            </div>

            {/* Timer Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                  isTimerRunning
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-[#E07A5F] hover:bg-[#C9664C] text-white'
                }`}
              >
                {isTimerRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause Timer</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Start Pouring</span>
                  </>
                )}
              </button>

              <button
                onClick={handleResetTimer}
                title="Reset Stopwatch"
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Barista Tip Callout */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1">
              <div className="font-bold text-[#E07A5F] flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5" />
                <span>Barista Pro Tip:</span>
              </div>
              <p className="leading-relaxed">
                If the brew drains faster than {formatTimer(method.totalTimeSeconds - 20)}, your grind is too coarse (tastes sour). If it stalls or drains past {formatTimer(method.totalTimeSeconds + 30)}, coarsen your grinder (tastes astringent).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
