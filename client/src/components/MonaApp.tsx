import { Moon, Zap, ArrowRight, Menu, ChevronLeft, Sun, Sparkles, Activity, Heart, User, FileText, AlertCircle, Plus, Calendar, BarChart } from "lucide-react";

// Phone frame component for consistent styling
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="w-80 h-[640px] bg-white rounded-[2.5rem] phone-shadow relative overflow-hidden">
    <div className="absolute inset-4 bg-gradient-to-br from-purple-50 to-lavender-50 rounded-[2rem] overflow-hidden" style={{background: 'linear-gradient(135deg, hsl(260, 25%, 96%), hsl(270, 30%, 94%))'}}>
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-sm">
        <span className="text-xs font-medium text-purple-700">9:41</span>
        <div className="flex space-x-1">
          <div className="w-4 h-2 bg-purple-300 rounded-full"></div>
          <div className="w-6 h-2 bg-purple-300 rounded-full"></div>
          <div className="w-6 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
      {children}
    </div>
  </div>
);

// Enhanced Mona Logo Component
const MonaLogo = ({ size = "normal" }: { size?: "normal" | "small" }) => {
  const logoSize = size === "small" ? "w-10 h-10" : "w-16 h-16";
  const textSize = size === "small" ? "text-2xl" : "text-5xl";
  const iconSize = size === "small" ? "text-lg" : "text-2xl";
  
  return (
    <div className={`flex items-center ${size === "small" ? "space-x-3" : "space-x-4"}`}>
      <div className={`${logoSize} gradient-purple-brand rounded-2xl flex items-center justify-center shadow-xl ring-4 ring-purple-100/50`}>
        <span className={`text-white font-black ${iconSize} tracking-wider`}>m</span>
      </div>
      <span className={`${textSize} font-black text-purple-800 tracking-tight`} style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>mona</span>
    </div>
  );
};

// Dashboard Screen Component
const DashboardScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Enhanced Mona Logo */}
      <div className="mb-6">
        <MonaLogo size="small" />
      </div>
      
      {/* Greeting */}
      <h2 className="text-3xl font-bold text-purple-800 mb-6 leading-tight" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
        Good morning,<br />Sarah
      </h2>
      
      {/* Insight of the Day Card */}
      <div className="gradient-warm-lavender border border-purple-200/50 rounded-xl p-6 mb-6 card-shadow">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Insight of the Day</h3>
            <p className="text-purple-800 text-sm leading-relaxed">
              Increasing your intake of leafy greens may help to reduce hot flashes.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-purple-700 ml-3 flex-shrink-0" />
        </div>
      </div>
      
      {/* Health Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Sleep Card */}
        <div className="gradient-purple-slate rounded-xl p-5 card-shadow">
          <div className="flex items-center space-x-2 mb-2">
            <Moon className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Sleep</span>
          </div>
          <div className="text-white text-3xl font-bold">7.9</div>
          <div className="text-purple-300 text-xs mt-1">hours</div>
        </div>
        
        {/* Readiness Card */}
        <div className="gradient-purple-slate rounded-xl p-5 card-shadow">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Readiness</span>
          </div>
          <div className="text-white text-3xl font-bold">74</div>
          <div className="text-purple-300 text-xs mt-1">score</div>
        </div>
      </div>
      
      {/* Activity Card */}
      <div className="gradient-purple-slate rounded-xl p-5 card-shadow">
        <div className="flex items-center space-x-2 mb-2">
          <Activity className="w-5 h-5 text-purple-300" />
          <span className="text-purple-200 text-sm font-medium">Activity</span>
        </div>
        <div className="text-white text-3xl font-bold">82</div>
        <div className="text-purple-300 text-xs mt-1">score</div>
      </div>
      
      {/* Wearable Device Indicators */}
      <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-slate-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-slate-500">Oura Ring</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-slate-500">Apple Watch</span>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// Nutrition Plan Screen Component
const NutritionScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header with Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Menu className="w-6 h-6 text-slate-600" />
          <span className="text-xl font-bold text-slate-800">mona</span>
        </div>
      </div>
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-800 mb-8" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Nutrition Plan</h2>
      
      {/* Breakfast Card */}
      <div className="gradient-purple-slate rounded-xl p-6 mb-6 card-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <Sun className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-semibold text-white">Breakfast</h3>
        </div>
        <p className="text-purple-200 leading-relaxed">Oatmeal with nuts and berries</p>
        <div className="mt-4 text-purple-300 text-sm">
          <span>8:00 AM • 350 calories</span>
        </div>
      </div>
      
      {/* Lunch Card */}
      <div className="gradient-purple-slate rounded-xl p-6 mb-6 card-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <Sun className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-semibold text-white">Lunch</h3>
        </div>
        <p className="text-purple-200 leading-relaxed">Grilled salmon with quinoa and broccoli</p>
        <div className="mt-4 text-purple-300 text-sm">
          <span>1:00 PM • 480 calories</span>
        </div>
      </div>
      
      {/* Dinner Card */}
      <div className="gradient-purple-slate rounded-xl p-6 card-shadow">
        <div className="flex items-center space-x-3 mb-3">
          <Moon className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-semibold text-white">Dinner</h3>
        </div>
        <p className="text-purple-200 leading-relaxed">Stir-fried tofu with vegetables</p>
        <div className="mt-4 text-purple-300 text-sm">
          <span>7:00 PM • 420 calories</span>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// Insight Screen Component
const InsightScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-3 mb-8">
        <ChevronLeft className="w-6 h-6 text-slate-600" />
        <span className="text-xl font-bold text-slate-800">mona</span>
      </div>
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-800 mb-12" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Insight</h2>
      
      {/* Visual Flow */}
      <div className="flex items-center justify-center space-x-6 mb-12">
        {/* Moon Icon */}
        <div className="w-20 h-20 gradient-purple-slate rounded-full flex items-center justify-center shadow-lg">
          <Moon className="w-10 h-10 text-purple-300" />
        </div>
        
        {/* Plus Symbol */}
        <div className="text-3xl font-light text-slate-400">+</div>
        
        {/* Leaf Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg">
          <Sparkles className="w-10 h-10 text-green-200" />
        </div>
      </div>
      
      {/* Insight Content */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 leading-tight">
          Getting better sleep could be beneficial for your hot flashes.
        </h3>
        
        <p className="text-slate-600 leading-relaxed text-lg">
          Try adding leafy greens to your diet, such as spinach, kale, and arugula.
        </p>
        
        {/* Action Button */}
        <div className="mt-8">
          <button className="w-full gradient-purple-brand text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:opacity-90 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// Progress Screen Component
const ProgressScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xl font-bold text-purple-800">mona</span>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-purple-600">Oura</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-purple-600">Watch</span>
          </div>
        </div>
      </div>
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Progress</h2>
      
      {/* Sleep Quality Chart */}
      <div className="gradient-purple-slate rounded-xl p-6 mb-4 card-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Moon className="w-5 h-5 text-purple-300" />
            <h3 className="text-lg font-semibold text-white">Sleep Quality</h3>
          </div>
          <span className="text-purple-300 text-sm">7 days</span>
        </div>
        
        {/* Enhanced Sleep Chart */}
        <div className="bg-purple-900/30 rounded-lg p-4 mb-4">
          <svg width="100%" height="140" viewBox="0 0 280 140" className="overflow-visible">
            {/* Background grid */}
            <defs>
              <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            
            {/* Chart area fill */}
            <path 
              d="M 20 110 L 60 100 L 100 120 L 140 90 L 180 85 L 220 80 L 260 70 L 260 140 L 20 140 Z" 
              fill="url(#sleepGradient)"
            />
            
            {/* Chart line */}
            <path 
              d="M 20 110 L 60 100 L 100 120 L 140 90 L 180 85 L 220 80 L 260 70" 
              fill="none" 
              stroke="rgb(147, 51, 234)" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            
            {/* Data points with values */}
            <circle cx="20" cy="110" r="4" fill="rgb(147, 51, 234)"/>
            <text x="20" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">7.2</text>
            
            <circle cx="60" cy="100" r="4" fill="rgb(147, 51, 234)"/>
            <text x="60" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">7.5</text>
            
            <circle cx="100" cy="120" r="4" fill="rgb(147, 51, 234)"/>
            <text x="100" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">6.8</text>
            
            <circle cx="140" cy="90" r="4" fill="rgb(147, 51, 234)"/>
            <text x="140" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">8.1</text>
            
            <circle cx="180" cy="85" r="4" fill="rgb(147, 51, 234)"/>
            <text x="180" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">8.3</text>
            
            <circle cx="220" cy="80" r="4" fill="rgb(147, 51, 234)"/>
            <text x="220" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">8.5</text>
            
            <circle cx="260" cy="70" r="4" fill="rgb(147, 51, 234)"/>
            <text x="260" y="130" textAnchor="middle" fill="rgb(196, 181, 253)" fontSize="10">8.9</text>
          </svg>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white text-2xl font-bold">8.0</span>
            <span className="text-purple-300 text-sm ml-2">hours avg</span>
          </div>
          <div className="text-right">
            <div className="text-green-400 text-sm font-medium">+18%</div>
            <div className="text-purple-300 text-xs">vs last week</div>
          </div>
        </div>
      </div>
      
      {/* Heart Rate Variability */}
      <div className="gradient-purple-slate rounded-xl p-5 mb-4 card-shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">HRV</h3>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-purple-300">Oura</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white text-2xl font-bold">42</span>
            <span className="text-purple-300 text-sm ml-2">ms</span>
          </div>
          <div className="w-16 h-2 bg-purple-900 rounded-full">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-3/5"></div>
          </div>
        </div>
      </div>
      
      {/* Activity Rings */}
      <div className="gradient-purple-slate rounded-xl p-5 mb-4 card-shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Activity</h3>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-purple-300">Watch</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-red-400 text-lg font-bold">347</div>
            <div className="text-purple-300 text-xs">cal</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 text-lg font-bold">22</div>
            <div className="text-purple-300 text-xs">min</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 text-lg font-bold">8.2k</div>
            <div className="text-purple-300 text-xs">steps</div>
          </div>
        </div>
      </div>
      
      {/* Readiness Score */}
      <div className="gradient-purple-slate rounded-xl p-5 card-shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Readiness</h3>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-purple-300">Oura</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white text-2xl font-bold">74</span>
            <span className="text-purple-300 text-sm ml-2">score</span>
          </div>
          <div className="text-right">
            <div className="text-green-400 text-sm font-medium">Good</div>
            <div className="text-purple-300 text-xs">Ready to train</div>
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// User Profile Screen Component
const UserProfileScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-6 h-6 text-purple-600" />
          <span className="text-xl font-bold text-purple-800">mona</span>
        </div>
        <User className="w-6 h-6 text-purple-600" />
      </div>
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-800 mb-6" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</h2>
      
      {/* Profile Picture & Name */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">S</span>
        </div>
        <h3 className="text-xl font-semibold text-purple-800">Sarah Johnson</h3>
        <p className="text-purple-600 text-sm">Member since Jan 2024</p>
      </div>
      
      {/* Profile Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="gradient-purple-slate rounded-xl p-4 text-center card-shadow">
          <div className="text-white text-lg font-bold">28</div>
          <div className="text-purple-300 text-xs">Age</div>
        </div>
        <div className="gradient-purple-slate rounded-xl p-4 text-center card-shadow">
          <div className="text-white text-lg font-bold">165</div>
          <div className="text-purple-300 text-xs">Height (cm)</div>
        </div>
        <div className="gradient-purple-slate rounded-xl p-4 text-center card-shadow">
          <div className="text-white text-lg font-bold">58</div>
          <div className="text-purple-300 text-xs">Weight (kg)</div>
        </div>
      </div>
      
      {/* Health Goals */}
      <div className="gradient-warm-lavender rounded-xl p-5 mb-4 card-shadow">
        <h4 className="text-purple-900 font-semibold mb-3">Health Goals</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-purple-800 text-sm">Improve sleep quality</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-purple-800 text-sm">Reduce hot flashes</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-purple-800 text-sm">Increase daily activity</span>
          </div>
        </div>
      </div>
      
      {/* Connected Devices */}
      <div className="gradient-purple-slate rounded-xl p-5 card-shadow">
        <h4 className="text-white font-semibold mb-3">Connected Devices</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-purple-200">Oura Ring Gen 3</span>
            </div>
            <span className="text-purple-300 text-xs">Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-purple-200">Apple Watch Series 9</span>
            </div>
            <span className="text-purple-300 text-xs">Connected</span>
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// Medical Summary Screen Component
const MedicalSummaryScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-6 h-6 text-purple-600" />
          <span className="text-xl font-bold text-purple-800">mona</span>
        </div>
        <Plus className="w-6 h-6 text-purple-600" />
      </div>
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-800 mb-6" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Medical Records</h2>
      
      {/* Recent Lab Results */}
      <div className="gradient-purple-slate rounded-xl p-6 mb-4 card-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-purple-300" />
            <h3 className="text-lg font-semibold text-white">Recent Lab Work</h3>
          </div>
          <span className="text-purple-300 text-sm">Dec 15, 2024</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Vitamin D</span>
            <span className="text-white font-medium">32 ng/mL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Iron</span>
            <span className="text-white font-medium">85 μg/dL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Thyroid (TSH)</span>
            <span className="text-white font-medium">2.1 mIU/L</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-purple-700">
          <p className="text-purple-300 text-sm">Source: Dr. Smith, Family Medicine</p>
        </div>
      </div>
      
      {/* Hormone Panel */}
      <div className="gradient-purple-slate rounded-xl p-6 mb-4 card-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <BarChart className="w-6 h-6 text-purple-300" />
            <h3 className="text-lg font-semibold text-white">Hormone Panel</h3>
          </div>
          <span className="text-purple-300 text-sm">Nov 28, 2024</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Estradiol</span>
            <span className="text-yellow-400 font-medium">45 pg/mL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Progesterone</span>
            <span className="text-red-400 font-medium">0.8 ng/mL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Cortisol</span>
            <span className="text-white font-medium">12 μg/dL</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-purple-700">
          <p className="text-purple-300 text-sm">Source: Women's Health Clinic</p>
        </div>
      </div>
      
      {/* Add Record Button */}
      <button className="w-full gradient-purple-brand text-white font-semibold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center space-x-2">
        <Plus className="w-5 h-5" />
        <span>Add Medical Record</span>
      </button>
    </div>
  </PhoneFrame>
);

// Symptoms Tracking Screen Component
const SymptomsScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-6 h-6 text-purple-600" />
          <span className="text-xl font-bold text-purple-800">mona</span>
        </div>
        <Plus className="w-6 h-6 text-purple-600" />
      </div>
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-800 mb-6" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Symptoms</h2>
      
      {/* Today's Symptoms */}
      <div className="gradient-warm-lavender rounded-xl p-5 mb-6 card-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-purple-900">Today</h3>
          <span className="text-purple-700 text-sm">Jan 2, 2025</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-purple-800">Hot Flash</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-700 text-sm">Severity:</span>
              <span className="text-red-600 font-medium">7/10</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Moon className="w-5 h-5 text-blue-500" />
              <span className="text-purple-800">Sleep Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-700 text-sm">Rating:</span>
              <span className="text-green-600 font-medium">8/10</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Weekly Trend */}
      <div className="gradient-purple-slate rounded-xl p-6 mb-4 card-shadow">
        <h3 className="text-lg font-semibold text-white mb-4">7-Day Trends</h3>
        
        {/* Hot Flash Trend */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-300">Hot Flashes</span>
            <span className="text-red-400 text-sm">↗ +15%</span>
          </div>
          <div className="w-full bg-purple-900 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
        
        {/* Energy Trend */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-300">Energy Level</span>
            <span className="text-green-400 text-sm">↗ +8%</span>
          </div>
          <div className="w-full bg-purple-900 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-600 to-green-400 h-2 rounded-full w-3/5"></div>
          </div>
        </div>
        
        {/* Mood Trend */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-300">Mood</span>
            <span className="text-blue-400 text-sm">→ Stable</span>
          </div>
          <div className="w-full bg-purple-900 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full w-4/5"></div>
          </div>
        </div>
      </div>
      
      {/* Quick Log Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="gradient-purple-brand text-white font-medium py-3 px-4 rounded-lg text-sm">
          Log Symptom
        </button>
        <button className="border-2 border-purple-400 text-purple-700 font-medium py-3 px-4 rounded-lg text-sm">
          View History
        </button>
      </div>
    </div>
  </PhoneFrame>
);

// Onboarding Screen Component
const OnboardingScreen = () => (
  <PhoneFrame>
    <div className="px-6 pt-2 pb-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <MonaLogo size="small" />
      </div>
      
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Welcome to Mona!</h2>
        <p className="text-purple-600 text-sm leading-relaxed">
          Let's set up your profile to provide personalized health insights
        </p>
      </div>
      
      {/* Profile Setup Form */}
      <div className="space-y-4 mb-6">
        {/* Age Input */}
        <div className="gradient-warm-lavender rounded-xl p-4 card-shadow">
          <label className="text-purple-900 font-medium text-sm mb-2 block">Age</label>
          <input 
            type="number" 
            placeholder="Enter your age"
            className="w-full bg-white/70 text-purple-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            defaultValue="28"
          />
        </div>
        
        {/* Height Input */}
        <div className="gradient-warm-lavender rounded-xl p-4 card-shadow">
          <label className="text-purple-900 font-medium text-sm mb-2 block">Height (cm)</label>
          <input 
            type="number" 
            placeholder="Enter your height"
            className="w-full bg-white/70 text-purple-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            defaultValue="165"
          />
        </div>
        
        {/* Weight Input */}
        <div className="gradient-warm-lavender rounded-xl p-4 card-shadow">
          <label className="text-purple-900 font-medium text-sm mb-2 block">Weight (kg)</label>
          <input 
            type="number" 
            placeholder="Enter your weight"
            className="w-full bg-white/70 text-purple-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            defaultValue="58"
          />
        </div>
        
        {/* Gender Selection */}
        <div className="gradient-warm-lavender rounded-xl p-4 card-shadow">
          <label className="text-purple-900 font-medium text-sm mb-3 block">Gender</label>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium">
              Female
            </button>
            <button className="bg-white/50 text-purple-700 py-2 px-4 rounded-lg text-sm font-medium">
              Male
            </button>
          </div>
        </div>
      </div>
      
      {/* Device Connection */}
      <div className="gradient-purple-slate rounded-xl p-5 mb-6 card-shadow">
        <h4 className="text-white font-semibold mb-3">Connect Your Devices</h4>
        <div className="space-y-3">
          <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-green-300 rounded-full"></div>
            <span>Connect Oura Ring</span>
          </button>
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <span>Connect Apple Watch</span>
          </button>
        </div>
      </div>
      
      {/* Continue Button */}
      <button className="w-full gradient-purple-brand text-white font-semibold py-4 px-6 rounded-xl shadow-lg">
        Complete Setup
      </button>
    </div>
  </PhoneFrame>
);

// Main Mona App Component
const MonaApp = () => {
  return (
    <div className="p-8 min-h-screen" style={{
      background: 'linear-gradient(135deg, hsl(260, 25%, 96%), hsl(270, 20%, 92%))',
      fontFamily: 'Inter, -apple-system, system-ui, sans-serif'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Enhanced Branding */}
        <div className="text-center mb-12">
          <MonaLogo />
          <p className="text-purple-700 text-lg font-medium mt-4">Personalized Health Insights</p>
        </div>

        {/* Eight Phone Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {/* First Row */}
          <DashboardScreen />
          <NutritionScreen />
          <InsightScreen />
          <ProgressScreen />
          
          {/* Second Row */}
          <UserProfileScreen />
          <MedicalSummaryScreen />
          <SymptomsScreen />
          <OnboardingScreen />
        </div>
        
        {/* Footer */}
        <div className="text-center mt-12 text-purple-600">
          <p className="text-sm font-medium">Mona Health App • Design Mockup</p>
          <p className="text-xs mt-1 text-purple-500">Integrated with Oura Ring & Apple Watch</p>
        </div>
      </div>
    </div>
  );
};

export default MonaApp;
