import * as Progress from '@radix-ui/react-progress';

export const Loader = () => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <Progress.Root
      className="relative overflow-hidden bg-gray-800 rounded-full w-32 h-3"
      style={{ transform: 'translateZ(0)' }}
      value={80}
      aria-label="Cargando"
    >
      <Progress.Indicator
        className="bg-primary h-full w-full transition-all duration-700 animate-pulse"
        style={{ width: '100%' }}
      />
    </Progress.Root>
    <span className="mt-4 text-gray-300 text-sm animate-pulse">Cargando...</span>
  </div>
);
