import igIcon from '../../assets/icons/IconInstagram.svg'

export default function LeadFooter() {
    return (
        <>
            <footer className="bg-[#014B96] text-white py-6 text-sm">
  <div className="max-w-7xl text-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-2">
    <p>Copyright © BASF SA 2025</p>
    <a href="/politica-privacidad" className="hover:text-gray-200">Política de Privacidad</a>
    <a
      href="https://www.instagram.com/basf_ed_ccs/"
      target='_blank'
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:opacity-90"
      aria-label="Seguinos en Instagram">
    <img
      src={igIcon}
      alt='Logo de instagram'
      aria-hidden="true"
      className='w-5 h-5'
    />¡Seguinos en Instagram!</a> 
  </div>
</footer>
        </>
    )
}