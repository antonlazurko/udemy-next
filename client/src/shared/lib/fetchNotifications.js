  import { toast } from 'react-toastify';
  import { ErrorToast } from '@/shared';

  export const fetchSuccessNotification = (successText) => {
    toast.success(successText)
  };
  export const fetchErrorNotification = (statusText, errors) => {
    if (!statusText && errors?.length === 0) return;

    const errorMessages = errors?.filter(Boolean);
    const message = errorMessages?.length ? <ErrorToast errors={errorMessages} /> : statusText;
    toast.error(message);
  };