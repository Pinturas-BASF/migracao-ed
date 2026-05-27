import Header from '../../components/LeadHeader/LeadHeader'
import LeadGraciasMessage from '../../components/LeadGracias/LeadGraciasMessage'
import Footer from '../../components/LeadFooter/LeadFooter'
export default function Gracias() {
    return (
        <>
        <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 bg-gray-100 grid place-items-center px-6'>
        <LeadGraciasMessage />
        </main>
        <Footer />
        </div>
        </>
    )
}