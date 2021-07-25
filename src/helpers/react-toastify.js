import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

// eslint-disable-next-line
export default {
  sucess(text) {
    toast.success(text, { autoClose: 1000 });
  },
  error(text) {
    toast.error(text);
  },
  warning(text) {
    toast.warning(text);
  },
};
