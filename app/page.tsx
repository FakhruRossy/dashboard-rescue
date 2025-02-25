import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto_250px_1fr] grid-rows-[auto_auto_1fr_20px] min-h-screen">
      {/* Bar cokelat tua di atas dengan menu */}
      <div className="w-full h-12 bg-[#4A3425] col-span-3 flex items-center px-4 text-white font-semibold justify-between">
        <span>Zona Rescue</span>
        <div className="flex items-center gap-4">
          <Image src="/bell-icon.jpg" alt="Notifications" width={24} height={24} />
          <Image src="/mail-icon.jpg" alt="Messages" width={24} height={24} />
          <span className="text-sm text-gray-300">Responses</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-black font-bold">M</div>
            <span>Gunung Merbabu</span>
            <Image src="/dropdown-icon.png" alt="Dropdown" width={12} height={12} />
          </div>
        </div>
      </div>
      
      {/* Informasi tambahan di bawah bar atas */}
      <div className="w-full bg-[#F5E6DA] col-span-3 p-4 flex justify-between items-center text-black">
        <div>
          <h2 className="font-bold">Gunung Merbabu</h2>
          <p className="text-xl font-bold">3,145 m</p>
          <p className="text-orange-600">Elevation</p>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-xl font-bold">129</p>
            <p className="text-gray-600">Total number of Users</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">12</p>
            <p className="text-gray-600">Master</p>
          </div>
        </div>
      </div>
      
      {/* Sidebar cokelat tua di kiri dengan ikon dan teks */}
      <div className="w-20 h-full bg-[#A67C52] row-span-2 flex flex-col items-center py-6 text-white gap-6">
        <div className="flex flex-col items-center gap-2">
          <Image src="/dashboard-icon.png" alt="Dashboard" width={24} height={24} />
          <span className="text-xs">Dashboard</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src="/insights-icon.png" alt="Insights" width={24} height={24} />
          <span className="text-xs">Insights</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src="/history-icon.png" alt="History" width={24} height={24} />
          <span className="text-xs">History</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src="/users-icon.png" alt="Users" width={24} height={24} />
          <span className="text-xs">Users</span>
        </div>
      </div>
      
      {/* Kolom tambahan di samping sidebar */}
      <div className="w-64 h-full bg-[#E0C1A5] row-span-2 flex flex-col p-4 gap-4 text-black">
        <input
          type="text"
          placeholder="Search (Device)"
          className="p-2 rounded border border-gray-400 w-full"
        />
        <h2 className="text-lg font-bold">Device List</h2>
        <div className="flex gap-2 text-sm">
          <span className="font-bold text-blue-600">All</span>
          <span className="text-gray-600">Master</span>
          <span className="text-gray-600">Slave</span>
        </div>
        
        {/* Dummy devices - 7 offline */}
        <div className="mt-4 flex flex-col gap-2">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-md">
              <p className="font-bold">Device {index + 1}</p>
              <p className="text-sm text-red-600">Offline</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ganti background hitam dengan gambar map tanpa stretch */}
      <main className="flex flex-col gap-8 row-start-3 col-start-3 items-center sm:items-start p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/map-image.jpg"
            alt="Map"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}
