import {DeviceUUID} from 'device-uuid';

const getDeviceId = () => {
  try {
    return new DeviceUUID().get(); // 정상적으로 DeviceUUID를 가져옴
  } catch (error) {
    console.error('DeviceUUID 에러:', error);
    return '1234'; // 에러 발생 시 기본값 반환
  }
};

export default getDeviceId;
