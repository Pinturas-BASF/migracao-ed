import Header from '../../components/LeadHeader/LeadHeader'
import LeadTerminosMessage from '../../components/LeadTerminos/LeadTerminosMessage'
import Footer from '../../components/LeadFooter/LeadFooter'


export default function Terminos() {
    return (
    <>
        <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 bg-gray-100 grid place-items-center px-6'>
        <LeadTerminosMessage />
        </main>
        <Footer />
        </div>
    </>
    )
}