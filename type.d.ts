import type { IconProps } from 'phosphor-react-native';
import type { ComponentType } from 'react';

declare global {
    interface TabIconProps {
        focused: boolean;
        icon: ComponentType<IconProps>;
    }
}

export { };

