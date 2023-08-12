import success from 'src/assets/icon-success.svg';
import danger from 'src/assets/icon-danger.svg';

const getIcon = (alertType: string) =>
  alertType === 'success' ? success : danger;

export default getIcon;
