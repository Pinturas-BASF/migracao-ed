import logoHeader from '../../assets/logo/basfLogo.svg'

export default function LeadHeader() {
    return (
        <>
            <header className="bg-[#014B96] py-4 shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-center px-6">
    <img
      src={logoHeader}
      alt="Logo de BASF"
      fetchpriority="high"
      className="h-10 md:h-28"
    />
  </div>
</header>
        </>
    )
}