import { StartStepsProps } from '../types/props';

const StartSteps = ({ number, content }: StartStepsProps) => (
  <div className="flex items-center justify-center gap-6">
    <div className="w-[70px] h-[70px] rounded-3xl flex items-center justify-center bg-primary-blue">
      <p className="text-white font-semibold text-xl tracking-wide">
        0{number}
      </p>
    </div>

    <div className="max-w-[250px] text-lg text-secondary-white  tracking-wider">
      {content}
    </div>
  </div>
);

export default StartSteps;
