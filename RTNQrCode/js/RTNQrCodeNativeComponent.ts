import type {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

export interface NativeProps extends ViewProps {
    text?: string;
}

export default codegenNativeComponent<NativeProps>('RTNQrCode') as HostComponent<NativeProps>;