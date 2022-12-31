import Image from 'next/image';
import { NewFeaturesProps } from '../types/props';

const NewFeatures = ({ data }: NewFeaturesProps) => (
  <div className="max-w-[250px]">
    <div className="w-16 h-16 flex items-center justify-center bg-primary-blue rounded-3xl">
      <Image src={data.imgUrl} alt={data.title} width={32} height={32} />
    </div>
    <h2 className="my-3 text-white font-semibold text-2xl">{data.title}</h2>
    <p className="text-secondary-white text-lg leading-8">{data.subtitle}</p>
  </div>
);

export default NewFeatures;
