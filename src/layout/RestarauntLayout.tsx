

export default function RestarauntLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#129d42]">
      <div className="m-auto w-full max-w-4xl min-h-[100vh] bg-white shadow-lg relative">
        {children}
      </div>
    </div>
  )
}
