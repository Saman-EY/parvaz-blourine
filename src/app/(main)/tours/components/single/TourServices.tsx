import { OverflowTooltip } from '@/components/ui/tooltip-text';
import { useMyDataCxt } from '@/store/data-context';
import Image from 'next/image';

function TourServices() {
  const { currentCourse } = useMyDataCxt();

  return (
    <section className="bg-[#F5F5F5] p-5 flex flex-col items-center rounded-xl mt-5">
      <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>خدمات تور</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-6 mx-auto mt-5">
        {currentCourse?.services?.map((item, index) => (
          <div key={index} className="flex items-start gap-2 text-[#444444] text-sm">
            {/* <Image className="w-5 h-5" src={item.preview.path} alt="" width={10} height={10} /> */}
            {item.preview.svg && (
              <div className="size-5 flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.preview.svg }} />
            )}
            <OverflowTooltip maxWidth={'150px'} text={item.name || '-'} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourServices;
