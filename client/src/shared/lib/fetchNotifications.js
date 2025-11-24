'use client';
import { toast } from 'react-toastify';
  import { ErrorToast } from '@/shared';

  export const fetchSuccessNotification = (successText) => {
    toast.success(successText)
  };
  export const fetchErrorNotification = (errors) => {
    if (errors?.length === 0) return;

    toast.error(<ErrorToast errors={errors}/>);
  };