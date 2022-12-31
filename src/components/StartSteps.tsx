import { StartStepsProps } from '../types/props';

const StartSteps = ({ number, content }: StartStepsProps) => (
  <div className="flex items-center justify-center gap-5">
    <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-[#323F5D]">
      <p className="text-white font-semibold text-xl tracking-wide">
        0{number}
      </p>
    </div>

    <div className="max-w-[250px] text-lg text-secondary-white  tracking-wide">
      {content}
    </div>
  </div>
);

export default StartSteps;
