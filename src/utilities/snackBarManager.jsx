import { useSnackbar } from "notistack";

let useSnackBarRef;

export const SnackBarUtilitiesConfigurator = () => {
  useSnackBarRef = useSnackbar();
  return null;
}

export const SnackbarUtilities = {
  toast(msg, variant = "default") {
    useSnackBarRef.enqueueSnackbar(msg, { variant});
  },
  success(msg) {
    this.toast(msg, "success");
  },
  error(msg) {
    this.toast(msg, "error");
  },
  info(msg) {
    this.toast(msg, "info");
  },
  warning(msg) {
    this.toast(msg, "warning");
  }
}
