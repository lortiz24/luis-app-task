import { PlusIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { Button } from '../ui/Button';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTaskForm } from '../new-task-form/NewTaskForm';

export const CreateNewTask = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="text">
          <span className='flex items-center gap-2'>
            <PlusIcon className="text-white w-5 h-5" />
            Create task
          </span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[450px] rounded-md bg-bg-2 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_20px_25px_-30px] focus:outline-none">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-bold text-white">Create new task</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="text" leftIcon={<XMarkIcon className="text-white w-5 h-5" />} />
            </Dialog.Close>
          </div>
          <NewTaskForm
            lists={[
              {
                id: '1',
                title: 'List 1',
                created_at: new Date(),
                updated_at: new Date(),
              },
            ]}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
