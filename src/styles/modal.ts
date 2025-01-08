import {COMMON} from './common';

export const pickConfirm: ReactModal.Styles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
  },
  content: {
    width: '560px',
    height: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    padding: '40px 30px',
    backgroundColor: COMMON.color.lightBackgroundColor,
  },
};
