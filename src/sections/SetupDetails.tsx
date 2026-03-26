import { ArrowLeft, ExternalLink } from 'lucide-react';
import { tourScheduleConfig } from '../config';

interface SetupItem {
  name: string;
  category: string;
  specs?: string;
  description?: string;
  image: string;
}

interface SetupDetailsProps {
  onBack: () => void;
}

const SetupDetails = ({ onBack }: SetupDetailsProps) => {
  const PC_COMPONENTS: SetupItem[] = [
    {
      name: 'Ryzen 7 9800X3D',
      category: 'CPU',
      specs: '8-Core / 16-Thread | 5.0 GHz Max',
      description: 'High-performance processor for rendering and production',
      image: '/venue-1.jpg',
    },
    {
      name: 'Gigabyte RTX 5070TI',
      category: 'GPU',
      specs: '16GB GDDR7 | PCIe 4.0',
      description: 'Graphics powerhouse for creative workflows',
      image: '/venue-2.jpg',
    },
    {
      name: 'G.Skill Trident Z Neo',
      category: 'RAM',
      specs: '32GB | DDR5 6400MHz',
      description: 'High-speed memory for seamless multitasking',
      image: '/venue-1.jpg',
    },
    {
      name: 'ID Cooling Frostflow X 280',
      category: 'CPU Cooler',
      specs: '280mm AIO Liquid Cooler',
      description: 'Efficient thermal management under load',
      image: '/venue-1.jpg',
    },
    {
      name: 'Samsung 990 Pro',
      category: 'SSD',
      specs: '1TB NVMe | PCIe 4.0 | 7,450 MB/s',
      description: 'Ultra-fast primary storage for OS and applications',
      image: '/venue-1.jpg',
    },
    {
      name: 'Seagate Barracuda',
      category: 'HDD',
      specs: '2TB | 7200 RPM',
      description: 'High-capacity secondary storage for projects',
      image: '/venue-1.jpg',
    },
    {
      name: 'Seasonic 850W Gold',
      category: 'Power Supply',
      specs: '850W | 80+ Gold | Modular',
      description: 'Reliable power delivery with excellent efficiency',
      image: '/venue-1.jpg',
    },
    {
      name: 'ASRock B650M PG Riptide',
      category: 'Motherboard',
      specs: 'mATX | AM5 Socket',
      description: 'Feature-rich platform for Ryzen 9000 series',
      image: '/venue-1.jpg',
    },
    {
      name: 'NZXT H5 Flow',
      category: 'PC Case',
      specs: 'Mid-Tower | 2x 120mm + 1x 120mm Fan',
      description: 'Modern, clean aesthetics with excellent airflow',
      image: '/venue-2.jpg',
    },
  ];

  const PERIPHERALS: SetupItem[] = [
    {
      name: 'ASUS VG279QG',
      category: 'Monitor 1',
      specs: '27" | 1080p | 240Hz | IPS',
      description: 'High refresh ultra-responsive gaming monitor',
      image: '/venue-3.jpg',
    },
    {
      name: 'ASUS VG278GM',
      category: 'Monitor 2',
      specs: '27" | 1080p | 165Hz | IPS',
      description: 'Secondary high-performance gaming/work monitor',
      image: '/venue-3.jpg',
    },
    {
      name: 'Logitech G Pro X Superlight 2 SE',
      category: 'Mouse',
      specs: 'Lightweight | 44000 DPI | Wireless',
      description: 'Ultra-responsive gaming mouse with precision tracking',
      image: '/venue-3.jpg',
    },
    {
      name: 'Razer Huntsman Mini V3 Pro',
      category: 'Keyboard',
      specs: '60% Compact | Optical Switches | 0.1mm Actuation',
      description: 'Professional-grade mechanical keyboard for gaming and coding',
      image: '/venue-3.jpg',
    },
    {
      name: 'SteelSeries QCK 3XL RGB',
      category: 'Mousepad',
      specs: '3XL Size | RGB Lighting | Cloth',
      description: 'Large precision mousepad with RGB aesthetic',
      image: '/venue-3.jpg',
    },
  ];

  const STUDIO: SetupItem[] = [
    {
      name: 'Fifine SC 3',
      category: 'Audio Mixer',
      specs: '3-Channel | USB | Compact',
      description: 'Professional mixer for podcast and stream management',
      image: '/venue-4.jpg',
    },
    {
      name: 'Fifine AM8',
      category: 'Microphone',
      specs: 'Cardioid | USB | 16mm Capsule',
      description: 'Crystal clear sound for music production and streaming',
      image: '/venue-4.jpg',
    },
    {
      name: 'Logitech C922 Pro',
      category: 'Webcam',
      specs: '1080p | 30fps | Fixed Focus',
      description: 'High-quality webcam for streaming and content creation',
      image: '/venue-4.jpg',
    },
    {
      name: 'Logitech G Pro X',
      category: 'Headset',
      specs: 'Wireless | Pro-Grade Audio | Detachable Mic',
      description: 'Professional wireless headset for gaming and monitoring',
      image: '/venue-4.jpg',
    },
  ];

  const ComponentCard = ({ item }: { item: SetupItem }) => (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-neon-cyan/50 bg-void-dark/50 backdrop-blur-sm transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-void-dark">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
          {item.category}
        </p>
        <h3 className="font-display text-xl mb-2">{item.name}</h3>
        {item.specs && <p className="text-white/60 text-sm mb-3">{item.specs}</p>}
        {item.description && <p className="text-white/70 text-sm">{item.description}</p>}
      </div>

      {/* Hover accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-void-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="mb-20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono-custom text-sm uppercase tracking-wider">Back</span>
          </button>
          <div>
            <h1 className="font-display text-6xl md:text-7xl mb-4">Full Setup Details</h1>
            <p className="font-mono-custom text-sm text-neon-soft/60 uppercase tracking-wider">
              MY INTERDIMENSIONAL ARSENAL
            </p>
            <p className="text-lg text-white/70 mt-4 max-w-3xl">
              A complete breakdown of every component in my creative setup. From processing power to input devices, each element is chosen to optimize performance across development, music production, and content creation.
            </p>
          </div>
        </div>

        {/* PC COMPONENTS SECTION */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-2">PC Build</h2>
            <p className="font-mono-custom text-sm text-white/50">Core computing components</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PC_COMPONENTS.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* PERIPHERALS SECTION */}
        <div className="mb-24 border-t border-white/10 pt-20">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-2">Gaming Peripherals</h2>
            <p className="font-mono-custom text-sm text-white/50">Input devices and displays</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERIPHERALS.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* STUDIO SECTION */}
        <div className="mb-24 border-t border-white/10 pt-20">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-2">Studio Setup</h2>
            <p className="font-mono-custom text-sm text-white/50">Audio and content creation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDIO.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* WORKFLOW EXPLANATION */}
        <div className="relative border-t border-white/10 pt-20 mb-20">
          <h2 className="font-display text-3xl mb-8">Why This Setup?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-display text-xl mb-4 text-neon-cyan">Performance</h3>
              <p className="text-white/70 leading-relaxed">
                The Ryzen 7 9800X3D paired with an RTX 5070TI provides exceptional compute power for rendering complex visuals and processing high-quality audio. The 32GB of fast DDR5 RAM ensures smooth multitasking across creative applications.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl mb-4 text-neon-cyan">Storage</h3>
              <p className="text-white/70 leading-relaxed">
                The Samsung 990 Pro NVMe SSD offers blazing-fast boot times and project loading, while the 2TB Seagate HDD provides ample space for archival and backup of finished projects and raw footage.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4 text-neon-cyan">Peripherals</h3>
              <p className="text-white/70 leading-relaxed">
                Dual high-refresh monitors provide unmatched visual real estate for coding, design, and gaming. The lightweight Logitech mouse and mechanical Razer keyboard deliver precision and comfort during long production sessions.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4 text-neon-cyan">Audio</h3>
              <p className="text-white/70 leading-relaxed">
                Professional-grade Fifine audio equipment ensures crystal-clear recording and mixing while the Logitech headset provides accurate monitoring. Everything is designed for podcast recording and music production.
              </p>
            </div>
          </div>

          <div className="bg-void-dark/50 border border-white/10 rounded-xl p-8">
            <p className="text-white/70 leading-relaxed">
              Every component in this arsenal is carefully selected to optimize performance for both creative work and content production. From rendering complex visuals to streaming high-quality audio, this setup delivers the power needed to bring ideas to life. Whether you're looking to build a similar setup or curious about my workflow, feel free to reach out with any questions about the gear I use daily.
            </p>
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="text-center border-t border-white/10 pt-12">
          <button
            onClick={onBack}
            className="px-8 py-4 bg-neon-cyan text-void-black font-display text-sm uppercase tracking-wider rounded-full hover:bg-neon-cyan/80 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupDetails;
