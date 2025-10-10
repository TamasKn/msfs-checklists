import Link from 'next/link'
import ButtonLarge from '@/app/components/micro/button-large'

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center mt-[10rem] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 gap-8">
      <ButtonLarge
        link="/checklist"
        title="Checklists"
        subtitle="Customized Checklists"
      />
      <ButtonLarge
        link="/career"
        title="Career"
        subtitle="Simple Career Mode"
      />
    </div>
  )
}
